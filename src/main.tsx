import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { loadBrandFonts } from "./fonts";
import "./tokens.css";
import "./styles.css";

void loadBrandFonts();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
