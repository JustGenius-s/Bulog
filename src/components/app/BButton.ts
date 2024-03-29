import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export enum BButtonVariant {
    ELEVATED = "elevated",
    OUTLINED = "outlined",
    FILLED = "filled",
    TONAL = "tonal",
    TEXT = "text",
}

export class BButton extends LitElement {
    static styles = [
        css`
            :host(:is(b-button)) {
                width: fit-content;
                cursor: pointer;
            }
        `,
        css`
            button.shadow-button {
                height: 2.5rem;
                border: none;
                display: flex;
                padding: 0;
                overflow: hidden;
                position: relative;
                transition: all 150ms ease;
                flex-direction: row;
                border-radius: 1.25rem;
                align-items: center;
            }

            /* elevated button */
            button.elevated {
                color: var(--md-sys-color-primary);
                box-shadow: var(--md-sys-elevation-level1);
                background-color: var(--md-sys-color-surface);
            }
            button.elevated:hover {
                box-shadow: var(--md-sys-elevation-level2);
            }
            button.elevated:active {
                box-shadow: var(--md-sys-elevation-level1);
            }

            /* outlined button */
            button.outlined {
                border: 1px solid #000;
            }

            /* filled button */
            button.filled {
                color: var(--md-sys-color-on-primary);
                background-color: var(--md-sys-color-primary);
            }
            button.filled:hover {
                box-shadow: var(--md-sys-elevation-level1);
            }
            button.filled:active {
                box-shadow: var(--md-sys-elevation-level0);
            }

            /* tonal button */
            button.tonal {
                color: var(--md-sys-color-on-secondary-container);
                background-color: var(--md-sys-color-secondary-container);
            }
            button.tonal:hover {
                box-shadow: var(--md-sys-elevation-level1);
            }
            button.tonal:active {
                box-shadow: var(--md-sys-elevation-level0);
            }

            /* button disabled */
            button.disabled {
                cursor: not-allowed;
                pointer-events: none;
                box-shadow: var(--md-sys-elevation-level0);
            }

            /* icon */
            div.icon {
                display: flex;
                overflow: hidden;
                max-width: 1.125rem;
                min-width: 1.125rem;
                text-align: center;
                min-height: 100%;
                margin-left: 1rem;
                align-items: center;
                justify-content: center;
            }
            div.no-icon {
                display: none;
            }
            ::slotted([slot="icon"]) {
                font-size: 1.125rem !important;
            }

            /* label */
            label {
                display: flex;
                min-width: 2rem;
                min-height: 100%;
                align-items: center;
                margin-left: 0.5rem;
                margin-right: 1.5rem;
                font-size: var(--md-sys-typescale-label-large-size);
                font-weight: var(--md-sys-typescale-label-large-weight);
                letter-spacing: var(
                    --md-sys-typescale-label-large-font-tracking
                );
                text-transform: capitalize;
            }
            label.no-icon {
                margin-left: 1.25rem;
            }

            /* container layer */
            .container {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                position: absolute;
                background-color: var(--md-sys-color-surface-container-low);
            }
        `,
    ];

    @property({ type: String, reflect: true })
    variant = BButtonVariant.ELEVATED;

    @property({ type: Boolean, reflect: true })
    icon = false;

    @property({ type: Boolean, reflect: true })
    disabled = false;

    render() {
        const buttonClasses = {
            elevated: this.variant === BButtonVariant.ELEVATED,
            outlined: this.variant === BButtonVariant.OUTLINED,
            filled: this.variant === BButtonVariant.FILLED,
            tonal: this.variant === BButtonVariant.TONAL,
        };

        const iconClasses = {
            icon: this.icon,
            "no-icon": !this.icon,
        };

        const labelClasses = {
            "no-icon": !this.icon,
        };

        return html`
            <button
                ?disabled="${this.disabled}"
                class="shadow-button ${classMap(buttonClasses)}">
                <b-state-layer></b-state-layer>
                <div class=" ${classMap(iconClasses)} ">
                    <slot name="icon"></slot>
                </div>
                <label class="${classMap(labelClasses)}">
                    <slot></slot>
                </label>
                <div class="container"></div>
            </button>
        `;
    }
}
