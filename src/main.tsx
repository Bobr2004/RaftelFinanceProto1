import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import "./styles.scss"

createRoot(document.getElementById("root")!).render(<App />);
