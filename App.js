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
import RedComplexityScreen1 from './screens/course1/RedComplexityScreen1'
import RedComplexityScreen2 from './screens/course1/RedComplexityScreen2'
import RedComplexityScreen3 from './screens/course1/RedComplexityScreen3'
import CalculationScreen from './screens/course1/CalculationScreen'
import EyeDetectionScreen from './screens/course1/EyeDetectionScreen'
import NoseDetectionScreen from './screens/course1/NoseDetectionScreen'
import FaceFoundScreen from './screens/course1/FaceFoundScreen'
import HowContrastWorks from './screens/course1/HowContrastWorks'
import FaceDetectionBasics from './screens/course1/FaceDetectionBasics'
import DetectingFeaturesScreen from './screens/course1/DetectingFeaturesScreen'

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
        <Stack.Screen name='RedComplexityScreen1' component={RedComplexityScreen1} />
        <Stack.Screen name='RedComplexityScreen2' component={RedComplexityScreen2} />
        <Stack.Screen name='RedComplexityScreen3' component={RedComplexityScreen3} />
        <Stack.Screen name='FaceDetectionBasics' component={FaceDetectionBasics} />
        <Stack.Screen name="DetectingFeaturesScreen" component={DetectingFeaturesScreen} />
        <Stack.Screen name='HowContrastWorks' component={HowContrastWorks} />
        <Stack.Screen name='Calculation' component={CalculationScreen} />
        <Stack.Screen name='FaceFoundScreen' component={FaceFoundScreen} />
        <Stack.Screen name='EyeDetectionScreen' component={EyeDetectionScreen} />
        <Stack.Screen name='NoseDetectionScreen' component={NoseDetectionScreen} />
        <Stack.Screen name='Ad' component={Ad} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
