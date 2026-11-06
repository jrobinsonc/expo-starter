// Allows side-effect imports of stylesheets (e.g. `import '../global.css'`), which
// NativeWind processes through Metro. Required since TypeScript 6 enables
// `noUncheckedSideEffectImports` by default.
declare module '*.css';

