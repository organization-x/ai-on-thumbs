// Let’s say you find something that looks like a pair of eyes on an image, where would you search for a nose?

import React from 'react'
<<<<<<< HEAD:screens/course_4/2.3_numerical_values.js
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'
import colors from '../../config/colors'
import HomeButton from '../../components/HomeButton'
=======
import { StyleSheet, View, Text, Dimensions} from 'react-native'

import colors from '../../../config/colors'
import screen_list from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'
>>>>>>> nr_neural_network:screens/course_4/section2/2.3_numerical_values.js
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 2 Screen 25: Searching Algorithm Features')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4page2_3 ({ navigation }) {
  let screenSection = screen_list.section2;
  let screenName = 'Course4page2_3';
  const [partsLeft, setPartsLeft] = React.useState(3);
  const [currentLayer, setCurrentLayer] = React.useState(1);
  const [upperScreenText, setUpperScreenText] = React.useState("This is a vanilla neural network which is the simplest type of neural network. It only has 1 hidden layer.");
  const [lowerScreenText, setLowerScreenText] = React.useState('Select the input layer!');

  const layerImgs = [require('../../assets/course_4/input-layer.png'), require('../../assets/course_4/hidden-layer.png'), require('../../assets/course_4/output-layer.png')];
  const layers = [];

  for (let i=0; i<3; i++){
    let layerImg = layerImgs[i];
    layers.push(
      <TouchableOpacity key={i} onPress={() => handlePress(i + 1)} >
        <Image source={layerImg} style={styles.image} />
        {/*<View style={styles.overlay}/>*/}
      </TouchableOpacity>
    )
  }
  const handlePress = (layer) => {
    switch (layer) {
      case 1:
        if (currentLayer === 1) {
          setText()
          break
        }

        setUpperScreenText('Not quite! Try another layer!')
        break

      case 3:
        if (currentLayer === 3) {
          setText()
          break
        }

        setUpperScreenText('Not quite! Try another layer!')
        break

      case 2:
        if (currentLayer === 2) {
          setText()
          break
        }

        setUpperScreenText('Not quite! Try another layer!')
        break

      default:
        setUpperScreenText('Not quite! Try another layer!')
        break
    }
  }

  const setText = () => {
    if (partsLeft === 3) {
      setUpperScreenText("That's right, the input layer is the very first layer in an NN! It takes in input as numerical values.");
      setLowerScreenText('Select the output layer!');
      setCurrentLayer(3);
      setPartsLeft(2);
    } else if (partsLeft === 2) {
      setUpperScreenText("That's right, the output layer is the very last layer in an NN!");
      setLowerScreenText('Select the hidden layer!');
      setCurrentLayer(2);
      setPartsLeft(1);
    } else if (partsLeft === 1) {
      setUpperScreenText("Great job! Now you know all the different types of layers in a neural network!");
      setLowerScreenText('The hidden layer manipulates the numbers it receives from the input layer through calculations and feeds the results to the output layer.');
      setPartsLeft(0);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}>3/13</Text>
      </View>
      <View style={styles.interactive}>
        {layers}
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>

      <StatusBar style='auto' />
    </View>
  )
}
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: '50%',
    backgroundColor: colors.primary
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.background
  },
  lessonContent: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: height / 22
  },
  image: {
    width: width / 4.75,
    height: height / 2.65
  },
  information: {
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  textFont: {
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center'
  },
  textFont2: {
    color: 'white',
    fontSize: height / 40,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: height / 40
  },
  interactive: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width / 20
  },
  box: {
    margin: 0.5,
    width: '24.3%',
    height: '24%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '2%'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  number: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginTop: 5
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  }
})
