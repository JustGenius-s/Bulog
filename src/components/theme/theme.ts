import {
    Theme,
    Scheme,
    argbFromHex,
    hexFromArgb,
    applyTheme,
    CorePalette,
    customColor,
    TonalPalette,
    ColorGroup,
} from '@material/material-color-utilities';

export interface CustomColorOfHex {
    value: string,
    name: string,
    blend: boolean,
}

export function customThemeFromColor(options?: {
    primary?: string,
    secondary?: string,
    tertiary?: string,
}, customColors: CustomColorOfHex[] = []): Theme {
    const primary = argbFromHex(options?.primary ?? '#6750a4');
    const secondary = argbFromHex(options?.secondary ?? '#958da5');
    const tertiary = argbFromHex(options?.tertiary ?? 'b58392');

    const corePalette = CorePalette.contentOf(primary);
    corePalette.a2 = TonalPalette.fromInt(secondary);
    corePalette.a3 = TonalPalette.fromInt(tertiary);

    return {
        source: primary,
        schemes: {
            light: Scheme.lightFromCorePalette(corePalette),
            dark: Scheme.darkFromCorePalette(corePalette),
        },
        palettes: {
            primary: corePalette.a1,
            secondary: corePalette.a2,
            tertiary: corePalette.a3,
            neutral: corePalette.n1,
            neutralVariant: corePalette.n2,
            error: corePalette.error,
        },
        customColors: customColors.map((color) => customColor(primary, {
            value: argbFromHex(color.value),
            name: color.name,
            blend: color.blend,
        })),
    }
}

export function applyCustomTheme(theme: Theme, options?: {
    dark?: boolean;
    target?: HTMLElement;
    brightnessSuffix?: boolean;
    paletteTones?: number[];
}) {
    applyTheme(theme, options);

    const target = options?.target ?? document.body;
    const isDark = options?.dark ?? false;
    const colors = theme.customColors;

    for (const c of colors) {
        const name = c.color.name;
        const colorGroup = isDark ? c.dark : c.light;
        setCustomSchemeProperties(target, colorGroup, name);
        if (options?.brightnessSuffix) {
            setCustomSchemeProperties(target, c.dark, name, '-dark' );
            setCustomSchemeProperties(target, c.light, name, '-light');
        }
    }

    function setCustomSchemeProperties(target: HTMLElement, color: ColorGroup, name: string, suffix: string = '') {
        for(const [key, value] of Object.entries(toJSON(color))) {
            const token = key.replace(/([a-z])([A-Z])/g,'$1-$2').toLocaleLowerCase();
            const color = hexFromArgb(value);
            target.style.setProperty(`--md-sys-${name}-${token}${suffix}`,color);
        }
    }

    function toJSON(color: ColorGroup) {
        return {
            ...color
        }
    }
}