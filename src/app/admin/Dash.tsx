"use client";

import React, { useState } from "react";
import { GetAllImageDetails } from "../actions/image";
import Board from "./Board";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function Dash({ images }: { images: any[] }) {
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const el = params.get("a");
  const [isLoggedIn, setIsLoggedIn] = useState(el == "true");

  const handleClick = () => {
    if (username == "admin" && password == "0056632938") {
      setIsLoggedIn(true);
      router.push("?a=true");
    } else {
      setIsLoggedIn(false);
      router.push("/admin");
    }
  };

  return isLoggedIn ? (
    <div className="pt-24">
      <Board images={images} />
    </div>
  ) : (
    <div className="pt-24">
      <div className="w-3/5 mx-auto flex flex-col gap-2">
        <Label htmlFor="name">Username</Label>
        <Input
          onChange={(e) => setUsename(e.target.value)}
          value={username}
          name="name"
          id="name"
          type="text"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          id="password"
          type="password"
        />
        <Button onClick={() => handleClick()} variant="secondary">
          Login
        </Button>
      </div>
    </div>
  );
}
