import React, { createContext, useEffect } from 'react'
import * as Notifications from 'expo-notifications'

type GlobalConfigContextType = {}

const GlobalConfigContext = createContext<GlobalConfigContextType | undefined>(
  undefined,
)

type GlobalConfigProviderProps = {
  children: React.ReactNode
}

export function GlobalConfigProvider({ children }: GlobalConfigProviderProps) {
  async function configLocalNotification() {
    await Notifications.requestPermissionsAsync({
      android: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    })
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    })
  }

  useEffect(() => {
    configLocalNotification()
  }, [])

  return (
    <GlobalConfigContext.Provider value={{}}>
      {children}
    </GlobalConfigContext.Provider>
  )
}
