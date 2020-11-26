import React, { useState } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Modal
} from 'react-native'
import { generalCSS, TodoScreenCSS } from '../styles/global'
import * as Keychain from 'react-native-keychain'
import { gettodos } from '../myutils/myreq'
import { ScrollView } from 'react-native-gesture-handler'

let personalTodos = getTodos()

export default function TodoScreen({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={ TodoScreenCSS.body }>

            <Modal
                visible={modalVisible}
                transparent={true}
            >
                <View style={ TodoScreenCSS.modal_center_view }>
                    <View style={ TodoScreenCSS.modal_button_view }>
                        <TouchableOpacity
                            style={TodoScreenCSS.modal_button}
                            onPress={() => setModalVisible(false) }>
                            <Text style={generalCSS.text}>Nullify</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={TodoScreenCSS.modal_button}
                            onPress={() => {

                            }}>
                            <Text style={generalCSS.text}>Add Todo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <ScrollView>
                {

                }
            </ScrollView>
            <TouchableOpacity
                style={TodoScreenCSS.button}
                onPress={() => setModalVisible(true) }>
                <Text style={generalCSS.text}>Add personal todo</Text>
            </TouchableOpacity>

        </View>
    )
}

async function getTodos() {
    try {
        let user = await Keychain.getGenericPassword()
        let res = await gettodos(user.password, user.username)
        let json = await res.json()
        console.log(json)
    }
    catch (e) {
        console.log(e)
    }
}