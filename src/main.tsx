import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./translation/translationConf.ts";
import "./styles/index.css";
import "./styles/styles.scss";
import "./styles/colorPalette.scss";
import "./styles/textSizes.scss";

createRoot(document.getElementById("root")!).render(<App />);
