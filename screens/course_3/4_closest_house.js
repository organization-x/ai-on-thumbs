// Select the house that is closest to the green house.

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'
import * as Analytics from 'expo-firebase-analytics'
Analytics.setCurrentScreen('Course 3 Screen 4: Nearest Neighbor')

const width = Dimensions.get('window').width

export default function Course3SelectClosestHouse ({ navigation }) {
  const [redHouseDisabled, setDisableRedHouse] = React.useState(false)
  const [blueHouseDisabled, setDisableBlueHouse] = React.useState(false)
  const [lowerScreenText, setLowerScreenText] = React.useState('Select the house that is closest to the black house.')

  const handlePress = (num) => {
    if (num === 0) {
      setDisableRedHouse(true)
      setLowerScreenText("It's not the red house! Pick another house.")
    } else if (num === 1) {
      setDisableBlueHouse(true)
      setLowerScreenText("It's not the blue house! Pick another house.")
    }
  }

  return (
    <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
      <View style={{ flex: 1, marginTop: '15%' }}>
        <Text style={styles.text}>That's more like it.</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} onPress={() => navigation.navigate('Course3FollowUp')} disabled={false}>
            <Image style={styles.image} source={require('../../assets/course_3/GreenHouse.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled>
            <Image style={styles.image} source={require('../../assets/course_3/BlackHouse.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} onPress={() => handlePress(0)} disabled={redHouseDisabled}>
            <Image style={styles.image} onPress={() => handlePress(0)} source={require('../../assets/course_3/RedHouse.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} disabled />
          <TouchableOpacity style={styles.cell} onPress={() => handlePress(1)} disabled={blueHouseDisabled}>
            <Image style={styles.image} source={require('../../assets/course_3/BlueHouse.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.text}>{lowerScreenText}</Text>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course3HouseIntroduction' buttonColor='#8976C2' buttonText='Back' />
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
    fontSize: width / 15,
    fontWeight: '500',
    opacity: 0.8,
    marginBottom: '10%'
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
