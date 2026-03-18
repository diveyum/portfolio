export const metadata = {
  title: "An Illustrated Guide to Model Distillation | Divyam Arora",
  description: "How large neural networks teach smaller ones what they know.",
};

export default function ModelDistillationGuide() {
  return (
    <div className="-mx-6 -my-12 sm:-mx-6 sm:-my-20 h-[calc(100vh-73px)] w-[calc(100%+3rem)] relative">
      <iframe 
        src="/my-portfolio-blog/distillation-guide/index.html" 
        className="w-full h-full border-none bg-transparent" 
        title="An Illustrated Guide to Model Distillation"
      />
    </div>
  );
}
