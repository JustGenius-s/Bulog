/** @format */

import {StateLayer} from './StateLayer';
import {BButton} from './BButton';
import {customThemeFromColor, CustomColorOfHex, applyCustomTheme} from '../theme/theme';
import '../css/baseline.css';
import '../../style.css';

declare global {
    interface HTMLElementTagNameMap {
        'state-layer': StateLayer;
        'b-button': BButton;
    }
}

function register() {
    customElements.define('state-layer', StateLayer);
    customElements.define('b-button', BButton);
}

export {
    StateLayer,
    register,
    customThemeFromColor,
    applyCustomTheme,
};
