import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const style = StyleSheet.create({
  painelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 48,
    left: 0,
    right: 0,
  },
  backgroundImage: {
    width,
    height,
    zIndex: -1,
    position: 'absolute',
    resizeMode: 'cover',
  },
})
