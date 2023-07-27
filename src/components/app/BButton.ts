import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export enum BButtonVariant {
    ELEVATED = "elevated",
    OUTLINED = "outlined",
    TEXT = "text",
}

export class BButton extends LitElement {
    static styles = css`
        :host(:is(b-button)) {
            height: 2.5rem;
            width: fit-content;
            cursor: pointer;
        }
        @unocss-placeholder;
        button.outlined {
            border: 1px solid #000;
        }
        button.disabled {
            cursor: not-allowed;
            pointer-events: none;
            box-shadow: var(--md-sys-elevation-level0);
        }
        i.icon {
            width: 1rem;
        }
    `;

    @property({ type: String, reflect: true })
    variant = BButtonVariant.ELEVATED;

    @property({ type: Boolean, reflect: true })
    icon = false;

    @property({ type: Boolean, reflect: true })
    disabled = false;

    render() {
        const buttonClasses = {
            "b-button--elevated": this.variant === BButtonVariant.ELEVATED,
            "hover:b-button--elevated-hover":
                this.variant === BButtonVariant.ELEVATED,
            "active:b-button--elevated-active":
                this.variant === BButtonVariant.ELEVATED,
            "b-button--outlined": this.variant === BButtonVariant.OUTLINED,
        };
        const iconClasses = {
            icon: this.icon,
        };

        return html`
            <button
                ?disabled="${this.disabled}"
                class="b-button-shadow-button ${classMap(buttonClasses)}"
            >
                <b-state-layer></b-state-layer>
                <i class="b-button-shadow-icon ${classMap(iconClasses)}">
                    <slot name="icon"></slot>
                </i>
                <label class="b-button-shadow-label">
                    <slot></slot>
                </label>
                <div class="b-button-shadow-container"></div>
            </button>
        `;
    }
}
