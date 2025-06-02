"use client"

import { store } from "@/lib/redux/store";
import React from "react";
import { Provider } from "react-redux";

type ReduxProviderProps = {
  children: React.ReactNode;
}

export const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

