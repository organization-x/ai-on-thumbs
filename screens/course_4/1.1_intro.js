import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions  } from 'react-native'

import LessonButton from '../../components/LessonButton'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'

<<<<<<< HEAD
<<<<<<< HEAD
export default function Course4_intro ({navigation}) {
=======
export default function Course4page1_1 ({navigation}) {
>>>>>>> nr_neural_network
=======
export default function Course4_intro ({ navigation}) {
  const name = 'Course4_intro'
  const section=screen_list.section1
>>>>>>> 477da7fde227259acd044170367584082ac69d06
  return (
    <View style={styles.container}>
      <Text style={styles.num}>1/8</Text>
      <View style={styles.interactive}>
        <Text style={styles.box}>Neural{'\n'}networks</Text>
        <Text style={styles.text}>are computer algorithms that are designed to imitate how the human brain learns.</Text>
      </View>
      <View style={styles.footerButtons}>
<<<<<<< HEAD
<<<<<<< HEAD
        <LessonButton navigation={navigation} nextScreen='Courses' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course4_second' buttonColor={['#32B59D', '#3AC55B']} buttonText="Next" />
=======
        {/* <LessonButton navigation={navigation} nextScreen='Courses' buttonColor='#8976C2' buttonText='Back' /> */}
        <LessonButton navigation={navigation} nextScreen='Course4page1_2' buttonColor={['#32B59D', '#3AC55B']} buttonText="Next" />
>>>>>>> nr_neural_network
=======
        <ProgressBar navigation={navigation} currentScreen={name} section={section}  />
>>>>>>> 477da7fde227259acd044170367584082ac69d06
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#202020",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  num: {
    fontSize: 28,
    color: "white",
    marginLeft: 300,
    marginTop: 10
  },

  box: {
    backgroundColor: "#1FBD67",
    color: 'white',
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 45,
    textAlign: 'center'
  },
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    width: "80%",
    fontWeight: 'bold',
    lineHeight: 40,
    marginTop: 10
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})