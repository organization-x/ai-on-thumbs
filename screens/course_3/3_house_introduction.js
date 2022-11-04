// Introduction to the black house.

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 3 Screen 3: House Introduction')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course3HouseIntroduction ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{marginTop:height/120}}/>
        <Text style={styles.pageNumber}>3/21</Text>
      </View>
      <View style={{ flex: 1, marginTop: '15%' }}>
        <Text style={styles.text}>Here is the black house.</Text>
        <View style={styles.rowContainer}>
          <View style={styles.cell} />
          <View style={styles.cell}>
            <Image style={styles.image} source={require('../../assets/course_3/BlackHouse.png')} />
          </View>
          <View style={styles.cell} />
          <View style={styles.cell} />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
        </View>
      </View>
      <Text style={styles.text}>It's a little lonely here. Let's add a few more houses.</Text>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course3NearestNeighbor' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course3SelectClosestHouse' buttonColor={['#32B59D', '#3AC55B']} buttonText='Add Houses' />
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
    fontSize: height/25,
    textAlign: 'right'
  },
  top: {
    marginTop:'4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  rowContainer: {
    flex: 1.5,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: height/34,
    fontWeight: '500',
    opacity: 0.8,
    marginBottom: '10%'
  },
  cell: {
    width: width * 0.19,
    height: width * 0.19,
    marginRight: 5,
    backgroundColor: '#E6E8FB',
    borderRadius: 5
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    margin: 10
  },
  boldText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    fontWeight: '400',
    marginBottom: '10%'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
