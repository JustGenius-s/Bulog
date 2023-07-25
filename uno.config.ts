import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  rules: [
    [
      /^md-bg-(\d+)$/,
      ([, d]) => ({ backgroundColor: `var(--md-sys-color-${d})` }),
    ],
    [/^md-text-(\d+)$/, ([, d]) => ({ color: `var(--md-sys-color-${d})` })],
    [
      /^state-(\d+)$/,
      ([, d], {}) => {
        return `.state-${d}:${d} {
            opacity: var(--md-sys-state-${d}-state-layer-opacity);
        }`;
      },
    ],
  ],
  variants: [
    // hover
    (matcher) => {
      if (!matcher.startsWith("hover:")) return matcher;
      return {
        matcher: matcher.slice(6),
        selector: (s) => `${s}:hover`,
      };
    },
    // focus
    (matcher) => {
      if (!matcher.startsWith("focus:")) return matcher;
      return {
        matcher: matcher.slice(6),
        selector: (s) => `${s}:focus`,
      };
    },
    // active
    (matcher) => {
      if (!matcher.startsWith("active:")) return matcher;
      return {
        matcher: matcher.slice(6),
        selector: (s) => `${s}:active`,
      };
    },
  ],
  presets: [presetIcons(), presetUno(), presetAttributify()],
});
