import { Text, Image, TouchableOpacity } from 'react-native'
import { style } from './style'
import React from 'react'

type Props = {
  title: string
  imgName: any
  onPress: () => void
}

export function MenuCard(data: Props) {
  return (
    <TouchableOpacity onPress={data.onPress} style={style.container}>
      <Text style={style.title}>{data.title}</Text>
      <Image style={style.image} source={data.imgName} />
    </TouchableOpacity>
  )
}
