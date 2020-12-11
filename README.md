<h1 align="center">Todos + SSL</h1>

- [Launcher](#launcher)
- [Packages](#packages)
- [Install server certificate on Android](#install-server-certificate-on-android)
- [Create APK](#create-apk)
- [Example to ask permission](#example-to-ask-permission)

| Layer | Technology |
| ------------- | ------------- |
| backend | NodeJS |
| frontend | React Native |

## Launcher

To launch automatically:
- React Native
- Android Emulator
- Backend Server

```bash
$ launch.sh
```

## Packages

| Package | Usage | Source |
| ------------- | ------------- | ------------- |
| @react-native-async-storage/async-storage | to save in a file server's configurations | [source](https://react-native-async-storage.github.io/async-storage/docs/install/) |
| @react-navigation/native | NavigationContainer | [source](https://reactnavigation.org/docs/getting-started) |
| import {NativeModules} from 'react-native' | I used one NativeModules to ping the server and see his status |
| react-native-keychain | to encrypt and save username and token | [source](https://www.npmjs.com/package/react-native-keychain) |
| @react-native-community/netinfo | to check internet connection | [source](https://www.npmjs.com/package/@react-native-community/netinfo) |
| @react-navigation/stack | to manage the navigation on the app |[source](https://reactnavigation.org/docs/stack-navigator/) |

## Install server certificate on Android

[start](https://github.com/Jakkins/NodeJS_for_newbie/tree/master/NodeJS2%20-%20Server/SimpleSSLServer)
[one-self-signed-cert-to-rule-them-all-chrome-android-and-ios111](https://stackoverflow.com/questions/57565665/one-self-signed-cert-to-rule-them-all-chrome-android-and-ios)

## Create APK

assembleRelease = bundleRelease + generate apk

```bash
cd android/gradlew assembleRelease
```

## Example to ask permission

```javascript
const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
            buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
      } else {
          console.log("Camera permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
}
```