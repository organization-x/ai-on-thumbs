import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { TapGestureHandler, } from 'react-native-gesture-handler'


<<<<<<< HEAD
export default function Course4_third ({navigation}) {
=======
export default function Course4page1_3 ({navigation}) {
>>>>>>> nr_neural_network
  return (
    <View style={styles.container}>
      <Text style={styles.num}>3/8</Text>
      <View style={styles.interactive}>
        <Text style={styles.box}>Select all images with a{'\n'}<Text style={styles.bold}> Bus</Text>{'\n'}Click verify when done</Text>
<<<<<<< HEAD
        <Image style={styles.im} source={require('./captc.png')}/>
        <Text style={styles.verify}>Verify!</Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course4_second' buttonColor='#8976C2' buttonText='Back' />

        <LessonButton navigation={navigation} nextScreen='Course1FaceFinder' buttonColor={['#32B59D', '#3AC55B']} buttonText="Next" />
      </View>
=======
        {/* <Image style={styles.im} source={require('./assets/images.jfif')}/> */}
        <Text style={styles.verify}>Verify!</Text>
      </View>
      <View style={styles.footerButtons}>
            <LessonButton navigation={navigation} nextScreen='Course4page1_2' buttonColor='#8976C2' buttonText='Back' />
            <LessonButton navigation={navigation} nextScreen='Course4page1_4' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
        </View>
>>>>>>> nr_neural_network
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
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

