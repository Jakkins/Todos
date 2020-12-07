import React, {useState} from 'react';
import {
  Button,
  View,
  Modal,
  TouchableOpacity,
  Text
} from 'react-native';
import { generalCSS, HeaderMenuCSS } from '../styles/global'

export default function HeaderMenu({isSignedIn, setSigned, navigation}) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
      style={HeaderMenuCSS.header_button}
      onPress={() => setModalVisible(true)}>
        <Text style={HeaderMenuCSS.header_button_text}>≡</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
      >
        <TouchableOpacity 
        style={ HeaderMenuCSS.modal_background }
        onPress={() => setModalVisible(false) }>

          <View style={ HeaderMenuCSS.modal_menu }>
            <TouchableOpacity
            style={HeaderMenuCSS.modal_menu_button}
            onPress={() => {}}>
              <Text style={HeaderMenuCSS.modal_menu_text}>Log</Text>
            </TouchableOpacity>
            <View style={HeaderMenuCSS.modal_menu_separator}></View>
            <TouchableOpacity
            style={HeaderMenuCSS.modal_menu_button}
            onPress={() => {}}>
              <Text style={HeaderMenuCSS.modal_menu_text}>About</Text>
            </TouchableOpacity>
          </View>

        </TouchableOpacity>
      </Modal>
    </View>      
  )

}