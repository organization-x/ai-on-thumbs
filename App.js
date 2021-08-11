import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './screens/Welcome'
import Courses from './screens/Courses'
import Lessons from './screens/Lessons'
import Try from './screens/Try'
import Ad from './screens/Ad'
import ZoomScreen from './screens/course1/ZoomScreen'
import PixelScreen from './screens/course1/PixelScreen'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='ZoomScreen' component={ZoomScreen} />
        <Stack.Screen name='PixelScreen' component={PixelScreen} />
        <Stack.Screen name='Courses' component={Courses} />
        <Stack.Screen name='Lessons' component={Lessons} />
        <Stack.Screen name='Try' component={Try} />
        <Stack.Screen name='Ad' component={Ad} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
