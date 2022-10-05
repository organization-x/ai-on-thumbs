import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Section 3 Screen 1: Intro')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4S3Recommendation ({navigation}) {
  let choice = "";
  let check1color = "#474747";
  let check2color = "#474747";
  let check3color = "#474747";
  // figure out how to make the check boxes change color when clicked

    return (
    <View style={styles.container}>
      <Text style={styles.number}>2/4</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Amazon automatically recommends products that a user would like based on their past purchases
        </Text>
      </View>
      <View style={styles.textBox}>
        <View style={[styles.textContainer, {width: width*0.75}]}>
          <Text style={[styles.text, {fontSize: 30}]}>
            If a user named John loves to play soccer, which product would he be the most likely to buy?
          </Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          onPress={() => {
            choice = "soccer";
            check1color = "#00FF00";
            check2color = "#474747";
            check3color = "#474747";
          }}
        >
          <View style={styles.optionBox}>
            <View style={[styles.optionCheck, {backgroundColor: check1color}]}/>
            <Image style={styles.image} source={require('../../assets/course_4/soccer.png')}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            choice = "calc";
            check1color = "#474747";
            check2color = "#00FF00";
            check3color = "#474747";
          }}
        >
          <View style={styles.optionBox}>
            <View style={[styles.optionCheck, {backgroundColor: check2color}]}/>
            <Image style={styles.image} source={require('../../assets/course_4/calc.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            choice = "controller";
            check1color = "#474747";
            check2color = "#474747";
            check3color = "#00FF00";
          }}
        >
          <View style={styles.optionBox}>
            <View style={[styles.optionCheck, {backgroundColor: check3color}]}/>
            <Image style={styles.image} source={require('../../assets/course_4/controller.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => 
          {if(choice!=""){
            navigation.navigate(choice === "soccer" ? 'Course4S3Correct' : 'Course4S3Incorrect')
          }}
          }
        underlayColor='#fff'
        activeOpacity={0.3}
      >
        <View style={styles.submitBox}>
          <Text style={styles.submitText}>
            Submit
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: "#202020",
    },
    number: {
      fontFamily: "AppleSDGothicNeo-Light",
      color: 'white',
      fontSize: 35,
      textAlign: 'right',
      paddingVertical: 30
    },
    text: {
      fontFamily: "AppleSDGothicNeo-Light",
      color: 'white',
      fontSize: 35,
      textAlign: 'center'
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.8,
      alignSelf: 'center',
    },
    title: {
      fontFamily: "AppleSDGothicNeo-Light",
      textAlign: 'center',
      color: 'white',
      fontSize: 50,
      fontWeight: "bold"
    },
    titleBox: {
      backgroundColor: "#1fbd67",
      height: 150,
      width: "95%",
      borderRadius: 15,
      marginTop: 150,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    textBox: {
      backgroundColor: "#0f89ce",
      height: height*0.25,
      width: width*0.85,
      borderRadius: 15,
      marginTop: 35,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    image: {
      resizeMode: 'contain',
      flex: 1,
      aspectRatio: 1,
      alignSelf: 'center',
      marginBottom: 10,
    },
    optionBox: {
      marginTop: 20,
      backgroundColor: "#d1d1d1",
      height: height*0.13,
      width: height*0.13,
      borderRadius: 15,
    },
    button: {
      flex: 1,
    },
    optionCheck: {
      marginTop: 5,
      marginRight: 5,
      height: 20,
      width: 20,
      borderRadius: 10,
      alignSelf: 'flex-end',
    },
    optionsContainer: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1.5
    },
    submitBox: {
      backgroundColor: "#1fbd67",
      height: height/20,
      width: width*0.85,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 50
    },
    submitText: {
      fontFamily: "AppleSDGothicNeo-Light",
      textAlign: 'center',
      color: 'white',
      fontSize: 30,
      fontWeight: "bold"
    },
    footerButtons: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
})
