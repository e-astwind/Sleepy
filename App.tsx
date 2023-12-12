import { TabRoutes } from './src/routes'
import { StatusBar, View } from 'react-native'
import { GlobalConfigProvider } from './src/contexts/GlobalConfigContext'
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <GlobalConfigProvider>
        <StatusBar />
        <TabRoutes />
      </GlobalConfigProvider>
    </View>
  )
}
