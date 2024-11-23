import { Camera } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="w-screen flex items-center fixed top-4 z-10">
      <div className="px-6 py-3 flex justify-between lg:w-3/5 w-4/5 mx-auto rounded-xl h-full bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100">
        <div className="flex gap-2 items-center">
          <Camera />
          <span className="lg:block hidden">Wedding Uploads</span>
        </div>
        <div className="flex gap-2 items-center">
          <Link href={"/"}>Upload</Link>
          <Link href={"/gallery"}>Gallery</Link>
          <Link href={"/admin"}>Admin</Link>
        </div>
      </div>
    </nav>
  );
}
