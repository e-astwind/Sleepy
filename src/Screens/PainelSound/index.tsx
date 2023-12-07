import React, { useEffect, useRef } from 'react'
import { View, Image, Dimensions } from 'react-native'
import { Audio } from 'expo-av'
import { useRoute } from '@react-navigation/native'
import Controller from '../../components/PlayerController'
import Header from '../../components/Header'
import { style } from './style'

const { width, height } = Dimensions.get('window')

export default function PainelSound({ navigation }) {
  const params: any = useRoute().params
  const [state, setState] = React.useState(false)
  const [volume, setVolume] = React.useState(0.5)
  const soundRef = useRef<Audio.Sound | null>(null)

  async function playSound() {
    if (!state) {
      setState(true)

      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/rain.mp3'),
        { isLooping: true },
      )

      soundRef.current = sound
      await sound.playAsync()
    } else {
      setState(false)
      await soundRef.current?.stopAsync()
    }
  }

  const handleBlur = () => {
    soundRef.current?.stopAsync()
  }

  const handleFocus = () => {
    playSound()
  }
  useEffect(() => {
    soundRef.current?.setVolumeAsync(volume)
  }, [volume])

  useEffect(() => {
    const unsubscribeBlur = navigation.addListener('blur', handleBlur)
    const unsubscribeFocus = navigation.addListener('focus', handleFocus)

    return () => {
      unsubscribeBlur()
      unsubscribeFocus()
    }
  }, [navigation])

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
        <Controller
          volume={(vol) => setVolume(vol)}
          controllerPress={() => playSound()}
          changeState={state}
        />
      </View>
    </View>
  )
}
