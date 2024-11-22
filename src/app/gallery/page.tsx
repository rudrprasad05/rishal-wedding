import React from "react";
import { GetAllImageDetails } from "../actions/image";
import ImageDisplay from "./ImageDisplay";

export default async function page() {
  const images = await GetAllImageDetails();
  return (
    <div className="grid grid-cols-5 gap-6 w-4/5 mx-auto">
      {images.map((i) => (
        <ImageDisplay
          key={i.id}
          src={"https://mctechfiji.s3.us-east-1.amazonaws.com/wedding/" + i.src}
        />
      ))}
    </div>
  );
}
