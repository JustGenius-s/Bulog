/** @format */

import {render, VNode} from 'vue';
import Style from '../../style.css?url';

type Variant = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';

class ComplexClass {
    base: string[];
    ext: string[];

    constructor(base: string[], ext: string[]) {
        this.base = base;
        this.ext = ext;
    }

    get value() {
        return [...this.base, ...this.ext].join(' ');
    }
}

interface BButtonVarStyle {
    ['button']: ComplexClass;
    ['icon']: ComplexClass;
    ['content']: ComplexClass;
    ['container']: ComplexClass;
}

export class BButton extends HTMLElement {
    varStyle: BButtonVarStyle;

    static get observedAttributes() {
        return ['variant', 'disabled', 'icon'];
    }

    get variant() {
        return this.getAttribute('variant') as Variant;
    }

    set variant(value: string) {
        this.setAttribute('variant', value);
    }

    get icon() {
        return Boolean(this.getAttribute('icon'));
    }

    set icon(value: boolean) {
        this.setAttribute('icon', String(value));
    }

    get disabled() {
        return Boolean(this.getAttribute('disabled'));
    }

    set disabled(value: boolean) {
        this.setAttribute('icon', String(value));
    }

    get button() {
        return this.shadowRoot?.querySelector('button');
    }

    constructor() {
        super();
        this.varStyle = {
            button: new ComplexClass(
                ['h-10 w-fit flex flex-row rounded-full relative overflow-hidden transition duration-150'],
                [],
            ),
            icon: new ComplexClass(['ml-4 text-center font-medium leading-10 overflow-hidden'], []),
            content: new ComplexClass(['capitalize ml-2 mr-6 font-medium leading-10'], []),
            container: new ComplexClass(['absolute w-full h-full top-0 left-0 z-n-1'], []),
        };

        let contentColor = this.contentColor;
        let template = (
            <button>
                <link
                    rel='stylesheet'
                    href={Style}></link>
                <state-layer content-color={contentColor}></state-layer>
                <i>
                    <slot name='icon'></slot>
                </i>
                <label>
                    <slot></slot>
                </label>
                <div></div>
            </button>
        ) as VNode;
        // render
        this.attachShadow({mode: 'open'});
        render(template, this.shadowRoot!!);
    }

    connectedCallback() {
        // Can use child dom and attr in this lifecycle.

        this.updateStyle();
    }

    attributeChangedCallback(name: string, oldV: string, newV: string) {
        // Can get attribute but no child Dom here.
        // Will be called before connected.

        // Update style when attr changed.
        this.updateStyle();
    }

    updateStyle() {
        let shadow = this.shadowRoot!!;
        // Get the symbol link of child.
        let button = shadow.querySelector('button');
        let icon = shadow.querySelector('i');
        let content = shadow.querySelector('label');
        let container = shadow.querySelector('div');
        // Compute style
        this.varStyle.button.ext = [this.state, this.elevation, this.outline];
        this.varStyle.icon.ext = [this.iconSize];
        this.varStyle.content.ext = [this.content];
        this.varStyle.container.ext = [this.container];
        // Set style
        button!!.className = this.varStyle['button'].value;
        icon!!.className = this.varStyle['icon'].value;
        content!!.className = this.varStyle['content'].value;
        container!!.className = this.varStyle['container'].value;
    }

    get contentColor() {
        switch (this.variant) {
            case 'elevated':
                return 'bg-primary';
            case 'filled':
                return 'bg-on-primary';
            case 'tonal':
                return 'bg-on-secondary-container';
            case 'outlined':
                return 'bg-primary';
            case 'text':
                return 'bg-primary';
            default:
                return 'bg-primary';
        }
    }

    get iconSize() {
        switch (this.icon) {
            case false:
                return 'w-0';
            case true:
                return 'w-4';
            default:
                return 'w-0';
        }
    }

    get state() {
        if (this.disabled) return 'cursor-not-allowed pointer-events-none';
        return '';
    }

    get elevation() {
        if (this.disabled) return 'elevation-0';
        switch (this.variant) {
            case 'elevated':
                return 'elevation-1 hover:elevation-2 active:elevation-1';
            default:
                return 'elevation-0';
        }
    }

    get outline() {
        switch (this.variant) {
            case 'outlined':
                return 'border-outline border';
            default:
                return '';
        }
    }

    get content() {
        if (this.disabled) return 'text-on-surface disabled-state-content';
        switch (this.variant) {
            case 'elevated':
                return 'text-primary';
            case 'filled':
                return 'text-on-primary';
            case 'tonal':
                return 'text-on-secondary-container';
            case 'outlined':
                return 'text-primary';
            case 'text':
                return 'text-primary';
            default:
                return 'text-primary';
        }
    }

    get container() {
        if (this.disabled) return 'bg-on-surface disabled-state-container';
        switch (this.variant) {
            case 'elevated':
                return 'bg-surface';
            case 'filled':
                return 'bg-primary';
            case 'tonal':
                return 'bg-secondary-container';
            case 'outlined':
                return 'bg-surface';
            case 'text':
                return 'bg-transparent';
            default:
                return 'bg-surface';
        }
    }
}
