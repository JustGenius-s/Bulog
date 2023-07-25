import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export class BStateLayer extends LitElement {
  static styles = css`
    :host(:is(b-state-layer)) {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
    }
    @unocss-placeholder;
  `;

  @property({ type: String, reflect: true })
  contentColor = "primary";

  render() {
    const colorClass = `md-bg-primary`;
    return html`
      <div
        state="hover active focus"
        class="w-full h-full opacity-0  md-bg-primary ${colorClass}"
      ></div>
    `;
  }
}
