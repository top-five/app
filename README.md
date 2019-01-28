# React Native using Expo and Typescript

<img src="https://github.com/janaagaard75/expo-and-typescript/raw/master/assets/app-icon.png" height="50">

This repository is a [React Native](https://facebook.github.io/react-native/) demo app using the [Expo framework](https://expo.io) and written in [TypeScript](http://www.typescriptlang.org).

Expo includes [Babel 7](https://babeljs.io) since version 31, and Babel is now used to transform the TypeScript into JavaScript. Note that Babel doesn't ["perform type-checking on TypeScript code; it [only transforms] your code, and it will compile regardless of whether type errors are present."](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/), so if you want to type check your code, you have to run the TypeScript compiler separately. The npm/Yarn run script `check-types` does this. `tsconfig.json` is only used when checking the types. Babel is configured with `.babelrc`.

This repo used to also contain a type definition file for Expo, but that work has been merged into the [`@types/expo`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/expo) package. The `expo` npm package now contains its own set of type definitions, so `@types/expo` is now ignore, and has been removed. There is currently a type check issue with the SVGs that I haven't figured out how to solve.

The app is published on Expo: [Expo and TypeScript on Expo](https://expo.io/@janaagaard75/expo-and-typescript). It is not published to the app stores, but you can run it on an Android device, if install the free [Expo client](https://expo.io/tools#client). Running on an iOS device without signing in to my Expo account is unfortunately no longer allowed by Apple. This is probably because it makes the Expo app behave too much like an app store.

![Screen shot](https://github.com/janaagaard75/expo-and-typescript/raw/master/screen-shot.png)

## Prerequisites

Install `expo-cli` globally.

```shell
# Install expo-cli globally using Yarn.
yarn global add expo-cli
```

If you prefer to use npm the command is `npm install --global expo-cli`.

## Warnings When Installing Packages

There are a surprising amount of of warnings when building and running the app, because of peer dependencies not being correct. My guess is that the Expo team has a tough time getting all the added React Native libraries to play well together, and this app seems to run fine, so I believe it's safe to ignore the warnings.

## Running the App

Start the local server. This will give you a QR code that you can scan using the Expo Client app on your mobile device.

```shell
yarn start
```

If you're on a Mac and have Xcode installed, you can run the app using the iOS Simulator with the following command. I am sure you can do something similar with Android.

```shell
yarn ios
```

## Setting up Expo with TypeScript

This guide show how to transform and Expo app written in JavaScript in to TypeScript. While Expo supports TypeScript since version 31,  it is still a work in progress, and namely the type definition files are not yet included.

Setting breakpoints in TypeScript files works, and hot reloading works, so it's a pretty solid development experience as long as you're lucky enough to not hit a missing type definition.

**Since version 31 Expo supports TypeScript natively. If you're using that version, 1) don't add the `react-native-typescript-transformer` package, 2) don't specify `sourceExt` and `transformer` in `app.json` and 3) don't mention `babel-preset-expo` and `transform-react-jsx-source` in your `.babelrc`, i.e. delete the file if those were the only two things in it.**

### Add TypeScript

Add TypeScript and the helper library, `tslib`, to the project. I prefer micro managing the version of the packages that I'm using so I add `--exact`, but this is optional. You can, of course, also use `npm` instead of `yarn`.

```shell
yarn add --dev --exact typescript react-native-typescript-transformer
yarn add --exact tslib
```

Configure TypeScript by adding a [`tsconfig.json`](https://github.com/janaagaard75/expo-and-typescript/blob/master/tsconfig.json) file in the root of your project. If you are stating a new project, I would definitely recommend including `"strict": true` and some of the other compiler checks. If you are converting a JavaScript project to TypeScript, you might want to loosen up the rules to start with, and apply them gradually.

### Main App Component in TypeScript

Create a `src` folder, move `App.js` to that folder, and rename the file to `App.tsx`. Since TypeScript has a syntax that is very similar to JavaScript it is probably not necessary to make any modifications to App.tsx to make it valid TypeScript. It is not required to put the sources files in a `src` folder, but that is the de facto standard.

Create a new `App.js` in the root of the project, and insert the following lines. Expo will still be looking for App.js in the root of the project, and these lines simply loads `src/App.tsx`.

```javascript
import App from './src/App'
export default App
```

### Add Type Definitions

Finally add the type definitions for React, React Native, Expo and the Expo icons.

```shell
yarn add --dev --exact @types/react @types/react-native @types/expo @types/expo__vector-icons
```

Since Expo is evolving quickly it is not uncommon that the type definitions are outdated or simply missing. [AudioScreen.tsx line 59](https://github.com/janaagaard75/expo-and-typescript/blob/master/src/AudioScreen.tsx#L59) shows how to deal with an incorrect type definition and [MapViewScreen.tsx line 5] show how to deal with missing type definitions.

## Similar Projects

* [expo-ts-example](https://github.com/dalcib/expo-ts-example), the basis for this project
* [TypeScript-React-Native-Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter)
* [react-native-typescript-starter](https://github.com/cbrevik/react-native-typescript-starter)
