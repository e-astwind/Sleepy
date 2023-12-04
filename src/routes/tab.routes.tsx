import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MenuSounds, Settings } from '../Screens/'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#FFF',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000',
            flexDirection: 'row',
          },
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ focused }) => {
            let iconName: any

            if (route.name === 'Sounds') {
              iconName = 'moon'
            }
            if (route.name === 'Settings') {
              iconName = 'settings-sharp'
            }
            return (
              <Ionicons
                name={iconName}
                size={24}
                color={focused ? '#FFF' : 'gray'}
              />
            )
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  color: '#FFF',
                  marginLeft: 18,
                }}
              >
                {focused ? route.name : ''}
              </Text>
            )
          },
        })}
      >
        <Tab.Screen name="Sounds" component={MenuSounds} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
