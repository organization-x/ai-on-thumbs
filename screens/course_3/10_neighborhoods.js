// Select the neighborhood the black house belongs to.

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, TurboModuleRegistry } from 'react-native'
import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 10: Black House Neighborhood')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course3BlackHouseNeighborhood ({ navigation }) {

  const [neighborhoodBDisabled, setDisableNeighborhoodB] = React.useState(false)
  const [neighborhoodCDisabled, setDisableNeighborhoodC] = React.useState(false)
  const [lowerScreenText, setLowerScreenText] = React.useState('Which neighborhood do you think the black house belongs to?')

  const handlePress = (num) => {
    if (num === 0){
      setDisableNeighborhoodB(true)
      setLowerScreenText("It's not Neighborhood B! Pick another neighborhood to try again.")
    } else if (num == 1){
      setDisableNeighborhoodC(true)
      setLowerScreenText("It's not Neighborhood C! Pick another neighborhood to try again.")
    }
  }

  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <View style={{ flex: 1, marginTop: '15%'}}>
        <Text style={styles.text}>{lowerScreenText}</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} disabled = {true}>
          <Image style={styles.image} source={require('../../assets/course_3/GreenHouse.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled = {true}>
            <Image style={styles.image} source={require('../../assets/course_3/BlackHouse.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={()=>navigation.navigate("Course3GreenHouseNeighborhood")} disabled={false}>
            <Image style={styles.image} source={require('../../assets/course_3/A.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled = {true}>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} disabled={true}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled={true}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled={true}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled={true}>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} disabled={true}>
          <Image style={styles.image} source={require('../../assets/course_3/RedHouse.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled={neighborhoodBDisabled} onPress = {() => handlePress(0)}>
          <Image style={styles.image} source={require('../../assets/course_3/B.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled={true}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled={true}>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} disabled={true}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled={true}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled={neighborhoodCDisabled} onPress = {() => handlePress(1)}>
          <Image style={styles.image} source={require('../../assets/course_3/C.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled={true}>
          <Image style={styles.image} source={require('../../assets/course_3/BlueHouse.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footerButtons}>
          <LessonButton navigation={navigation} nextScreen='Course3Neighborhoods' buttonColor='#8976C2' buttonText='Back' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
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
