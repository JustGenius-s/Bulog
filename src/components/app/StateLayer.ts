import { LitElement, css, html } from "lit";

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

        .state-layer {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0;
            position: absolute;
            background-color: var(--md-sys-color-primary);
        }

        .state-layer:hover {
            opacity: var(--md-sys-state-hover-state-layer-opacity);
        }

        .state-layer:focus {
            opacity: var(--md-sys-state-focus-state-layer-opacity);
        }

        .state-layer:active {
            opacity: var(--md-sys-state-active-state-layer-opacity);
        }
    `;

    render() {
        return html` <div class="state-layer"></div> `;
    }
}
