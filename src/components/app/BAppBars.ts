import { css, html, LitElement } from "lit";

export class BAppBars extends LitElement {
    static styles = [
        css`
            :host(:is(b-app-bars)) {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                position: relative;
                overflow: hidden;
            }
        `,
    ];

    render() {
        return html`<slot></slot>`;
    }
}