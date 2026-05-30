/** @type {import('tailwindcss').Config} */
// NOTE: Tailwind CSS is pinned to v3 (tailwindcss: ^3.4.0) because NativeWind v4
// does not yet support Tailwind CSS v4.
module.exports = {
    content: ["./{app,components,hooks}/**/*.{ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {},
    },
    plugins: [],
  }