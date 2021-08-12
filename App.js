import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './screens/Welcome'
import Courses from './screens/Courses'
import ZoomScreen from './screens/course1/ZoomScreen'
import PixelScreen from './screens/course1/PixelScreen'
import MagnifyScreen from './screens/course1/MagnifyScreen'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Courses' component={Courses} />
        <Stack.Screen name='ZoomScreen' component={ZoomScreen} />
        <Stack.Screen name='MagnifyScreen' component={MagnifyScreen} />
        <Stack.Screen name='PixelScreen' component={PixelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
