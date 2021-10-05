import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './screens/Welcome'
import Courses from './screens/Courses'

// course 1 imports
import Course1Intro from './screens/course_1/1_intro'
import Course1FaceFinder from './screens/course_1/2_face_finder'
import Course1HowFindFaces from './screens/course_1/3_how_find_faces'
import Course1Info1 from './screens/course_1/4_info_1'
import Course1Info2 from './screens/course_1/5_info_2'
import Course1Brightness1 from './screens/course_1/6_brightness_1'
import Course1Brightness2 from './screens/course_1/6_brightness_2'
import Course1Info3 from './screens/course_1/5_info_3'
import Course1Info4 from './screens/course_1/5_info_4'
import Course1Magnify from './screens/course_1/10_magnify'
import Course1Info5 from './screens/course_1/5_info_5'
import Course1HumanVsComputer from './screens/course_1/12_human_vs_computer'
import Course1Info6 from './screens/course_1/5_info_6'
import Course1Info7 from './screens/course_1/5_info_7'
import Course1Info8 from './screens/course_1/5_info_8'
import Course1Info9 from './screens/course_1/5_info_9'
import Course1FaceParts from './screens/course_1/17_face_parts'
import Course1Congrats from './screens/course_1/18_congrats'
import Course1Review from './screens/course_1/19_review'
import Course1Rating from './screens/course_1/20_rating'
import Course1EmailPrompt from './screens/course_1/21_email_prompt'
import Course1Complete from './screens/course_1/22_complete'

// course 2 imports

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

        {/* course 1 screen stack */}
        <Stack.Screen name='Course1Intro' component={Course1Intro} />
        <Stack.Screen name='Course1FaceFinder' component={Course1FaceFinder} />
        <Stack.Screen name='Course1HowFindFaces' component={Course1HowFindFaces} />
        <Stack.Screen name='Course1Info1' component={Course1Info1} />
        <Stack.Screen name='Course1Info2' component={Course1Info2} />
        <Stack.Screen name='Course1Brightness1' component={Course1Brightness1} />
        <Stack.Screen name='Course1Brightness2' component={Course1Brightness2} />
        <Stack.Screen name='Course1Info3' component={Course1Info3} />
        <Stack.Screen name='Course1Info4' component={Course1Info4} />
        <Stack.Screen name='Course1Magnify' component={Course1Magnify} />
        <Stack.Screen name='Course1Info5' component={Course1Info5} />
        <Stack.Screen name='Course1HumanVsComputer' component={Course1HumanVsComputer} />
        <Stack.Screen name='Course1Info6' component={Course1Info6} />
        <Stack.Screen name='Course1Info7' component={Course1Info7} />
        <Stack.Screen name='Course1Info8' component={Course1Info8} />
        <Stack.Screen name='Course1Info9' component={Course1Info9} />
        <Stack.Screen name='Course1FaceParts' component={Course1FaceParts} />
        <Stack.Screen name='Course1Congrats' component={Course1Congrats} />
        <Stack.Screen name='Course1Review' component={Course1Review} />
        <Stack.Screen name='Course1Rating' component={Course1Rating} />
        <Stack.Screen name='Course1EmailPrompt' component={Course1EmailPrompt} />
        <Stack.Screen name='Course1Complete' component={Course1Complete} />

        {/* course 2 screen stack */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}
