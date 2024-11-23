import { Loader2 } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <Loader2 className="animate-spin" />
      </div>
    </div>
  );
}
