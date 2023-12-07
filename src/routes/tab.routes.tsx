import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { PainelSound, MenuSounds, Settings } from '../Screens/'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MenuSounds"
    >
      <Stack.Screen name="MenuSounds" component={MenuSounds} />
      <Stack.Screen name="PainelSound" component={PainelSound} />
    </Stack.Navigator>
  )
}

export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#171717',
            height: 60,
            borderColor: 'none',
          },
          tabBarIcon: ({ focused }) => {
            let iconName: any
            if (route.name === 'Sounds') {
              iconName = 'moon'
            }
            if (route.name === 'Settings') {
              iconName = 'settings-sharp'
            }

            return (
              <Animated.View>
                <Ionicons
                  name={iconName}
                  size={24}
                  color={focused ? '#FFF' : 'gray'}
                />
              </Animated.View>
            )
          },
          tabBarLabel: ({ focused }) => {
            const yAxis = useSharedValue(-2)
            const animatedStyles = useAnimatedStyle(() => {
              return {
                transform: [{ translateY: yAxis.value }],
              }
            })
            if (focused) yAxis.value = withTiming(-8)
            else yAxis.value = withTiming(-2)

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
        <Tab.Screen name="Sounds" component={MainStack} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
