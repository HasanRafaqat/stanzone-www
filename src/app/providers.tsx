"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  //theme set to light 
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">  
      {children}
    </ThemeProvider>
  );
}
