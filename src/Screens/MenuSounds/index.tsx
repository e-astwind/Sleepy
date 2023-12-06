import { View, FlatList } from 'react-native'
import MenuCard from '../../components/Cards/MenuCard'

export function MenuSounds() {
  const data = [
    {
      title: 'Forest',
      imgName: require('./../../assets/card_images/forest.jpg'),
      onPress: () => {
        console.log('Forest')
      },
    },
    {
      title: 'Rain',
      imgName: require('./../../assets/card_images/rain.jpg'),
      onPress: () => {
        console.log('Rain')
      },
    },
  ]
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171717',
      }}
    >
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
