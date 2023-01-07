/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '3.5xl': '1.75rem',
      },
      boxShadow: {
        '0.5': '0px 0.5px 1.5px 0px #9e9e9f',
      },
      lineHeight: {
        '16': '3.5rem',
        '24': '6rem',
      },
      backgroundColor: {
        'primary': 'var(--md-sys-color-primary)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',
        'secondary': 'var(--md-sys-color-secondary)',
        'on-secondary': 'var(--md-sys-color-on-secondary)',
        'secondary-container': 'var(--md-sys-color-secondary-container)',
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
        'tertiary': 'var(--md-sys-color-tertiary)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary))',
        'tertiary-container': 'var(--md-sys-color-tertiary)-container)',
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary)-container)',
        'error': 'var(--md-sys-color-error)',
        'on-error': 'var(--md-sys-color-on-error)',
        'error-container': 'var(--md-sys-color-error-container)',
        'on-error-container': 'var(--md-sys-color-on-error-container)',
        'background': 'var(--md-sys-color-background)',
        'on-background': 'var(--md-sys-color-on-background)',
        'surface': 'var(--md-sys-color-surface)',
        'on-surface': 'var(--md-sys-color-on-surface)',
        'surface-variant': 'var(--md-sys-color-surface-variant)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        'outline': 'var(--md-sys-color-outline)',
        'outline-variant': 'var(--md-sys-color-outline-variant)',
        'shadow': 'var(--md-sys-color-shadow)',
        'scrim': 'var(--md-sys-color-scrim)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary)',
      }
    },
  },
  plugins: [],
}
