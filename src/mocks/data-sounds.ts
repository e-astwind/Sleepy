import { useNavigation, NavigationProp } from '@react-navigation/native'

function dataSounds(): {
  title: string
  imgName: string
  onPress: () => void
}[] {
  const navigation: NavigationProp<any> = useNavigation()
  return [
    {
      title: 'Rain city',
      imgName: require('../assets/card_images/rain.gif'),
      onPress: () => {
        navigation.navigate('PainelSound', {
          name: 'Rain city',
          imgRoute: require('../assets/card_images/rain.gif'),
          soundPath: require('../assets/sounds/rain.mp3'),
        })
      },
    },
    {
      title: 'Forest',
      imgName: require('../assets/card_images/forest.gif'),
      onPress: () => {
        navigation.navigate('PainelSound', {
          name: 'forest',
          imgRoute: require('../assets/card_images/forest.gif'),
          soundPath: require('../assets/sounds/forest.mp3'),
        })
      },
    },
  ]
}

export { dataSounds }
