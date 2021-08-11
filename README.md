### What is this?

This is a simple repo to demonstrate that fast refresh is not working in React Native 0.64.2.

Aside from adding this README and a .nvmrc file (so we use Node v15.4.0), the rest remains untouched.

#### How was this created?

I followed the [environment setup](https://reactnative.dev/docs/environment-setup) instructions - opting to create a brand new project following the *React Native CLI Quickstart* path.

I also ensured that I *do not* have the react-native cli tool installed globally. This project is using the latest stable version of React Native (0.64.2).

### What's the problem being demonstrated?

Upon successfully building and running the app in Xcode (using `yarn start`), I make a change to the `App.js` file, save it and observe that:
- the changes aren't immediately reflected in the simulator.
- pressing `Cmd + R` to force an app reload doesn't show the changes I have made.
- pressing `r` to reload from within the Metro command line reloads the app, but the changes I have made are not there.

I need to stop the running instance of the Metro bundler and restart it to see the changes I made reflected in the Simulator.

### How do I get this running?

#### Installation

You will need:
- [Node v15.4.0](https://nodejs.org/en/)
- [nvm](https://github.com/nvm-sh/nvm) to easily switch between node versions
- [CocoaPods v1.10.1](https://cocoapods.org/)
- [Xcode 12.5.1](https://developer.apple.com/xcode/resources/)

1) Clone this repository
2) Run the command `nvm use` to switch to the version of node that we need.
3) Install yarn dependencies with `yarn`
4) Install cocoapods dependencies with `pod install --project-directory=ios`
5) Start the Metro bundler with `yarn start`
6) Start Xcode, then open the project by loading ios/FastRefresh.xcworkspace
7) Press the *play* button in Xcode to build and run the project.

### Further info

Running `npx react-native info` yields the following.

```
System:
    OS: macOS 11.5.1
    CPU: (16) x64 Intel(R) Core(TM) i9-9980HK CPU @ 2.40GHz
    Memory: 1.92 GB / 32.00 GB
    Shell: 5.8 - /bin/zsh
  Binaries:
    Node: 15.4.0 - ~/.nvm/versions/node/v15.4.0/bin/node
    Yarn: 1.22.4 - ~/.yarn/bin/yarn
    npm: 7.0.15 - ~/.nvm/versions/node/v15.4.0/bin/npm
    Watchman: 2021.06.07.00 - /usr/local/bin/watchman
  Managers:
    CocoaPods: 1.10.1 - /usr/local/bin/pod
  SDKs:
    iOS SDK:
      Platforms: iOS 14.5, DriverKit 20.4, macOS 11.3, tvOS 14.5, watchOS 7.4
    Android SDK:
      API Levels: 29, 30
      Build Tools: 29.0.3, 30.0.0, 30.0.1, 30.0.2, 30.0.3, 31.0.0
      System Images: android-28 | Google Play Intel x86 Atom
      Android NDK: Not Found
  IDEs:
    Android Studio: 4.1 AI-201.8743.12.41.7199119
    Xcode: 12.5.1/12E507 - /usr/bin/xcodebuild
  Languages:
    Java: 1.8.0_265 - /usr/bin/javac
  npmPackages:
    @react-native-community/cli: Not Found
    react: 17.0.1 => 17.0.1 
    react-native: 0.64.2 => 0.64.2 
    react-native-macos: Not Found
  npmGlobalPackages:
    *react-native*: Not Found
```