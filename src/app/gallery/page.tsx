import React from "react";
import { GetAllImageDetails } from "../actions/image";
import ImageDisplay from "./ImageDisplay";

export default async function page() {
  const images = await GetAllImageDetails();
  console.log(images.length);
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-4/5 mx-auto mt-12">
        {images.map((i) => (
          <ImageDisplay
            key={i.id}
            src={
              "https://mctechfiji.s3.us-east-1.amazonaws.com/wedding/" + i.src
            }
          />
        ))}
      </div>
      {images.length == 0 && (
        <div className="flex items-center justify-center text-slate-400  rounded-xl w-4/5 mx-auto h-[200px] border-dashed border">
          <p>No images yet. Upload some</p>
        </div>
      )}
    </>
  );
}
