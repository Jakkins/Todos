import React from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

// ======================================
// Components

export const PasswordTextInput = (props) => {
  return (
    <TextInput
      placeholder='password'
      {...props} // Inherit any props passed e.g., multiline, numberOfLines below
      maxLength={30}
      secureTextEntry
    />
  )
}

// ======================================
// Styles

export const generalCSS = StyleSheet.create({
  button: {
    padding: 10,
    marginBottom: 15,
    width: '90%',
    flexGrow: 0.001,
    backgroundColor: '#BF360C',
    borderWidth: 2,
    borderColor: '#BF360C',
    borderRadius: 8,
  },
  text: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  }
})

export const AppCSS = StyleSheet.create({
  view: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 40
  }
})

export const logScreenCSS = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})

export const LogInCSS = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  textInput: {
    padding: 8,
    marginBottom: 15,
    fontSize: 18,
    width: '90%',
    textAlign: 'center', // placeholder alignment
    flexGrow: 0.001,
    color: 'black',
    borderWidth: 3,
    borderColor: '#BF360C',
    borderRadius: 16,
  }
})

export const TodoScreenCSS = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    width: '90%',
    marginBottom: 10,
    flexGrow: 0.001,
    backgroundColor: '#BF360C',
    borderColor: '#BF360C',
    borderWidth: 2,
    borderRadius: 8,
  },
  modal_center_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  modal_button_view: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "white",
    width: '85%',
    height: '50%',
  },
  modal_button: {
    alignSelf: 'flex-end',
    padding: 10,
    margin: 10,
    width: '30%',
    flexGrow: 0.001,
    backgroundColor: '#BF360C',
    borderWidth: 2,
    borderColor: '#BF360C',
    borderRadius: 8,
  }
})