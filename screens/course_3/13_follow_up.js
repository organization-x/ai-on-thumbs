// User correctly selects Neighborhood A.

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course3FollowUpIIB ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.pageNumber}>10/21</Text>
      </View>
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          That's right! The black and green houses belong to the same neighborhood.
        </Text>
        <Text style={styles.secondText}>
          Again, if you guessed, what do you think makes them neighbors?
        </Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUpIICorrect'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText='Distance'
        />
        <LessonButton
          navigation={navigation}
          nextScreen='Course3FollowUpIIIncorrect'
          buttonColor='#8976C2'
          buttonText='Friendship'
        />
      </View>
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
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  top: {
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    marginVertical: 10,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    fontWeight: 'bold'
  },
  secondText: {
    marginVertical: 10,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25
  }
})
