import { View, Text,TextInput, } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import styles from "./Input.style";

const Input = ({placeholder, value, onType, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} onChangeText={onType} value={value} secureTextEntry={isSecure}/>
      <Icon style={styles.icon_st} name={iconName} size={25} />
    </View>
  )
}

export default Input;