import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  rules: [
    // md3 background color
    [
      /^bg-md-(.+)$/,
      ([, w]) => ({ "background-color": `var(--md-sys-color-${w})` }),
    ],
    // md3 text color
    [/^text-md-(.+)$/, ([, w]) => ({ color: `var(--md-sys-color-${w})` })],
    // md3 label size
    [/^label-md-(\w+)$/, ([, w]) => ({ 
      "font-size": `var(--md-sys-typescale-label-${w}-size)`,
      "font-weight": `var(--md-sys-typescale-label-${w}-weight)`,
      "letter-space": `var(--md-sys-typescale-label-${w}-font-tracking)`,
    })],
    // md3 elevation
    [
      /^elevation-(\d+)$/,
      ([, d]) => ({ "box-shadow": `var(--md-sys-elevation-level${d})` }),
    ],
    // md3 states
    [
      /^state-(\w+)$/,
      ([, d], {}) =>
        `.state-${d}:${d} {
            opacity: var(--md-sys-state-${d}-state-layer-opacity);
        }`,
    ],
  ],
  shortcuts: {
    "b-button-shadow-button":
      "flex flex-row relative border-none rounded-full transition duration-150 ease overflow-hidden",
    "b-button--elevated": "bg-md-surface text-md-primary elevation-1",
    "b-button--elevated-hover": "elevation-2",
    "b-button--elevated-active": "elevation-1",
    "b-button--outlined": "border border-solid border-#000",
    "b-button-shadow-icon": "m-l-4 text-center line-height-10 overflow-hidden",
    "b-button-shadow-label": "min-w-8 m-l-2 m-r-5 label-md-large line-height-10 case-capital",
    "b-button-shadow-container": "bg-md-surface-container-low absolute w-full h-full top-0 left-0 -z-1",
  },
  presets: [presetIcons(), presetUno(), presetAttributify()],
});
