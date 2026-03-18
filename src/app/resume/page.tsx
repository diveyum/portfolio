export const metadata = {
  title: "Resume | Divyam Arora",
  description: "Data Scientist experience and education.",
};

export default function Resume() {
  return (
    <div className="max-w-3xl mx-auto space-y-16">
      <header className="border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Divyam Arora</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6">
          <p className="text-xl text-slate-600 dark:text-slate-400 font-serif italic">Data Scientist</p>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <a href="mailto:divyamkotaarora2@gmail.com" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">Email</a>
            <a href="https://github.com/diveyum" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/divyama" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Data Scientist with 2.5+ years experience in shipping GenAI and ML systems across financial services and consulting. Built computer vision systems, document intelligence pipelines, and predictive models from development through deployment.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Experience</h2>
        <div className="space-y-12">
          
          {/* Amex Senior Analyst */}
          <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800">
            <div className="absolute w-3 h-3 bg-cyan-600 dark:bg-cyan-500 rounded-full -left-[7px] top-2 shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#020617]"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Data Science Senior Analyst</h3>
              <span className="text-sm font-mono text-slate-500 dark:text-slate-400">Mar 2026 – Present</span>
            </div>
            <p className="text-sm font-bold text-cyan-600 dark:text-cyan-500 mb-4 uppercase tracking-wider">American Express – Gurugram</p>
            
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2 italic">Automated Research and Content Generation Pipeline</p>
              <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed marker:text-cyan-600">
                <li>Built an automated research and content generation pipeline using LangGraph, Gemini API, and MCP, reducing monthly GenAI risk briefing production time from 8+ hours to under 2 hours.</li>
                <li>Designed a multi-node workflow for ReAct-based web research, weighted topic scoring, and structured drafting with human-in-the-loop review.</li>
                <li>Implemented hallucination control via three-stage verification: tracing claims to URLs, flagging conflicts, and validating links before final output.</li>
                <li>Integrated Model Context Protocol (MCP) for dynamic access to web search and document parsing, alongside automated Python-based document rendering.</li>
              </ul>
            </div>
          </div>

          {/* Amex Analyst */}
          <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800">
            <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full -left-[7px] top-2 shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#020617]"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Data Science Analyst</h3>
              <span className="text-sm font-mono text-slate-500 dark:text-slate-400">Sept 2024 – Feb 2026</span>
            </div>
            <p className="text-sm font-bold text-cyan-600 dark:text-cyan-500 mb-4 uppercase tracking-wider">American Express – Gurugram</p>
            
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2 italic">Encoder-based Hallucination Detector</p>
              <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed marker:text-slate-400">
                <li>Fine-tuned ModernBERT transformer for token-level hallucination detection in RAG pipelines, achieving 79% F1 score.</li>
                <li>Achieved significantly smaller footprint than LLM-based judges using encoder-only architecture, enabling real-time inference.</li>
                <li>Leveraged rotary positional embeddings to handle long-context RAG sequences beyond standard encoder token limits.</li>
                <li>Implemented end-to-end pipeline with dynamic padding, AdamW optimizer, and F1-score-based model selection.</li>
              </ul>
            </div>
          </div>

          {/* Accenture */}
          <div className="relative pl-6 border-l-2 border-transparent">
            <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full -left-[7px] top-2 shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#020617]"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Data Science Associate</h3>
              <span className="text-sm font-mono text-slate-500 dark:text-slate-400">Aug 2023 – Sept 2024</span>
            </div>
            <p className="text-sm font-bold text-cyan-600 dark:text-cyan-500 mb-4 uppercase tracking-wider">Accenture Strategy & Consulting – Gurugram</p>
            
            <div className="mb-6">
              <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2 italic">GenAI-Enabled Banking Chatbot</p>
              <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed marker:text-slate-400">
                <li>Built RAG chatbot for a leading public-sector Indian bank using Azure OpenAI and LangChain for document retrieval.</li>
                <li>Reduced customer query resolution time by 30% by enabling frontline staff to search regulatory circulars via natural language.</li>
                <li>Optimized inference costs through chunking strategies for text and tabular data, prompt engineering, and response caching.</li>
                <li>Implemented Responsible AI guardrails including PII filtering, toxicity detection, and human feedback loops.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2 italic">Vehicle Image Quality Assurance System</p>
              <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed marker:text-slate-400">
                <li>Built image classification model for a leading German automaker to detect color and rim mismatches in virtual showroom.</li>
                <li>Performed feature engineering using OpenCV and SIFT, with LightGBM and AWS Rekognition for classification and labeling.</li>
                <li>Improved classification accuracy through hyperparameter optimization using RandomizedSearchCV across model variants.</li>
                <li>Deployed on AWS Glue and Athena with multiprocessing, reducing processing time by 50% over manual QA workflows.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Publications</h2>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-bold text-slate-800 dark:text-slate-100">Agentic AI Validation Framework</h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">2025</span>
          </div>
          <p className="text-sm text-cyan-600 dark:text-cyan-500 mb-4">American Express (Internal Whitepaper)</p>
          <ul className="list-disc list-outside ml-4 text-sm text-slate-600 dark:text-slate-400 space-y-2 marker:text-slate-400">
            <li>Co-authored enterprise whitepaper on model validation standards for autonomous AI agents aligned to SR 11-7 requirements.</li>
            <li>Designed multi-state agent architecture with guardrail transitions covering memory, planning, execution, and synthesis.</li>
            <li>Authored scenario-based testing methodology spanning functional, boundary, security, and red teaming categories.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Education</h2>
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-slate-800 dark:text-slate-100">Bachelor of Science in Economics (Honors)</h3>
            <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">2020 – 2023</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400">Symbiosis International University, Pune</p>
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Certifications</h2>
        <ul className="text-slate-600 dark:text-slate-400 space-y-2">
          <li><span className="text-cyan-600 dark:text-cyan-500 mr-2">•</span> NLP Specialization (DeepLearning.AI)</li>
          <li><span className="text-cyan-600 dark:text-cyan-500 mr-2">•</span> IBM Data Science Certification</li>
          <li><span className="text-cyan-600 dark:text-cyan-500 mr-2">•</span> Data Scientist Core I, II, III (Workera)</li>
        </ul>
      </section>
    </div>
  );
}
