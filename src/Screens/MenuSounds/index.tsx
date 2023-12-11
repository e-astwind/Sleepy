import { View, FlatList } from 'react-native'
import React from 'react'
import MenuCard from '../../components/Cards/MenuCard'
import { style } from './style'
import { dataSounds } from '../../mocks/data-sounds'

export function MenuSounds() {
  return (
    <View style={style.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          gap: 10,
        }}
        data={dataSounds()}
        renderItem={({ item }) => {
          return (
            <MenuCard
              imgName={item.imgName}
              title={item.title}
              onPress={item.onPress}
            />
          )
        }}
      />
    </View>
  )
}
export default MenuSounds
