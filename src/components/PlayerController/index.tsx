import { View } from 'react-native'
import React, { useEffect } from 'react'
import { style } from './style'
import Slider from '@react-native-community/slider'
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons'
import { Icon } from '../Icon'
type Props = {
  changeState: boolean
  controllerPress: () => void
  volume: (vol: number) => void
}

export function Controller({ changeState, controllerPress, volume }: Props) {
  const [vol, setVol] = React.useState(0.5)

  useEffect(() => {
    volume(vol)
  }, [vol])

  return (
    <View style={style.container}>
      <View style={style.volPlayerWrapper}>
        <Icon icon={AntDesign} name="clockcircle" size={22} color="#FFF" />
        <Icon
          onPress={controllerPress}
          icon={FontAwesome5}
          name={changeState ? 'pause' : 'play'}
          size={18}
          color="#FFF"
        />
      </View>
      <View style={style.progressBar}>
        <Icon
          onPress={() => (vol == 0 ? setVol(1) : setVol(0))}
          icon={Ionicons}
          name={
            vol == 0
              ? 'volume-off'
              : vol < 0.5
                ? 'volume-low'
                : vol >= 0.5 && vol < 1
                  ? 'volume-medium'
                  : 'volume-high'
          }
          size={28}
          color="#FFF"
        />
        <Slider
          style={{ width: 220, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          value={vol}
          onValueChange={(value) => setVol(value)}
          thumbTintColor="#9956F6"
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#FFFFFF"
        />
      </View>
    </View>
  )
}
