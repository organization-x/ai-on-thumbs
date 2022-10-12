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
import Course2Intro from './screens/course_2/1_intro'
import Course2Review1 from './screens/course_2/2_review_1'
import Course2Review2 from './screens/course_2/3_review_2'
import Course2Review3 from './screens/course_2/4_review_3'
import Course2InterpretPictures from './screens/course_2/5_interpret_pictures'
import Course2OceanNumbers from './screens/course_2/6_ocean_numbers'
import Course2PixelPatternsText from './screens/course_2/7_pixel_patterns_text'
import Course2PixelPatternsInteractive from './screens/course_2/8_pixel_patterns_interactive'
import Course2FilterFeatures1 from './screens/course_2/9_filter_features_1'
import Course2FilterFeatures2 from './screens/course_2/10_filter_features_2'
import Course2FilterFeatures3 from './screens/course_2/11_filter_features_3'
import Course2FilterFeatures4 from './screens/course_2/12_filter_features_4'
import Course2FilterFeatures5 from './screens/course_2/13_filter_features_5'
import Course2Contrast1 from './screens/course_2/14_contrast_1'
import Course2Contrast2 from './screens/course_2/15_contrast_2'
import Course2Contrast3 from './screens/course_2/16_contrast_3'
import Course2ContrastMCQ from './screens/course_2/17_contrast_MCQ'
import Course2DraggableFilter from './screens/course_2/18_draggable_filter'
import Course2DraggableCompleted from './screens/course_2/18_completed'
import Course2ScanAll1 from './screens/course_2/19_scan_all_1'
import Course2ScanAll2Wrong from './screens/course_2/20_scan_all_2_wrong'
import Course2ScanAll2Correct from './screens/course_2/21_scan_all_2_correct'
import Course2ScanAll3 from './screens/course_2/22_scan_all_3'
import Course2ScanAll4 from './screens/course_2/23_scan_all_4'
import Course2ScanAll5 from './screens/course_2/24_scan_all_5'
import Course2SearchingAlgorithmFeatures from './screens/course_2/25_searching_algorithm_features'
import Course2GettingHangAlgorithms from './screens/course_2/26_getting_hang_algorithm'
import Course2SearchingAlgorithmMark from './screens/course_2/27_searching_algorithm_mark'
import Course2Congrats from './screens/course_2/28_congrats'
import Course2AlgorithmReview1 from './screens/course_2/29_algorithm_review_1'
import Course2AlgorithmReview2 from './screens/course_2/30_algorithm_review_2'
import Course2AlgorithmReview3 from './screens/course_2/31_algorithm_review_3'
import Course2AppStoreReview from './screens/course_2/32_app_store_review'
import Course2Email from './screens/course_2/33_email'
import Course2Selfie from './screens/course_2/34_selfie'
import Course2FaceDetection from './screens/course_2/35_face_detection'
import Course2DraggableExplanation from './screens/course_2/18_explanation'

// course 3 imports
import Course3Introduction from './screens/course_3/1_introduction'
import Course3NearestNeighbor from './screens/course_3/2_nearest_neighbor'
import Course3HouseIntroduction from './screens/course_3/3_house_introduction'
import Course3SelectClosestHouse from './screens/course_3/4_closest_house'
import Course3FollowUp from './screens/course_3/5_follow_up'
import Course3FollowUpCorrect from './screens/course_3/6_follow_up_correct'
import Course3FollowUpIncorrect from './screens/course_3/7_follow_up_incorrect'
import Course3DistanceRole from './screens/course_3/8_distance.js'
import Course3Neighborhoods from './screens/course_3/9_neighborhoods.js'
import Course3BlackHouseNeighborhood from './screens/course_3/10_neighborhoods.js'
import Course3GreenHouseNeighborhood from './screens/course_3/11_neighborhoods.js'
import Course3FollowUpIIA from './screens/course_3/12_follow_up'
import Course3FollowUpIIB from './screens/course_3/13_follow_up'
import Course3FollowUpIICorrect from './screens/course_3/14_follow_up_correct'
import Course3FollowUpIIIncorrect from './screens/course_3/15_follow_up_incorrect'
import Course3NearestNeighborsReveal from './screens/course_3/16_nearest_neighbors_reveal'
import Course3CommonTraitQuestion from './screens/course_3/17_common_traits_question'
import Course3CommonTraitAnswer from './screens/course_3/18_common_traits_answer'
import Course3KNNMainIdea from './screens/course_3/19_knn_main_idea'
import Course3KNNMainIdeaII from './screens/course_3/20_knn_main_idea_ii'
import Course3KNNMainIdeaIII from './screens/course_3/21_knn_main_idea_iii'
import Course3KNNMainIdeaIV from './screens/course_3/22_knn_main_idea_iv'
import Course3KNNMainIdeaV from './screens/course_3/23_knn_main_idea_v'
import Course3KNNMainIdeaVI from './screens/course_3/24_knn_main_idea_vi'
import Course3Congratulations from './screens/course_3/25_congratulations'
import Course3AlgorithmReview1 from './screens/course_3/26_algorithm_review_1'
import Course3AlgorithmReview2 from './screens/course_3/27_algorithm_review_2'
import Course3AlgorithmReview3 from './screens/course_3/28_algorithm_review_3'
import Course3AlgorithmReview4 from './screens/course_3/29_algorithm_review_4'
import Course3AppStoreReview from './screens/course_3/30_app_store_review'
import Course3Email from './screens/course_3/31_email'
import Course3Promotion from './screens/course_3/32_promotion'

