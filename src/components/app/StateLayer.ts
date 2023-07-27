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
        @unocss-placeholder;
    `;

    render() {
        return html`
            <div
                state="hover active focus"
                class="w-full h-full opacity-0 bg-md-primary"
            ></div>
        `;
    }
}
