import { TabRoutes } from './src/routes'
import { StatusBar, View } from 'react-native'
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <TabRoutes />
    </View>
  )
}
