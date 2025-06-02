"use client"

import { query as client } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type ReactQueryProviderProps = {
  children: React.ReactNode
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}