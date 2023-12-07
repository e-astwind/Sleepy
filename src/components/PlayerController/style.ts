import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const style = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 56,
    gap: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(23,23,23,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  volPlayerWrapper: {
    height: 56,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
