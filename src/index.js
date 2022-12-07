import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import AppSocialNetwork from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<AppSocialNetwork />);
