// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from "@material-tailwind/react";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ThemeProvider>
  )
}
