import { Dimensions, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
  title: string
  imgName: any
  onPress: () => void
}

const { width } = Dimensions.get('window')
export default function MenuCard(data: Props) {
  return (
    <TouchableOpacity
      onPress={data.onPress}
      style={{
        width: width / 2.1,
        height: 180,
        borderRadius: 10,
        backgroundColor: '#fff',
      }}
    >
      <Text
        style={{
          position: 'absolute',
          zIndex: 1,
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          bottom: 10,
          left: 10,
        }}
      >
        {data.title}
      </Text>
      <Image
        style={{
          width: '100%',
          height: 180,
          borderRadius: 10,
        }}
        source={data.imgName}
      />
    </TouchableOpacity>
  )
}
