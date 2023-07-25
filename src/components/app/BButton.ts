import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export class BButton extends LitElement {
  static styles = css`
    :host(:is(b-button)) {
      width: fit-content;
      cursor: pointer;
    }
    @unocss-placeholder;
    button {
      height: 2.5rem;
      width: fit-content;
      display: flex;
      flex-direction: row;
      border-radius: 999px;
      border: none;
      position: relative;
      overflow: hidden;
      transition-property: background-color, border-color, color, opacity,
        box-shadow, transform;
      transition-duration: 150ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    button.elevated {
      color: var(--md-sys-color-on-primary);
      background-color: var(--md-sys-color-primary);
      box-shadow: var(--md-sys-elevation-level1);
    }
    button.elevated:hover {
      box-shadow: var(--md-sys-elevation-level2);
    }
    button.elevated:active {
      box-shadow: var(--md-sys-elevation-level1);
    }
    button.outlined {
      border: 1px solid #000;
    }
    button.disabled {
      cursor: not-allowed;
      pointer-events: none;
      box-shadow: var(--md-sys-elevation-level0);
    }
    i {
      margin-left: 1rem;
      text-align: center;
      line-height: 2.5rem;
      overflow: hidden;
    }
    i.icon {
      width: 1rem;
    }
    label {
      text-transform: capitalize;
      margin-left: 0.5rem;
      margin-right: 1.25rem;
      line-height: 2.5rem;
    }
    div.container-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
  `;

  @property({ type: String, reflect: true })
  variant = "elevated";

  @property({ type: Boolean, reflect: true })
  icon = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  render() {
    const buttonClasses = {
      elevated: this.variant === "elevated",
      outlined: this.variant === "outlined",
    };
    const iconClasses = {
      icon: this.icon,
    };

    return html`
      <button class="${classMap(buttonClasses)}">
        <b-state-layer></b-state-layer>
        <i class="${classMap(iconClasses)}">
          <slot name="icon"></slot>
        </i>
        <label>
          <slot></slot>
        </label>
        <div class="container-layer"></div>
      </button>
    `;
  }
}
