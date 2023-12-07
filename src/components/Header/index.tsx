import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './style'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Header() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <View
        style={{
          flex: 0.6,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.goBackButton}
        >
          <Ionicons name="chevron-back" size={32} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={style.title}>Forest</Text>
      </View>
    </View>
  )
}
