# Expo Linking API Unreliable Deep Link Handling on Android

This repository demonstrates a bug in the Expo `Linking` API on Android where the event listener for deep links may fail to trigger reliably when the app is already open. 

## Bug Description

When an app using Expo's `Linking` API is already running and a deep link is tapped, the `Linking.addEventListener` callback is not always called, causing the deep link to be ignored. This is inconsistent and leads to broken functionality. This only occurs on Android, and iOS seems to behave as expected.

## Reproduction Steps

1. Clone this repository.
2. Run the app on an Android emulator or device.
3. Navigate away from the app.
4. Tap on a deep link to open the app with the specified route.
5. Observe that the app launches. 
6. Now, without closing the app, open a new link to trigger the eventListener; this is when the unreliability might be experienced.  The console will show whether the event was handled.

## Solution

A workaround involves using `Linking.getInitialURL` in `componentDidMount` in addition to the event listener, and then cleaning up the listener after use.

## Note

This issue seems to be specific to the Expo `Linking` API and its interaction with the Android system.  Other deep linking approaches might not exhibit the same problem.
