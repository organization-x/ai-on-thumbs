import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './screens/Welcome'
import Courses from './screens/Courses'
import Lessons from './screens/Lessons'
import Try from './screens/Try'
import Ad from './screens/Ad'
import magnifytest from './screens/magnifytest'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='magnifytest' component={magnifytest} />
        <Stack.Screen name='Courses' component={Courses} />
        <Stack.Screen name='Lessons' component={Lessons} />
        <Stack.Screen name='Try' component={Try} />
        <Stack.Screen name='Ad' component={Ad} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
