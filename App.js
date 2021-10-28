import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import Welcome from './screens/Welcome'
import Courses from './screens/Courses'

import Thumbs from './screens/Thumbs'
import NoThumbs from './screens/NoThumbs'
import YesThumbs from './screens/YesThumbs'

import * as Sentry from 'sentry-expo'

// course 1 imports
import Course1Intro from './screens/course_1/1_intro'
import Course1FaceFinder from './screens/course_1/2_face_finder'
import Course1HowFindFaces from './screens/course_1/3_how_find_faces'
import Course1PinchZoom from './screens/course_1/3.5_pinch_zoom.js'
import Course1Info1 from './screens/course_1/4_info_1'
import Course1Info2 from './screens/course_1/5_info_2'
import Course1Brightness1 from './screens/course_1/6_brightness_1'
import Course1Brightness1Point5 from './screens/course_1/7_brightness_1.5'
import Course1Brightness2 from './screens/course_1/8_brightness_2'
import Course1Info3 from './screens/course_1/9_info_3'
import Course1Info4 from './screens/course_1/10_info_4'
import Course1Magnify from './screens/course_1/11_magnify'
import Course1Info5 from './screens/course_1/12_info_5'
import Course1HumanVsComputer from './screens/course_1/13_human_vs_computer'
import Course1HumanVsComputer2 from './screens/course_1/13.5_human_vs_computer2'
import Course1Info6 from './screens/course_1/14_info_6'
import Course1Info7 from './screens/course_1/15_info_7'
import Course1Info8 from './screens/course_1/16_info_8'
import Course1Info9 from './screens/course_1/17_info_9'
import Course1FaceParts from './screens/course_1/18_face_parts'
import Course1FaceParts2 from './screens/course_1/18.5_face_parts'
import Course1Congrats from './screens/course_1/19_congrats'
import Course1Review from './screens/course_1/20_review'
import Course1Rating from './screens/course_1/21_rating'
import Course1EmailPrompt from './screens/course_1/22_email_prompt'
import Course1Complete from './screens/course_1/23_complete'

// course 2 imports

Sentry.init({
  dsn: 'https://9415b4e7e301441385f00f60d32cd895@o445453.ingest.sentry.io/6000018',
  enableInExpoDevelopment: false,
  debug: false
})

const Stack = createStackNavigator()

export default function App () {
  const [loaded] = useFonts({
    Avenir: require('./assets/fonts/Avenir.ttf')
  })

  if (!loaded) {
    return null
  }
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.naviBackground}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Welcome'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name='Courses' component={Courses} />

          <Stack.Screen name='Thumbs' component={Thumbs} />
          <Stack.Screen name='NoThumbs' component={NoThumbs} />
          <Stack.Screen name='YesThumbs' component={YesThumbs} />

          {/* course 1 screen stack */}
          <Stack.Screen name='Course1Intro' component={Course1Intro} />
          <Stack.Screen name='Course1FaceFinder' component={Course1FaceFinder} />
          <Stack.Screen name='Course1HowFindFaces' component={Course1HowFindFaces} />
          <Stack.Screen name='Course1PinchZoom' component={Course1PinchZoom} />
          <Stack.Screen name='Course1Info1' component={Course1Info1} />
          <Stack.Screen name='Course1Info2' component={Course1Info2} />
          <Stack.Screen name='Course1Brightness1' component={Course1Brightness1} />
          <Stack.Screen name='Course1Brightness1.5' component={Course1Brightness1Point5} />
          <Stack.Screen name='Course1Brightness2' component={Course1Brightness2} />
          <Stack.Screen name='Course1Info3' component={Course1Info3} />
          <Stack.Screen name='Course1Info4' component={Course1Info4} />
          <Stack.Screen name='Course1Magnify' component={Course1Magnify} />
          <Stack.Screen name='Course1Info5' component={Course1Info5} />
          <Stack.Screen name='Course1HumanVsComputer' component={Course1HumanVsComputer} />
          <Stack.Screen name='Course1HumanVsComputer2' component={Course1HumanVsComputer2} />
          <Stack.Screen name='Course1Info6' component={Course1Info6} />
          <Stack.Screen name='Course1Info7' component={Course1Info7} />
          <Stack.Screen name='Course1Info8' component={Course1Info8} />
          <Stack.Screen name='Course1Info9' component={Course1Info9} />
          <Stack.Screen name='Course1FaceParts' component={Course1FaceParts} />
          <Stack.Screen name='Course1FaceParts2' component={Course1FaceParts2} />
          <Stack.Screen name='Course1Congrats' component={Course1Congrats} />
          <Stack.Screen name='Course1Review' component={Course1Review} />
          <Stack.Screen name='Course1Rating' component={Course1Rating} />
          <Stack.Screen name='Course1EmailPrompt' component={Course1EmailPrompt} />
          <Stack.Screen name='Course1Complete' component={Course1Complete} />

          {/* course 2 screen stack */}

        </Stack.Navigator>
      </NavigationContainer>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  naviBackground: {
    flex: 1,
  }
})