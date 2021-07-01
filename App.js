import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from "./screens/Welcome"
import Courses from "./screens/Courses"
import Lessons from "./screens/Lessons"
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
          }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Courses" component={Courses} />
            <Stack.Screen name="Lessons" component={Lessons} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
