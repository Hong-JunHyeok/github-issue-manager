import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@primer/react";
import { RouterProvider } from "@tanstack/react-router";
import setupLocatorUI from "@locator/runtime";
import router from "./Router";

import "./index.css";

if (import.meta.env.NODE_ENV === "development") {
  setupLocatorUI();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
