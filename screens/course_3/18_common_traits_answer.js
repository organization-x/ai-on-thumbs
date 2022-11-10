// You share your neighborhood in common with your neighbors.

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import colors from '../../config/colors'
import ScreenList from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course3CommonTraitAnswer ({ navigation }) {
  const screenSection = ScreenList.course3
  const screenName = 'Course3CommonTraitAnswer'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.pageNumber}>14/21</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>Your neighborhood of course!</Text>
        <Text style={styles.boldText}>That's the group you belong to.</Text>
        <Image style={styles.image} source={require('../../assets/course_3/NeighborsGreeting.png')} />
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
    paddingHorizontal: width / 20,
    paddingVertical: height / 40
  },
  top: {
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 30
  },
  text: {
    marginTop: '30%',
    marginBottom: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  boldText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    marginBottom: '5%',
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width: width / 0.9
  }
})
