import { IframeWrapper } from "@/components/IframeWrapper";

export const metadata = {
  title: "An Illustrated Guide to Model Distillation | Divyam Arora",
  description: "How large neural networks teach smaller ones what they know.",
};

export default function ModelDistillationGuide() {
  return (
    <div className="-mx-6 -my-12 sm:-mx-6 sm:-my-20 w-[calc(100%+3rem)] relative flex flex-col">
      <IframeWrapper 
        src="/my-portfolio-blog/distillation-guide/index.html" 
        title="An Illustrated Guide to Model Distillation" 
      />
    </div>
  );
}
