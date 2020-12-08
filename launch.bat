rem https://ss64.com/nt/start.html
rem https://ss64.com/nt/cmd.html

rem SDK Manager, SDK Tool, Install 
rem JAVA_HOME - jdk-8u271
rem GRADLE_HOME
rem GRADLE_USER_HOME

rem npx --stacktrace react-native run-android

rem emulator -list-avds
rem npm run-script android
rem cd android && gradlew.bat app:installDebug -PreactNativeDevServerPort=8081 --status

cd C:\Dev\Github\Todos
cd .\backend\
start cmd.exe "/k node server.js"

cd ..
cd .\frontend\
start cmd.exe "/k npx react-native run-android --verbose"

cd ..