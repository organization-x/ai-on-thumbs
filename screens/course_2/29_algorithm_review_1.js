import React from 'react'
import { StyleSheet, View, Text, Dimensions, StatusBar } from 'react-native'
import LessonHeader from '../../components/LessonHeader'
import ProgressBar from '../../components/ProgressBar'
import ScreenList from '../../config/screen_list'
import colors from '../../config/colors'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course2AlgorithmReview1 ({ navigation }) {
  const screenSection = ScreenList.course2
  const screenName = 'Course2AlgorithmReview1'
  return (
    <View style={styles.container}>

      <View style={styles.textSection}>
        <LessonHeader style={styles.header}>Algorithm Review</LessonHeader>

        <View style={styles.number}>
          <Text style={styles.numberFont}>1</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.textFont}>Photos are composed of smaller parts: pixels.</Text>
        </View>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: width / 20,
    paddingVertical: height / 40
  },

  pageNum: {
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

  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    textAlign: 'center',
    marginBottom: 5
  },

  number: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  numberFont: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 14,
    fontWeight: 'bold',
    opacity: 0.5
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: height / 1.90
  },

  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 30
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
