import React from 'react'
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course2DraggableExplanation ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2DraggableExplanation'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNumber}>20/28</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.topText}>How does the computer use contrast to help?</Text>
        <View style={styles.image}>
          <Image
            style={(width <= 400) ? { width: width / 1.63, height: width / 1.63, borderRadius: 7 } : { width: width / 2, height: width / 2, borderRadius: 7 }}
            source={require('../../assets/course_2/markcuban_hybrid_with_filter.png')}
          />
        </View>
        <Text style={styles.secondText}>The computer adds the pixels under bright areas of the filter and subtracts the pixels under dark areas of the filter.</Text>
        <Text style={styles.secondText}>Higher contrast = a better match! </Text>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  topText: {
    marginTop: height / 20,
    padding: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold',
    marginBottom: height / 25
  },
  secondText: {
    marginTop: '2%',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 34
  },
  image: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
