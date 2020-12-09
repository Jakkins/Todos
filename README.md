<h1 align="center">TodosSinglePage + SSL</h1>

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

| Package | Usage |
| ------------- | ------------- |
| @react-native-async-storage/async-storage | to save in a file server's configurations |
| @react-navigation/native | NavigationContainer |
| import {NativeModules} from 'react-native' | I used one NativeModules to ping the server and see his status |
| react-native-keychain | to encrypt and save username and token |
| @react-native-community/netinfo | to check internet connection |
| @react-navigation/stack | to manage the navigation on the app |

React Navigation basic installations
```bash
npm i --save react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
Other Packages
```bash
npm i --save @react-native-async-storage/async-storage @react-navigation/native react-native-keychain @react-native-community/netinfo @react-navigation/stack
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