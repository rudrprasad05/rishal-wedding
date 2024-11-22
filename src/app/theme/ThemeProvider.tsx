"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
  ) : null;
}
