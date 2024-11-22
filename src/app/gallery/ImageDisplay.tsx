import React from "react";

export default function ImageDisplay({ src }: { src: string }) {
  return (
    <div className="w-full h-full aspect-square">
      <img className="w-full h-full object-cover" src={src} />
    </div>
  );
}
