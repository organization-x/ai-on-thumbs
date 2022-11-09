// What if we separate the area into three neighborhoods?

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import colors from '../../config/colors'
import ScreenList from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course3Neighborhoods ({ navigation }) {
  const screenSection = ScreenList.course3
  const screenName = 'Course3Neighborhoods'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.pageNumber}>7/21</Text>
      </View>
      <View style={{ flex: 1, marginTop: '15%' }}>
        <Text style={styles.text}>What if we separate the area into three neighborhoods?</Text>
        <View style={styles.rowContainer}>
          <View style={styles.cell}>
            <Image style={styles.image} source={require('../../assets/course_3/GreenHouse.png')} />
          </View>
          <View style={styles.cell}>
            <Image style={styles.image} source={require('../../assets/course_3/BlackHouse.png')} />
          </View>
          <View style={styles.cell}>
            <Image style={styles.image} source={require('../../assets/course_3/A.png')} />
          </View>
          <View style={styles.cell} />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.cell}>
            <Image style={styles.image} source={require('../../assets/course_3/RedHouse.png')} />
          </View>
          <View style={styles.cell}>
            <Image style={styles.image} source={require('../../assets/course_3/B.png')} />
          </View>
          <View style={styles.cell} />
          <View style={styles.cell} />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell}>
            <Image style={styles.image} source={require('../../assets/course_3/C.png')} />
          </View>
          <View style={styles.cell}>
            <Image style={styles.image} source={require('../../assets/course_3/BlueHouse.png')} />
          </View>
        </View>
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
    fontSize: height / 30,
    fontWeight: '500',
    opacity: 0.8,
    marginBottom: '5%'
  },
  cell: {
    width: width * 0.2,
    height: width * 0.2,
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
    justifyContent: 'center'
  }
})
