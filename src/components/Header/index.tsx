import { View } from 'react-native'
import React from 'react'
import { style } from './style'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '../Icon'

export function Header() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Icon
        style={style.goBackButton}
        onPress={() => navigation.goBack()}
        icon={Ionicons}
        name="chevron-back"
        size={32}
        color="#FFF"
      />
    </View>
  )
}
