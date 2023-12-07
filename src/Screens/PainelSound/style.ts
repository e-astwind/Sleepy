import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

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
})
