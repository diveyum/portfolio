import IframeWrapper from '@/components/IframeWrapper';

export const metadata = {
  title: 'The Illustrated Tabular Foundation Model | Divyam Arora',
  description: 'A visual deep dive into TabICLv2. How a single forward pass replaces gradient descent on tabular data.',
};

export default function TabICLPage() {
  return (
    <IframeWrapper
      src="/portfolio/tabicl-guide/index.html"
      title="The Illustrated Tabular Foundation Model"
    />
  );
}
