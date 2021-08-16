import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './screens/Welcome'
import Ad from './screens/Ad'
import Courses from './screens/Courses'
import ZoomScreen from './screens/course1/ZoomScreen'
import PixelScreen from './screens/course1/PixelScreen'
import MagnifyScreen from './screens/course1/MagnifyScreen'
import CalcContrastScreen from './screens/course1/CalcContrastScreen'
import FilterScreen from './screens/course1/FilterScreen'

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
        <Stack.Screen name='CalcContrastScreen' component={CalcContrastScreen} />
        <Stack.Screen name='FilterScreen' component={FilterScreen} />
        <Stack.Screen name='Ad' component={Ad} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
