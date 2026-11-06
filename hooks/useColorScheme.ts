import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * Returns the active color scheme narrowed to the themes this app supports.
 *
 * React Native's `ColorSchemeName` also includes `'unspecified'` (and may be `null`),
 * which can't be used to index the `light`/`dark` theme maps, so it falls back to `'light'`.
 */
export function useColorScheme(): 'light' | 'dark' {
  return useRNColorScheme() === 'dark' ? 'dark' : 'light';
}
