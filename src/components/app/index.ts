/** @format */

import { BStateLayer } from "./StateLayer";
import { BButton } from "./BButton";
import { customThemeFromColor, applyCustomTheme } from "../theme/theme";
import "../css/baseline.css";
import "../../style.css";

declare global {
  interface HTMLElementTagNameMap {
    "b-state-layer": BStateLayer;
    "b-button": BButton;
  }
}

function register() {
  if (customElements.get("b-state-layer")) return;
  customElements.define("b-state-layer", BStateLayer);
  customElements.define("b-button", BButton);
}

export {
  BStateLayer as StateLayer,
  register,
  customThemeFromColor,
  applyCustomTheme,
};
