#!/bin/bash

sourcepath=$( dirname "${BASH_SOURCE[0]}" )

xtermpretty="xterm -b 10 -fg white -bg black -fa 'Monospace' -fs 10"
# LAUNCH emulator (emulator -list-avds)
$xtermpretty -e /bin/bash -c "emulator -avd Pixel_2_API_30" &
# LAUNCH metro bundler server
cd $sourcepath/frontend
$xtermpretty -hold -e /bin/bash -c "npx react-native start --verbose" & 

# LAUNCH react native app system [hardcore: use adb to install the app](adb shell input keyevent 82)
# cd android && ./gradlew app:installDebug -PreactNativeDevServerPort=8081
npx react-native run-android --verbose

# LAUNCH backend server
# cd $sourcepath/backend
# $xtermpretty -e /bin/bash -c "node server.js" &