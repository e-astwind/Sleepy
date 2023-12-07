import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

export const style = StyleSheet.create({
  container: {
    width: width / 2.1,
    height: 240,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  title: {
    position: 'absolute',
    zIndex: 1,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 10,
    left: 10,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 10,
  },
})
