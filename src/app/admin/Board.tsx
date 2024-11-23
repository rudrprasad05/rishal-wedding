"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Img from "./Img";

export default function Board({ images }: { images: any[] }) {
  const downloadAll = () => {};

  return (
    <>
      <div className="flex items-center justify-between w-4/5 mx-auto">
        <h1 className="text-2xl">Admin Dashboard</h1>
        <Button onClick={() => downloadAll()}>Bulk Download</Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-4/5 mx-auto mt-4">
        {images.map((e) => (
          <Img img={e} />
        ))}
      </div>
    </>
  );
}
