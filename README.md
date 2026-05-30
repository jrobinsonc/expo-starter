# Expo Starter

A **React Native starter kit** built with [Expo](https://expo.dev) and featuring **NativeWind integration** for seamless TailwindCSS styling in React Native. Designed for rapidly building cross-platform mobile apps with predefined tools and modern development practices.

## Key Features

- **React Native** with Expo Router for file-based navigation
- **NativeWind** integration for using TailwindCSS utility classes in React Native
- **PNPM** for fast, efficient package management
- **Cross-platform** support (iOS, Android, Web)
- **TypeScript** for type safety
- **Modern UI** with utility-first CSS styling

## Get started

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Start the app

   ```bash
   pnpm start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

### Developing with AI

You can configure this project to work with AI coding assistants. Learn more about:
- [Using Model Context Protocol (MCP) with Expo](https://docs.expo.dev/eas/ai/mcp/) to allow AI models to interact with your development environment.
- Installing [Expo Skills for AI agents](https://docs.expo.dev/skills/) to equip your AI agents with Expo-specific capabilities.

## Styling with NativeWind & TailwindCSS

This project demonstrates how to use **NativeWind** to bring TailwindCSS to React Native development:

- **Utility-first styling**: Use familiar Tailwind classes like `bg-blue-500`, `text-center`, `flex-1`
- **Responsive design**: Built-in support for responsive breakpoints
- **Dark mode**: Easy theme switching with Tailwind's dark mode utilities
- **Custom configuration**: Tailwind config is set up in `tailwind.config.js`

### Example Usage

```tsx
import { View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 dark:bg-gray-900">
      <Text className="text-2xl font-bold text-gray-800 dark:text-white">
        Hello NativeWind!
      </Text>
    </View>
  );
}
```

## Compatibility & Dependency Pinning

This project pins specific versions of key packages due to ecosystem compatibility constraints:

- **Tailwind CSS (`^3.4.0`)**: Pinned to version 3 because **NativeWind v4** does not yet support Tailwind CSS v4. Upgrading to Tailwind v4 will break compilation.
- **ESLint (`^9.21.0`)**: Pinned to version 9 because ESLint v10 causes configuration and plugin crashes (such as `TypeError: contextOrFilename.getFilename is not a function`).

Please do not upgrade these packages beyond these major versions unless the underlying tooling is updated to support them.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [NativeWind documentation](https://www.nativewind.dev/): Learn how to use TailwindCSS in React Native.
- [TailwindCSS documentation](https://tailwindcss.com/docs): Master utility-first CSS framework.
