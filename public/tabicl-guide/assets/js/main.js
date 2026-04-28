/**
 * The Illustrated Tabular Foundation Model - Core Logic
 *
 * Handles KaTeX rendering, scroll reveals, and the interactive
 * softmax/attention-fading widgets in §10 (QKV) and §13 (QASSMax).
 */

const TabICLApp = (() => {

  // --- Constants for the interactive figures ---
  // Section 10: QKV walkthrough — toy 4-D vectors that produce sensible scores.
  // Q dot K_i values picked so that w_001 ≈ 0.52, w_002 ≈ 0.06, w_003 ≈ 0.42 after softmax(/√d).
  const QKV_SCORES = { c001: 4.8, c002: 0.4, c003: 4.6 };  // raw dot products
  const QKV_DK = 4;  // sqrt-of dim for scaling

  // Section 13: Attention-fading demo. We compare a flat softmax vs QASSMax
  // (queries scaled by log(n)) for a single test row attending over n training rows.
  // Score against the "anchor" row is fixed; non-anchor rows are noise.
  const ANCHOR_SCORE = 6.0;
  const NOISE_SCORE = 1.5;

  const state = {
    n: 100,                  // current dataset size for §13
    katexAttempts: 0,
  };

  // --- Math utilities ---
  const softmax = (logits) => {
    // Loop over logits to find max, since spreading 1M+ args overflows V8's stack.
    let m = -Infinity;
    for (let i = 0; i < logits.length; i++) if (logits[i] > m) m = logits[i];
    const exps = logits.map(v => Math.exp(v - m));
    let s = 0;
    for (let i = 0; i < exps.length; i++) s += exps[i];
    return exps.map(v => v / s);
  };

  // QASSMax-style scaling. The real thing learns a per-element MLP plus a
  // query-dependent gate; we use sqrt(log(n)) here. Why sqrt: pure log(n)
  // saturates the anchor at 1.0 across the slider's range, so you can't see
  // anything change. sqrt(log(n)) keeps the contrast with flat softmax visible
  // at every n the slider hits.
  const softmaxScaled = (logits, n) => {
    const factor = Math.sqrt(Math.log(Math.max(n, 2)));
    return softmax(logits.map(v => v * factor));
  };

  // --- §10: QKV softmax bar widget ---
  const renderQKVBars = () => {
    const container = document.getElementById('qkv-bars');
    if (!container) return;

    const scores = [QKV_SCORES.c001, QKV_SCORES.c002, QKV_SCORES.c003];
    const scaled = scores.map(s => s / Math.sqrt(QKV_DK));
    const probs = softmax(scaled);
    const labels = ['C_001', 'C_002', 'C_003'];
    const meta = ['default', 'no default', 'default'];

    container.innerHTML = '';
    const max = Math.max(...probs);

    probs.forEach((p, i) => {
      const col = document.createElement('div');
      col.className = 'q-bar-col';

      const val = document.createElement('div');
      val.className = 'q-bar-val';
      val.textContent = p.toFixed(2);

      const fill = document.createElement('div');
      fill.className = 'q-bar-fill';
      fill.style.height = Math.max(4, (p / max) * 150) + 'px';
      // Default-class rows get the row-train color, no-default gets a desaturated tint
      fill.style.background = meta[i] === 'default' ? 'var(--row-train)' : 'var(--slate2)';

      const lbl = document.createElement('div');
      lbl.className = 'q-bar-lbl';
      lbl.innerHTML = `<strong>${labels[i]}</strong><br>${meta[i]}`;

      col.append(val, fill, lbl);
      container.appendChild(col);
    });

    // The combined "default" weight is the answer the model arrives at
    const defaultWeight = probs[0] + probs[2];
    const out = document.getElementById('qkv-default-weight');
    if (out) out.textContent = defaultWeight.toFixed(2);
  };

  // --- §13: Attention-fading widget ---
  // Two side-by-side bar charts: standard softmax (fades) vs scaled softmax (sharp).
  const renderFadingBars = () => {
    const flatEl = document.getElementById('fade-bars-flat');
    const sharpEl = document.getElementById('fade-bars-sharp');
    if (!flatEl || !sharpEl) return;

    const n = state.n;
    // Build n logits: 1 anchor + (n-1) noise rows
    const logits = [ANCHOR_SCORE];
    for (let i = 1; i < n; i++) logits.push(NOISE_SCORE);

    const flatProbs = softmax(logits);
    const sharpProbs = softmaxScaled(logits, n);

    // Display: anchor bar height + average noise bar height + count
    const renderInto = (el, probs, color) => {
      el.innerHTML = '';
      const anchor = probs[0];
      const noiseAvg = probs.length > 1
        ? probs.slice(1).reduce((a, b) => a + b, 0) / (probs.length - 1)
        : 0;
      const max = Math.max(anchor, noiseAvg, 0.01);

      const cols = [
        { val: anchor, lbl: 'Anchor row', sub: '(the relevant one)', color },
        { val: noiseAvg, lbl: 'Avg noise row', sub: `(${probs.length - 1} of these)`, color: 'var(--slate2)' },
      ];

      cols.forEach(c => {
        const col = document.createElement('div');
        col.className = 'q-bar-col';

        const val = document.createElement('div');
        val.className = 'q-bar-val';
        val.textContent = c.val < 0.001 ? c.val.toExponential(1) : c.val.toFixed(3);

        const fill = document.createElement('div');
        fill.className = 'q-bar-fill';
        fill.style.height = Math.max(4, (c.val / max) * 130) + 'px';
        fill.style.background = c.color;

        const lbl = document.createElement('div');
        lbl.className = 'q-bar-lbl';
        lbl.innerHTML = `<strong>${c.lbl}</strong><br>${c.sub}`;

        col.append(val, fill, lbl);
        el.appendChild(col);
      });
    };

    renderInto(flatEl, flatProbs, 'var(--row-test)');
    renderInto(sharpEl, sharpProbs, 'var(--row-test)');

    const nReadout = document.getElementById('fade-n-val');
    if (nReadout) nReadout.textContent = n.toLocaleString();

    // The pedagogical metric is the absolute anchor weight. Under flat softmax it
    // collapses toward zero as n grows. Under QASSMax it stays close to 1.
    const flatAnchorEl = document.getElementById('fade-ratio-flat');
    const sharpAnchorEl = document.getElementById('fade-ratio-sharp');
    const fmtWeight = (w) => {
      if (w >= 0.01) return w.toFixed(3);
      return w.toExponential(1).replace('e-', ' × 10⁻');
    };
    if (flatAnchorEl) flatAnchorEl.textContent = fmtWeight(flatProbs[0]);
    if (sharpAnchorEl) sharpAnchorEl.textContent = fmtWeight(sharpProbs[0]);
  };

  // --- KaTeX rendering ---
  const renderMath = () => {
    if (typeof katex === 'undefined') {
      if (state.katexAttempts < 25) {
        state.katexAttempts++;
        return setTimeout(renderMath, 200);
      }
      return;
    }

    // Static formulas keyed by element id
    const formulas = [
      ['fmla-qkv-score',
       '\\text{score}(C_{004}, C_{001}) = \\frac{q_{004} \\cdot k_{001}}{\\sqrt{d_k}}'],
      ['fmla-qassmax',
       '\\tilde{q}_i = q_i \\cdot \\log(n) \\cdot s'],
      ['fmla-loss',
       '\\mathcal{L}(\\theta) = \\mathbb{E}_{\\mathcal{D} \\sim p(\\cdot)}\\!\\left[-\\log q_\\theta(y_{\\text{test}} \\mid x_{\\text{test}}, \\mathcal{D}_{\\text{train}})\\right]'],
    ];

    formulas.forEach(([id, tex]) => {
      const el = document.getElementById(id);
      if (el) katex.render(tex, el, { displayMode: true, throwOnError: false });
    });

    // Inline math: $...$ / $$...$$
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
        throwOnError: false,
      });
    }
  };

  // --- Scroll reveal observer ---
  const setupReveal = () => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.rv').forEach(el => el.classList.add('s'));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('s');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('.rv').forEach(el => obs.observe(el));
  };

  // --- Init ---
  const init = () => {
    // Wire the §13 attention-fading slider (log scale: 10 → 1,000,000)
    const slider = document.getElementById('fade-n-slider');
    if (slider) {
      const update = () => {
        const exp = parseFloat(slider.value);
        state.n = Math.round(Math.pow(10, exp));
        renderFadingBars();
      };
      slider.addEventListener('input', update);
    }

    renderQKVBars();
    renderFadingBars();
    renderMath();
    setupReveal();
  };

  return { init };
})();

document.addEventListener('DOMContentLoaded', TabICLApp.init);
