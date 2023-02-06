import { render, VNode } from 'vue';
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
    variant: Variant | null;
    icon: Boolean;
    disabled: Boolean;
    button: HTMLButtonElement | null;
    varStyle: BButtonVarStyle;

    static get observedAttributes() {
        return ['variant', 'disabled', 'icon'];
    }

    constructor() {
        super();
        this.variant = null;
        this.icon = false;
        this.disabled = false;
        this.button = null;
        this.varStyle = {
            button: new ComplexClass(
                ['h-10 w-fit flex flex-row rounded-full relative overflow-hidden transition duration-150'],
                []
            ),
            icon: new ComplexClass(['ml-4 text-center font-medium leading-10'], []),
            content: new ComplexClass(['capitalize ml-2 mr-6 font-medium leading-10'], []),
            container: new ComplexClass(['absolute w-full h-full top-0 left-0 z-n-1'], []),
        };

        let contentColor = this.__setContentColor();
        let template = (
            <button>
                <link rel="stylesheet" href={Style}></link>
                <state-layer content-color={contentColor}></state-layer>
                <i>
                    <slot name="icon"></slot>
                </i>
                <label>
                    <slot></slot>
                </label>
                <div></div>
            </button>
        ) as VNode;
        // render
        this.attachShadow({ mode: 'open' });
        render(template, this.shadowRoot!!);
    }

    connectedCallback() {
        // Can use child dom and attr in this lifecycle.

        let shadow = this.shadowRoot!!;
        // init member variable.
        this.variant = this.getAttribute('variant') as Variant;
        this.icon = Boolean(this.getAttribute('icon'));
        this.disabled = Boolean(this.getAttribute('disabled'));
        this.button = shadow.querySelector('button');
        // Get the symbol link of child.
        let button = shadow.querySelector('button');
        let icon = shadow.querySelector('i');
        let content = shadow.querySelector('label');
        let container = shadow.querySelector('div');
        // Compute style
        this.varStyle.button.ext = [this.__setState(), this.__setElevation(), this.__setOutline()];
        this.varStyle.icon.ext = [this.__setIconSize()];
        this.varStyle.content.ext = [this.__setContent()];
        this.varStyle.container.ext = [this.__setContainer()];
        // Set style
        button!!.className = this.varStyle['button'].value;
        icon!!.className = this.varStyle['icon'].value;
        content!!.className = this.varStyle['content'].value;
        container!!.className = this.varStyle['container'].value;
        // Render
    }

    attributeChangedCallback(name: string, oldV: string, newV: string) {
        // Can get attribute but no child Dom here.
        // Will be called before connected.

        // Update style when attr changed.
        let shadow = this.shadowRoot!!;
        let button = shadow.querySelector('button');
        let icon = shadow.querySelector('i');
        let content = shadow.querySelector('label');
        let container = shadow.querySelector('div');
        console.log(name, `${oldV} -> ${newV}`);
        switch (name) {
            case 'variant':
            case 'icon':
                this.icon = Boolean(this.getAttribute('icon'));
                this.varStyle.icon.ext = [this.__setIconSize()];
                icon!!.className = this.varStyle['icon'].value;
        }
    }

    __setContentColor() {
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

    __setIconSize() {
        switch (this.icon) {
            case false:
                return 'w-0';
            case true:
                return 'w-4';
            default:
                return 'w-0';
        }
    }

    __setState() {
        if (this.disabled) return 'cursor-not-allowed pointer-events-none';
        return '';
    }

    __setElevation() {
        if (this.disabled) return 'elevation-0';
        switch (this.variant) {
            case 'elevated':
                return 'elevation-1 hover:elevation-2 active:elevation-1';
            default:
                return 'elevation-0';
        }
    }

    __setOutline() {
        switch (this.variant) {
            case 'outlined':
                return 'border-outline border';
            default:
                return '';
        }
    }

    __setContent() {
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

    __setContainer() {
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
