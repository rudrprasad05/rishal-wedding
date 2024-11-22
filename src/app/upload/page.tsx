"use client";

import { cn } from "@/lib/utils";
import { Loader2, Upload } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import * as path from "path";
import { PostImageDetails } from "../actions/image";

export default function page() {
  const [imageUpload, setImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [isImageInCloud, setIsImageInCloud] = useState(false);
  const handleImageUpload = async (file: File) => {
    const salt = Date.now();
    const extension = path.extname(file.name);
    const saltedName = "image" + salt.toString() + extension;
    setImageUpload(true);
    if (!file) return;

    await PostImageDetails({ src: saltedName });

    try {
      let data = new FormData();
      data.append("file", file, saltedName);

      const res = await fetch("/api/s3-upload", {
        method: "POST",
        body: data,
      })
        .then((e) => {
          console.log(e);
          setImageUpload(false);
          setImageUrl((prev) => [
            ...prev,
            `https://mctechfiji.s3.amazonaws.com/wedding/${
              "image" + salt.toString() + extension
            }`,
          ]);
          setIsImageInCloud(true);
          toast.success("Image Uploaded to Cloud");
        })
        .catch((e) => {
          toast("Something went wrong", { description: "Contact site admin" });
        });
      // handle the error
    } catch (e: any) {
      // Handle errors here
      console.error(e);
    }
  };
  const testimg = [
    "https://mctechfiji.s3.us-east-1.amazonaws.com/wedding/image1732313381621.png",
    "https://mctechfiji.s3.us-east-1.amazonaws.com/wedding/image1732313381621.png",
  ];
  return (
    <div className="flex flex-col items-center mt-12 w-3/5 mx-auto justify-center">
      <div className="flex flex-col gap-4">
        {imageUrl.map((src) => (
          <div className="w-full">
            <img
              className="aspect-square w-full object-contain rounded-md"
              src={src}
              alt="img"
            />
          </div>
        ))}
      </div>
      <div className="w-full mt-6">
        <label
          htmlFor="file"
          className={cn(
            "cursor-pointer",
            imageUpload && "opacity-50 cursor-not-allowed"
          )}
        >
          <div className="justify-center items-center rounded-md p-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 flex gap-3">
            {!imageUpload && <Upload />}
            {imageUpload && <Loader2 className="animate-spin" />}
            <h2 className="text-sm">Upload Image</h2>
          </div>
          <input
            id="file"
            type="file"
            name="file"
            disabled={imageUpload}
            hidden
            onChange={(e) => {
              handleImageUpload(e.target.files?.[0] as File);
            }}
          />
        </label>
      </div>
    </div>
  );
}
