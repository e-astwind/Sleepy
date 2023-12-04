import { View, FlatList } from 'react-native'
import MenuCard from '../../components/Cards/MenuCard'

export function MenuSounds() {
  const data = [
    {
      title: 'Forest',
      imgName: 'forest',
      onPress: () => {
        console.log('Forest')
      },
    },
    {
      title: 'Forest',
      imgName: 'forest',
      onPress: () => {
        console.log('Forest')
      },
    },
  ]
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <FlatList
          ItemSeparatorComponent={() => <View style={{ width: '6%' }} />}
          horizontal
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                width: '45%',
              }}
            >
              <MenuCard
                title={item.title}
                imgName={item.imgName}
                onPress={item.onPress}
              />
            </View>
          )}
        />
      </View>
    </View>
  )
}
export default MenuSounds
