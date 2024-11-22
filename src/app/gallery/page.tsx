import React from "react";
import { GetAllImageDetails } from "../actions/image";
import ImageDisplay from "./ImageDisplay";

export default async function page() {
  const images = await GetAllImageDetails();
  return (
    <div>
      {images.map((i) => (
        <ImageDisplay key={i.id} src={i.src} />
      ))}
    </div>
  );
}
