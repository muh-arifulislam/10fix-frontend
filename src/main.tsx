import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/styles.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <Toaster />
  </React.StrictMode>
);
