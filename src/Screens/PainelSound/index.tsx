import React, { useEffect, useRef } from 'react'
import { View, Image } from 'react-native'
import { Audio } from 'expo-av'
import * as Notifications from 'expo-notifications'
import { useRoute } from '@react-navigation/native'
import { Controller, Header } from '../../components'
import { style } from './style'

export default function PainelSound({ navigation }) {
  const params: any = useRoute().params
  const [state, setState] = React.useState(false)
  const [volume, setVolume] = React.useState(0.5)
  const soundRef = useRef<Audio.Sound | null>(null)

  async function playSound() {
    if (!state) {
      setState(true)
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
      })

      const { sound } = await Audio.Sound.createAsync(params.soundPath, {
        isLooping: true,
      })

      soundRef.current = sound
      await sound.playAsync()
    } else {
      setState(false)
      await soundRef.current?.stopAsync()
    }
  }
  const handleBlur = () => {
    soundRef.current?.unloadAsync()
  }
  const handleFocus = () => {
    playSound()
  }

  async function notificationSettings() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Playing ' + params.name,
        body: 'Press here for go to app!',
      },
      trigger: null,
    })
  }

  useEffect(() => {
    soundRef.current?.setVolumeAsync(volume)
  }, [volume])
  const unsubscribeBlur = navigation.addListener('blur', handleBlur)
  const unsubscribeFocus = navigation.addListener('focus', handleFocus)
  useEffect(() => {
    notificationSettings()
    return () => {
      unsubscribeBlur()
      unsubscribeFocus()
    }
  }, [navigation])

  return (
    <View style={{ flex: 1 }}>
      <Image style={style.backgroundImage} source={params.imgRoute} />
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
