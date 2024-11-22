import { Camera } from "lucide-react";
import React from "react";

export default function NavBar() {
  return (
    <nav className="w-screen flex items-center">
      <div className="px-6 py-3 flex justify-between w-3/5 mx-auto mt-5 rounded-xl h-full bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100">
        <div className="flex gap-2 items-center">
          <Camera />
          Wedding Uploads
        </div>
        <div className="flex gap-2 items-center">
          <p>Gallery</p>
          <p>Admin</p>
        </div>
      </div>
    </nav>
  );
}