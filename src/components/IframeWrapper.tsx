"use client";

import { useEffect, useState } from "react";

export function IframeWrapper({ src, title }: { src: string; title: string }) {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "resize" && event.data.height) {
        // Add a 50px buffer to ensure no inner scrollbar triggers
        setHeight(`${event.data.height + 50}px`);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe 
      src={src} 
      style={{ height, minHeight: '100vh' }}
      className="w-full border-none bg-transparent overflow-hidden block" 
      scrolling="no"
      title={title}
    />
  );
}
