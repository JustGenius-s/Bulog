import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export class StateLayer extends LitElement {
  static styles = css`
    :host(:is(state-layer)) {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
    }
    .state-layer {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    .state-layer:hover {
      opacity: var(--md-sys-state-hover-state-layer-opacity);
    }
    .state-layer:active {
      opacity: var(--md-sys-state-pressed-state-layer-opacity);
    }
    .state-layer:focus {
      opacity: var(--md-sys-state-focus-state-layer-opacity);
    }
  `;

  @property({ type: String, reflect: true })
  contentColor = "#fff";

  render() {
    const colorStyle = html`<style>
      .state-layer {
        background-color: ${this.contentColor};
      }
    </style>`;
    return html`
      ${colorStyle}
      <div class="state-layer"></div>
    `;
  }
}
