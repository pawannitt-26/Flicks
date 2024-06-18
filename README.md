# Flick
The **Flick** App allows users to view videos and create new videos with a selfie overlay in the bottom left corner.

## Introduction
The Video Overlay Creator App is designed to enhance video content by allowing users to overlay a selfie onto existing videos. This can be useful for creating personalized video messages, adding branding elements, or simply for fun and creative purposes.

## Screenshots
 <img src="https://github.com/pawannitt-26/Flicks/assets/133587112/fcd06be0-b728-40c3-b720-c5a7090f0c86" width ='200'>&emsp;
 
## Installation

## Steep 1: Clone the repository
```bash
git clone https://github.com/pawannitt-26/Flicks
cd flick/
```

## Step 2: Install dependencies
```bash
# using npm
npm install
```

## Step 3: Start the Metro Server
First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Dependencies
List of main dependencies used in the project:
- react-native-video: For playing videos.
- react-native-video-processing: For processing and creating new videos with overlays.
- react-native-fs: For file system operations.
- react-native-permissions: For handling permissions.
- react-native-safe-area-context: For safe area handling in different devices.

- - -
Feel free to customize the sections and content based on your specific app features, dependencies, and preferences. Including relevant links to documentation or additional resources can also be beneficial for users and contributors.
