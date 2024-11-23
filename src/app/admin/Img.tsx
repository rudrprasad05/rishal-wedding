"use client";

import { Button } from "@/components/ui/button";
import { Download, Trash } from "lucide-react";
import React from "react";
import { ImagesType } from "../types";
import { DeleteOneImage } from "../actions/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { saveAs } from "file-saver";

export default function Img({ img }: { img: ImagesType }) {
  const router = useRouter();
  async function downloadImage() {
    const res = await fetch("/api/s3-upload?fileName=" + img.src, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Failed to download the file");
    }

    const blob = await res.blob(); // Convert the res to a Blob
    const contentType =
      res.headers.get("Content-Type") || "application/octet-stream";

    // Use file-saver's saveAs to trigger the download
    const fileExtension = contentType.split("/")[1]; // Derive file extension from content type
    saveAs(blob, `${img.src}.${fileExtension}`);
  }
  const handleDelete = async () => {
    const res = await DeleteOneImage(img.id)
      .then((res) => {
        if (res) {
          toast.success("Image deleted");
          router.refresh();
        }
      })
      .catch(() => toast.error("Error deleting"));
  };
  return (
    <div className="relative w-full aspect-square rounded-md overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={"https://mctechfiji.s3.us-east-1.amazonaws.com/wedding/" + img.src}
      />
      <div className="absolute top-0 right-0 flex items-center gap-2">
        <Button onClick={() => downloadImage()} variant="secondary">
          <Download />
        </Button>
        <Button onClick={() => handleDelete()} variant="destructive">
          <Trash />
        </Button>
      </div>
    </div>
  );
}
