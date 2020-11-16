#!/bin/bash

xtermpretty="xterm -b 10 -fg white -bg black -fa 'Monospace' -fs 10"

sourcepath=$( dirname "${BASH_SOURCE[0]}" )
cd ./sourcepath/frontend

$xtermpretty -e /bin/bash -c "npx react-native start --verbose" &
sleep 1
$xtermpretty -hold -e /bin/bash -c "npx react-native run-android --verbose" &

cd ../backend
node server.js; cd ..

#############################
## Bhooo
##
## 
##
## /bin/sh -c ls
## if [ "$DISPLAY" != "" ]; then
##    if [ "$1" != "--rex" -a "$2" != "--rex" ]; then
##       konsole --nofork -e /bin/sh $0 --rex 2>/dev/null || xterm -e /bin/sh $0 --rex 2>/dev/null || /bin/sh $0 --rex 2>/dev/null
##       exit
##    fi
## fi
#############################