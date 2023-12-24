import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
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
  presets: [presetIcons(), presetUno(), presetAttributify()],
  transformers: [ transformerDirectives() ],
});
