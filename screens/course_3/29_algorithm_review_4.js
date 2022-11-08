// Review 4

import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import LessonHeader from '../../components/LessonHeader'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'


const height = Dimensions.get('window').height

export default function Course3AlgorithmReview4 ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.pageNum} />
      </View>
      <View style={styles.textSection}>
        <LessonHeader style={styles.header}>Algorithm Review</LessonHeader>

        <View style={styles.number}>
          <Text style={styles.numberFont}>1</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.textFont}>KNN is a machine learning algorithm used for classification.</Text>
        </View>

        <View styles={styles.number}>
          <Text style={styles.numberFont}>2</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.textFont}>Distance is how we measure how far apart houses are.</Text>
        </View>

        <View style={styles.number}>
          <Text style={styles.numberFont}>3</Text>
        </View>

        <View style={styles.information2}>
          <Text style={styles.textFont}>Our nearest neighbors are the ones closest to us.</Text>
        </View>

        <View style={styles.number}>
          <Text style={styles.numberFont}>4</Text>
        </View>

        <View style={styles.information3}>
          <Text style={styles.textFont}>We base our characteristics on the characteristics of our nearest neighbors.</Text>
        </View>
      </View>

      <View style={[styles.footerButtons, { marginBottom: height / 30 }]}>
        <LessonButton navigation={navigation} nextScreen='Course3AppStoreReview' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
      </View>

      <StatusBar style='auto' />
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
  pageNum: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
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
    fontSize: height / 18,
    fontWeight: 'bold',
    opacity: 0.5
  },

  information: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 5
  },

  information2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10
  },
  information3: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: height / 18
  },
  textFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: height / 35
  },

  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }

})
