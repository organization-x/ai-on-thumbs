// Distance is how we measure how far apart houses are.

import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image} from 'react-native'
import colors from '../../../config/colors'
import screen_list from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'
import { LinearGradient } from 'expo-linear-gradient'


// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 8: Distance Role')
// import LessonButton from '../../components/LessonButton'
const height = Dimensions.get('window').height

export default function Course4page2_2 ({ navigation }) {
  let screenSection = screen_list.section2;
  let screenName = 'Course4page2_2';
  return (

    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}>2/14</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.secondText}>As displayed in the image,</Text>    
      </View>
      
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../../assets/course_4/nn_layers.gif')}></Image>
        </View>
      
      <View style={styles.container}>     
        <Text style={styles.thirdText}>NNs have 3 general types of layers: <Text style={styles.underlinedText}>Input, Hidden, and Output Layers</Text> </Text>
      </View>
      
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course4page2_1' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course4page2_3' buttonColor={['#32B59D', '#3AC55B']} buttonText="Let's Do It!" /> */}
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.background
  },
  number: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 10
},
  imageContainer:{
    flexGrow: 1,
    justifyContent: 'center',
    // marginLeft: 55,
    width: '100%',
    height: '20%'
  },
  secondText: {
    padding: 20,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 24
  },
  thirdText: {
    padding: 15,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    marginTop: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  boldText: {
    marginTop: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
    fontWeight: '800'
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    margin: 10
  },
  underlinedText: {
    textDecorationLine: 'underline', 
    // padding: 15,
    // marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },

})
