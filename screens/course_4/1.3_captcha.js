import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'
import { TapGestureHandler, } from 'react-native-gesture-handler'

import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'

import colors from '../../config/colors'


export default function Course4page1_3 ({navigation}) {
<<<<<<< HEAD
  let screenSection = screen_list.section1;
  let screenName = 'Course4page1_3';
=======
  
  let screenSection = screen_list.section1;
  let screenName = 'Course4page1_3';

>>>>>>> nr_neural_network
  return (
    <View style={styles.container}>
      <Text style={styles.num}>3/8</Text>
      <View style={styles.interactive}>
        <Text style={styles.box}>Select all images with a{'\n'}<Text style={styles.bold}> Bus</Text>{'\n'}Click verify when done</Text>
        {/* <Image style={styles.im} source={require('./assets/images.jfif')}/> */}
        <Text style={styles.verify}>Verify!</Text>
      </View>
      <View style={styles.footerButtons}>
<<<<<<< HEAD
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
=======
            {/* <LessonButton navigation={navigation} nextScreen='Course4page1_2' buttonColor='#8976C2' buttonText='Back' />
            <LessonButton navigation={navigation} nextScreen='Course4page1_4' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' /> */}
            <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
        </View>
>>>>>>> nr_neural_network
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  im:{
    borderColor: "#1FBD67",
    borderWidth: 4,
    borderRadius: 10
  },
  num: {
    fontSize: 28,
    color: "white",
    marginLeft: 300,
    marginTop: 10,
    marginBottom: -10
  },
  verify:{
    backgroundColor: "#1FBD67",
    color: 'white',
    width: "100%",
    borderRadius: 20,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    width: "75%",
    marginBottom: 50
  },
  box: {
    backgroundColor: "#1FBD67",
    color: 'white',
    width: "100%",
    borderRadius: 20,
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",

  },
  bold: {
    fontSize: 40,
    textAlign: 'left'
  },
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: "100%",
    fontWeight: 'bold',
    lineHeight: 35,
    marginBottom: 25
  },
  textund: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: "100%",
    fontWeight: 'bold',
    marginTop: 25,
    lineHeight: 35,
    textDecorationLine: 'underline'
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
<<<<<<< HEAD
  }
=======
},
>>>>>>> nr_neural_network
})

