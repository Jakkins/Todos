import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {checkInternetConnection} from './myutils/checkServerConnection'
import LogInRoutes from './routes/LogInRoutes';
import HomeRoutes from './routes/HomeRoutes';

const serverIP = '192.168.1.100'
const port = 3000

let serverJson = {
  serverIP: serverIP,
  port: port,
  url: 'https://'+ serverIP + ':' + port,
}

AsyncStorage.setItem('server', JSON.stringify(serverJson))
AsyncStorage.setItem('logs', ' === start logs ===\n' + serverJson.serverIP + '\n' + serverJson.port + '\n' + serverJson.url)

function App() {
  const [isSignedIn, setSigned] = useState(false)
  checkInternetConnection(isSignedIn, setSigned)
  
  return (
    <NavigationContainer>
    {isSignedIn ? <HomeRoutes /> : (
      <LogInRoutes isSignedIn={isSignedIn} setSigned={setSigned} />
      )}
    </NavigationContainer>
    )
  }
  
  
/*
function App() {
  const [datas, setDatas] = useState([])
  
  return (
    <View>
      
    <TouchableOpacity
    onPress={() => {
      fetch('https://gorest.co.in/public-api/users')
      .then((response) => response.json())
      .then((json) => {
        setDatas(json)
      })
      .catch((error) => console.error(error) )
    }}>
    <Text>Add Datas</Text>
    </TouchableOpacity>
    
    <Text>
    {
      JSON.stringify(datas)
    }
    </Text>
    
    </View>  
    )
  }
  
*/

export default App;