import Course4_intro from './screens/course_4/1.1_intro'
import Course4_second from './screens/course_4/1.2_nn'
import Course4_third from './screens/course_4/1.3_captcha'


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
          <Stack.Screen name='Course2Intro' component={Course2Intro} />
          <Stack.Screen name='Course2Review1' component={Course2Review1} />
          <Stack.Screen name='Course2Review2' component={Course2Review2} />
          <Stack.Screen name='Course2Review3' component={Course2Review3} />
          <Stack.Screen name='Course2InterpretPictures' component={Course2InterpretPictures} />
          <Stack.Screen name='Course2OceanNumbers' component={Course2OceanNumbers} />
          <Stack.Screen name='Course2PixelPatternsText' component={Course2PixelPatternsText} />
          <Stack.Screen name='Course2PixelPatternsInteractive' component={Course2PixelPatternsInteractive} />
          <Stack.Screen name='Course2FilterFeatures1' component={Course2FilterFeatures1} />
          <Stack.Screen name='Course2FilterFeatures2' component={Course2FilterFeatures2} />
          <Stack.Screen name='Course2FilterFeatures3' component={Course2FilterFeatures3} />
          <Stack.Screen name='Course2FilterFeatures4' component={Course2FilterFeatures4} />
          <Stack.Screen name='Course2FilterFeatures5' component={Course2FilterFeatures5} />
          <Stack.Screen name='Course2Contrast1' component={Course2Contrast1} />
          <Stack.Screen name='Course2Contrast2' component={Course2Contrast2} />
          <Stack.Screen name='Course2Contrast3' component={Course2Contrast3} />
          <Stack.Screen name='Course2ContrastMCQ' component={Course2ContrastMCQ} />
          <Stack.Screen name='Course2DraggableFilter' component={Course2DraggableFilter} />
          <Stack.Screen name='Course2DraggableCompleted' component={Course2DraggableCompleted} />
          <Stack.Screen name='Course2DraggableExplanation' component={Course2DraggableExplanation} />
          <Stack.Screen name='Course2ScanAll1' component={Course2ScanAll1} />
          <Stack.Screen name='Course2ScanAll2Wrong' component={Course2ScanAll2Wrong} />
          <Stack.Screen name='Course2ScanAll2Correct' component={Course2ScanAll2Correct} />
          <Stack.Screen name='Course2ScanAll3' component={Course2ScanAll3} />
          <Stack.Screen name='Course2ScanAll4' component={Course2ScanAll4} />
          <Stack.Screen name='Course2ScanAll5' component={Course2ScanAll5} />
          <Stack.Screen name='Course2SearchingAlgorithmFeatures' component={Course2SearchingAlgorithmFeatures} />
          <Stack.Screen name='Course2GettingHangAlgorithms' component={Course2GettingHangAlgorithms} />
          <Stack.Screen name='Course2SearchingAlgorithmMark' component={Course2SearchingAlgorithmMark} />
          <Stack.Screen name='Course2Congrats' component={Course2Congrats} />
          <Stack.Screen name='Course2AlgorithmReview1' component={Course2AlgorithmReview1} />
          <Stack.Screen name='Course2AlgorithmReview2' component={Course2AlgorithmReview2} />
          <Stack.Screen name='Course2AlgorithmReview3' component={Course2AlgorithmReview3} />
          <Stack.Screen name='Course2AppStoreReview' component={Course2AppStoreReview} />
          <Stack.Screen name='Course2Email' component={Course2Email} />
          <Stack.Screen name='Course2Selfie' component={Course2Selfie} />
          <Stack.Screen name='Course2FaceDetection' component={Course2FaceDetection} />

          {/* course 3 screen stack */}
          <Stack.Screen name='Course3Introduction' component={Course3Introduction} />
          <Stack.Screen name='Course3NearestNeighbor' component={Course3NearestNeighbor} />
          <Stack.Screen name='Course3HouseIntroduction' component={Course3HouseIntroduction} />
          <Stack.Screen name='Course3SelectClosestHouse' component={Course3SelectClosestHouse} />
          <Stack.Screen name='Course3FollowUp' component={Course3FollowUp} />
          <Stack.Screen name='Course3FollowUpCorrect' component={Course3FollowUpCorrect} />
          <Stack.Screen name='Course3FollowUpIncorrect' component={Course3FollowUpIncorrect} />
          <Stack.Screen name='Course3DistanceRole' component={Course3DistanceRole} />
          <Stack.Screen name='Course3Neighborhoods' component={Course3Neighborhoods} />
          <Stack.Screen name='Course3BlackHouseNeighborhood' component={Course3BlackHouseNeighborhood} />
          <Stack.Screen name='Course3GreenHouseNeighborhood' component={Course3GreenHouseNeighborhood} />
          <Stack.Screen name='Course3FollowUpIIA' component={Course3FollowUpIIA} />
          <Stack.Screen name='Course3FollowUpIIB' component={Course3FollowUpIIB} />
          <Stack.Screen name='Course3FollowUpIICorrect' component={Course3FollowUpIICorrect} />
          <Stack.Screen name='Course3FollowUpIIIncorrect' component={Course3FollowUpIIIncorrect} />
          <Stack.Screen name='Course3NearestNeighborsReveal' component={Course3NearestNeighborsReveal} />
          <Stack.Screen name='Course3CommonTraitQuestion' component={Course3CommonTraitQuestion} />
          <Stack.Screen name='Course3CommonTraitAnswer' component={Course3CommonTraitAnswer} />
          <Stack.Screen name='Course3KNNMainIdea' component={Course3KNNMainIdea} />
          <Stack.Screen name='Course3KNNMainIdeaII' component={Course3KNNMainIdeaII} />
          <Stack.Screen name='Course3KNNMainIdeaIII' component={Course3KNNMainIdeaIII} />
          <Stack.Screen name='Course3KNNMainIdeaIV' component={Course3KNNMainIdeaIV} />
          <Stack.Screen name='Course3KNNMainIdeaV' component={Course3KNNMainIdeaV} />
          <Stack.Screen name='Course3KNNMainIdeaVI' component={Course3KNNMainIdeaVI} />
          <Stack.Screen name='Course3Congratulations' component={Course3Congratulations} />
          <Stack.Screen name='Course3AlgorithmReview1' component={Course3AlgorithmReview1} />
          <Stack.Screen name='Course3AlgorithmReview2' component={Course3AlgorithmReview2} />
          <Stack.Screen name='Course3AlgorithmReview3' component={Course3AlgorithmReview3} />
          <Stack.Screen name='Course3AlgorithmReview4' component={Course3AlgorithmReview4} />
          <Stack.Screen name='Course3AppStoreReview' component={Course3AppStoreReview} />
          <Stack.Screen name='Course3Email' component={Course3Email} />
          <Stack.Screen name='Course3Promotion' component={Course3Promotion} />

          <Stack.Screen name='Course4_intro' component={Course4_intro}/>
          <Stack.Screen name='Course4_second' component={Course4_second}/>
          <Stack.Screen name="Course4_third" component={Course4_third}/>

        </Stack.Navigator>
      </NavigationContainer>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  naviBackground: {
    flex: 1
  }
})
