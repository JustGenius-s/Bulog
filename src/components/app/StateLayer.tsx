import { render, VNode } from 'vue';
import Style from '../../style.css?url';

export class StateLayer extends HTMLElement {
    contentColor: String | null;
    template: VNode;

    constructor() {
        super();
        // init member variable
        this.contentColor = this.getAttribute('content-color');
        // styles variable
        let contentColor = this.setContentColor();
        // template
        this.template = (
            <div
                class={`w-full h-full opacity-0 hover:hover-state-layer focus:focus-state-layer active:pressed-state-layer ${contentColor}`}>
                <link rel='stylesheet' href={Style}></link>
            </div>
        ) as VNode;
        // shadow
        let shadow = this.attachShadow({ mode: 'open' });
        render(this.template, shadow);
    }

    setContentColor() {
        let color = this.contentColor ?? 'bg-primary';
        return color;
    }
}
