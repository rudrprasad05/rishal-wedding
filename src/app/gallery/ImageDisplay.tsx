import React from "react";

export default function ImageDisplay({ src }: { src: string }) {
  return (
    <div className="w-full aspect-square rounded-md overflow-hidden mt-12">
      <img className="w-full h-full object-cover" src={src} />
    </div>
  );
}
