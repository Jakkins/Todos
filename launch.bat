rem https://ss64.com/nt/start.html
rem https://ss64.com/nt/cmd.html
rem JAVA_HOME - JDK
rem GRADLE_HOME - why?
rem npx --stacktrace react-native run-android

cd C:\Dev\Github\Todos
cd .\backend\
start cmd.exe "/k node server.js"

cd ..
cd .\frontend\
start cmd.exe "/k npx react-native run-android --verbose"

cd ..