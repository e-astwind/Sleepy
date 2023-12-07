import { View, FlatList } from 'react-native'
import React from 'react'
import MenuCard from '../../components/Cards/MenuCard'
import { style } from './style'

export function MenuSounds({ navigation }) {
  const data = [
    {
      title: 'Rain city',
      imgName: require('./../../assets/card_images/chuva.gif'),
      onPress: () => {
        navigation.navigate('PainelSound', {
          name: 'Rain city',
          imgRoute: require('./../../assets/card_images/chuva.gif'),
        })
      },
    },
    {
      title: 'Rain',
      imgName: require('./../../assets/card_images/rain.jpg'),
      onPress: () => {
        navigation.navigate('PainelSound', {
          name: 'forest',
          imgRoute: require('./../../assets/card_images/rain.jpg'),
        })
      },
    },
  ]
  return (
    <View style={style.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          gap: 10,
        }}
        data={data}
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
