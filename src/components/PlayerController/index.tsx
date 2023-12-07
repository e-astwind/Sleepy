import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { style } from './style'
import { FontAwesome5 } from '@expo/vector-icons'
type Props = {
  changeState: boolean
  onPress: () => void
}

export default function Controller({ changeState, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <FontAwesome5
        name={changeState ? 'pause' : 'play'}
        size={18}
        color="#FFF"
      />
      <Text style={style.label}>{changeState ? 'Stop' : 'Start'}</Text>
    </TouchableOpacity>
  )
}
