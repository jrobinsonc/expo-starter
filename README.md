# Expo Starter

[![CI](https://github.com/jrobinsonc/expo-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/jrobinsonc/expo-starter/actions/workflows/ci.yml)
[![Security](https://github.com/jrobinsonc/expo-starter/actions/workflows/security.yml/badge.svg)](https://github.com/jrobinsonc/expo-starter/actions/workflows/security.yml)
[![Dependabot Updates](https://github.com/jrobinsonc/expo-starter/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/jrobinsonc/expo-starter/actions/workflows/dependabot/dependabot-updates)
[![CodeQL](https://github.com/jrobinsonc/expo-starter/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/jrobinsonc/expo-starter/actions/workflows/github-code-scanning/codeql)

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

## Continuous Integration

GitHub Actions runs on every pull request and push to `main`:

| Workflow | Job | What it checks |
| --- | --- | --- |
| `ci.yml` | Lint | `pnpm lint --max-warnings 0` |
| `ci.yml` | Typecheck | `pnpm typecheck` (`tsc --noEmit`) |
| `ci.yml` | Expo dependency check | `expo install --check` and `expo-doctor` (SDK alignment) |
| `ci.yml` | Bundle (web/android/ios) | `expo export` per platform; the web build is uploaded as an artifact |
| `ci.yml` | CI success | Aggregates the jobs above; use it as the single required status check |
| `security.yml` | Dependency review / pnpm audit | Blocks new high/critical vulnerabilities; also runs weekly |

Node is pinned via `.nvmrc` and pnpm via the `packageManager` field in `package.json`. Run the same checks locally with:

```bash
pnpm lint && pnpm typecheck && pnpm expo install --check
```

## Compatibility & Dependency Pinning

When upgrading or managing dependencies in this project, please keep the following in mind:

### Expo Dependency Alignment

After upgrading packages, the command `pnpm expo install --check` should be executed to make sure installed dependencies are compatible with the installed version of Expo packages. Check [Version validation](https://docs.expo.dev/more/expo-cli/#version-validation) for more information.

### Repository-Specific Version Pins

Separately, this repository pins specific versions of key packages due to unique tool and plugin compatibility constraints:

- **Tailwind CSS (`^3.4.0`)**: Pinned to version 3 because **NativeWind v4** does not yet support Tailwind CSS v4. Upgrading to Tailwind v4 will break compilation.
- **ESLint (`^9.21.0`)**: Pinned to version 9 because ESLint v10 causes configuration and plugin crashes (such as `TypeError: contextOrFilename.getFilename is not a function`).

Please do not upgrade these packages beyond these major versions unless the underlying tooling is updated to support them.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [NativeWind documentation](https://www.nativewind.dev/): Learn how to use TailwindCSS in React Native.
- [TailwindCSS documentation](https://tailwindcss.com/docs): Master utility-first CSS framework.
