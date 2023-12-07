import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

export const style = StyleSheet.create({
  container: {
    width,
    paddingVertical: 28,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'none',
  },
  goBackButton: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#171717',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 16,
  },
})
