/** @format */

import { StateLayer } from "./StateLayer";
import { customThemeFromColor, applyCustomTheme } from "../theme/theme";
import "../css/baseline.css";
import "../../style.css";

declare global {
  interface HTMLElementTagNameMap {
    "state-layer": StateLayer;
  }
}

function register() {
  customElements.define("state-layer", StateLayer);
}

export { StateLayer, register, customThemeFromColor, applyCustomTheme };
