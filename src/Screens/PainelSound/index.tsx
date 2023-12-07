import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Controller from '../../components/PlayerController'
import Header from '../../components/Header'
import { AntDesign } from '@expo/vector-icons'
import { style } from './style'
import Icon from '../../components/Icon'
const { width, height } = Dimensions.get('window')

export default function PainelSound() {
  const params: any = useRoute().params
  const [state, setState] = React.useState(false)

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{
          width,
          height,
          zIndex: -1,
          position: 'absolute',
        }}
        source={params.imgRoute}
      />
      <Header />

      <View style={style.painelContainer}>
        <Icon
          onPress={() => console.log()}
          icon={AntDesign}
          name="clockcircle"
          size={28}
          color="#FFF"
        />
        <Controller onPress={() => setState(!state)} changeState={state} />
        <Icon
          onPress={() => console.log()}
          icon={AntDesign}
          name="bars"
          size={28}
          color="#FFF"
        />
      </View>
    </View>
  )
}
