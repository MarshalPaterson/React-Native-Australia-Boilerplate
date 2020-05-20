![alt text](https://github.com/MarshalPaterson/React-Native-Australia-Boilerplate/blob/master/src/assets/RNAreadme.png?raw=true)

[![Build Status](https://travis-ci.org/MarshalPaterson/React-Native-Australia-Boilerplate.svg?branch=master)](https://travis-ci.org/MarshalPaterson/React-Native-Australia-Boilerplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub issues](https://img.shields.io/github/issues/MarshalPaterson/React-Native-Australia-Boilerplate)
![GitHub top language](https://img.shields.io/github/languages/top/MarshalPaterson/React-Native-Australia-Boilerplate)

# React-Native-Australia-Boilerplate - RNAB

## Welcome to React Native Boilerplate

React Native Australia Boilerplate is aimed for a quick start for your next new React Native application. 

Currently using:
* Typescript
* react-navigation 
* Functional Components
* Provider & Consumer
* useContext

![alt text](https://github.com/MarshalPaterson/React-Native-Australia-Boilerplate/blob/master/src/assets/RNABviewiOS.gif?raw=true) ![alt text](https://github.com/MarshalPaterson/React-Native-Australia-Boilerplate/blob/master/src/assets/RNABviewAndroid.gif?raw=true)

```
git clone https://github.com/MarshalPaterson/React-Native-Australia-Boilerplate.git
```
```
cd React-Native-Australia-Boilerplate
```

## Config
Copy the 'api.json' from the assets folder to a http server, for example "localhost" and replace the URL 'const FETCH_URL' in App.tsx

## For NPM
To install:
```
npm install
```
To run:
```
npm run android
npm run ios
```
### Lint
```
npm run lint
```
### Unit Test
```
npm run test
```

## For yarn
To install:
```
yarn
```
To run:
```
yarn android
yarn ios
```
### Lint
```
yarn lint
```
### Unit Test
```
yarn test
```

## Troubleshooting
General cleaning helps
```
npm run theclean
yarn theclean
```
For iOS you need to run pods.
```
cd ios
pod install
```
For Android, it could help to have an Emulator running. Also, try running the project in the Android folder in Android Studio.

If you are getting a keystore error review this page https://github.com/facebook/react-native/issues/25629

If you are getting: 

'*Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at /Users/USERNAME/Documents/GitHub/React-Native-Australia-Boilerplate/android/local.properties*'.

The solution can be found at https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found

Also on the API call, you may need to add your IP address rather than localhost.

If you see improvements feel free to create a branch and then it can be merged back.


---

Our website:
https://marshalpaterson.github.io/React-Native-Australia-Boilerplate/

Our group: https://www.linkedin.com/groups/13532424/

---

From Facebook: https://github.com/facebook/react-native | https://reactnative.dev/

---

Feel free to LinkedIn:

<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="mpaterson"><a class="LI-simple-link" href='https://au.linkedin.com/in/mpaterson?trk=profile-badge'>Marshal Paterson</a></div>

React Native Australia - Version 1.0.1 - MIT License


