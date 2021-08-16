import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './screens/Welcome'
import Ad from './screens/Ad'
import Courses from './screens/Courses'
import ZoomScreen from './screens/course1/ZoomScreen'
import PixelScreen from './screens/course1/PixelScreen'
import MagnifyScreen from './screens/course1/MagnifyScreen'
import CalculationScreen from './screens/course1/CalculationScreen'
import FilterScreen from './screens/course1/FilterScreen'
import EyeDetectionScreen from './screens/course1/EyeDetectionScreen'
import NoseDetectionScreen from './screens/course1/NoseDetectionScreen'
import FaceFoundScreen from './screens/course1/FaceFoundScreen'

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
        <Stack.Screen name="Calculation" component={CalculationScreen} />
        <Stack.Screen name="FaceFoundScreen" component={FaceFoundScreen} />
        <Stack.Screen name="EyeDetectionScreen" component={EyeDetectionScreen} />
        <Stack.Screen name="NoseDetectionScreen" component={NoseDetectionScreen} />
        <Stack.Screen name='Ad' component={Ad} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
