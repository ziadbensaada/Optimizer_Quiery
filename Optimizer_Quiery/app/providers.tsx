"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { NavbarWrapper } from "@/components/navbar/navbar";

import { Toaster } from "react-hot-toast";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider 
        {...themeProps}
      >
        <NavbarWrapper> {children}</NavbarWrapper>

        <Toaster position="top-center" />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
