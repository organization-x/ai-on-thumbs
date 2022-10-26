// Select the neighborhood the black house belongs to.

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'

import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 10: Black House Neighborhood')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Course3BlackHouseNeighborhood ({ navigation }) {
  let screenSection = screen_list.course3;
  let screenName = 'Course3BlackHouseNeighborhood';

  const [neighborhoodBDisabled, setDisableNeighborhoodB] = React.useState(false)
  const [neighborhoodCDisabled, setDisableNeighborhoodC] = React.useState(false)
  const [lowerScreenText, setLowerScreenText] = React.useState('Which neighborhood do you think the black house belongs to?')

  const handlePress = (num) => {
    if (num === 0) {
      setDisableNeighborhoodB(true)
      setLowerScreenText("It's not Neighborhood B! Pick another neighborhood to try again.")
    } else if (num === 1) {
      setDisableNeighborhoodC(true)
      setLowerScreenText("It's not Neighborhood C! Pick another neighborhood to try again.")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.pagenumber}>8/21</Text>
      </View>
      <View style={{ flex: 1, marginTop: '15%' }}>
        <Text style={styles.text}>{lowerScreenText}</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} disabled>
            <Image style={styles.image} source={require('../../assets/course_3/GreenHouse.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled>
            <Image style={styles.image} source={require('../../assets/course_3/BlackHouse.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={() => navigation.navigate('Course3GreenHouseNeighborhood')} disabled={false}>
            <Image style={styles.image} source={require('../../assets/course_3/A.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} disabled>
            <Image style={styles.image} source={require('../../assets/course_3/RedHouse.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled={neighborhoodBDisabled} onPress={() => handlePress(0)}>
            <Image style={styles.image} source={require('../../assets/course_3/B.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled={neighborhoodCDisabled} onPress={() => handlePress(1)}>
            <Image style={styles.image} source={require('../../assets/course_3/C.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled>
            <Image style={styles.image} source={require('../../assets/course_3/BlueHouse.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course3Neighborhoods' buttonColor='#8976C2' buttonText='Back' />
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
  pagenumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
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
    fontSize: 27,
    fontWeight: '500',
    opacity: 0.8,
    marginBottom: '5%'
  },
  smallText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
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
