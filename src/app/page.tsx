"use client";

import { cn } from "@/lib/utils";
import { Loader2, Upload } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import * as path from "path";
import { PostImageDetails } from "./actions/image";
import UploadImage from "./components/UploadImage";

export default function page() {
  return (
    <>
      <UploadImage />
    </>
  );
}
