"use client";

import { cn } from "@/lib/utils";
import { Loader2, Upload } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import * as path from "path";
import { PostImageDetails } from "./actions/image";
import UploadImage from "./components/UploadImage";
import Image from "next/image";

export default function page() {
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40"
      style={{ backgroundImage: "url('bg.jpg')" }}
    >
      <div className="pt-24">
        <h1 className="text-3xl font-bold text-center w-4/5 mx-auto">
          Engagement of Shaniel & Pritika
        </h1>
        <UploadImage />
      </div>
    </div>
  );
}
