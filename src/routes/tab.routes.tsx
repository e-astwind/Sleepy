import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { MenuSounds, Settings, Analytics } from '../Screens/'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#171717',
            height: 60,
          },
          tabBarIcon: ({ focused }) => {
            let iconName: any
            if (route.name === 'Sounds') {
              iconName = 'moon'
            }
            if (route.name === 'Settings') {
              iconName = 'settings-sharp'
            }
            if (route.name === 'Analytics') {
              iconName = 'analytics'
            }
            const yAxis = useSharedValue(8)
            const animatedStyles = useAnimatedStyle(() => {
              return {
                transform: [{ translateY: yAxis.value }],
              }
            })
            if (focused) yAxis.value = withTiming(-1)
            else yAxis.value = withTiming(8)
            return (
              <Animated.View style={[animatedStyles]}>
                <Ionicons
                  name={iconName}
                  size={24}
                  color={focused ? '#FFF' : 'gray'}
                />
              </Animated.View>
            )
          },
          tabBarLabel: ({ focused }) => {
            const yAxis = useSharedValue(-8)
            const animatedStyles = useAnimatedStyle(() => {
              return {
                transform: [{ translateY: yAxis.value }],
              }
            })
            if (focused) yAxis.value = withTiming(-2)
            else yAxis.value = withTiming(-8)

            return (
              <Animated.View style={[animatedStyles, { alignSelf: 'center' }]}>
                <Text
                  style={{
                    color: '#FFF',
                  }}
                >
                  {focused ? route.name : ''}
                </Text>
              </Animated.View>
            )
          },
        })}
      >
        <Tab.Screen name="Sounds" component={MenuSounds} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Analytics" component={Analytics} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
