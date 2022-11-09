import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, StatusBar } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4LayerInteractive ({ navigation }) {
  const screenSection = ScreenList.section2
  const screenName = 'Course4LayerInteractive'
  const [partsLeft, setPartsLeft] = React.useState(3)
  const [currentLayer, setCurrentLayer] = React.useState(1)
  const [upperScreenText, setUpperScreenText] = React.useState('This is a simple neural network, with only one hidden layer.')
  const [lowerScreenText, setLowerScreenText] = React.useState('Select the input layer!')

  const layerImgs = [require('../../../assets/course_4/input-layer.png'), require('../../../assets/course_4/hidden-layer.png'), require('../../../assets/course_4/output-layer.png')]
  const layers = []

  for (let i = 0; i < 3; i++) {
    const layerImg = layerImgs[i]
    layers.push(
      <TouchableOpacity key={i} onPress={() => handlePress(i + 1)}>
        <Image source={layerImg} style={styles.image} />
        {/* <View style={styles.overlay}/> */}
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
      setUpperScreenText("That's right, the input layer is the very first layer in an NN! It takes in input as numerical values.")
      setLowerScreenText('Select the output layer!')
      setCurrentLayer(3)
      setPartsLeft(2)
    } else if (partsLeft === 2) {
      setUpperScreenText("That's right, the output layer is the very last layer in an NN!")
      setLowerScreenText('Select the hidden layer!')
      setCurrentLayer(2)
      setPartsLeft(1)
    } else if (partsLeft === 1) {
      setUpperScreenText('Great job! You were able to recognize the different types of layers in a neural network!')
      setLowerScreenText('The hidden layer manipulates the numbers it receives from the input layer through calculations and feeds the results to the output layer.')
      setPartsLeft(0)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.number}>3/14</Text>
      </View>
      <Text style={styles.textFont}>{upperScreenText}</Text>
      <View style={styles.interactive}>
        {layers}
      </View>
      <Text style={styles.textFont2}>{lowerScreenText}</Text>
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
    paddingHorizontal: 40,
    paddingVertical: 20,
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
    alignItems: 'center'
  },
  textFont: {
    marginTop: height / 20,
    color: 'white',
    fontSize: height / 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center'
  },

  textFont2: {
    color: 'white',
    // paddingBottom: 40,
    fontSize: height / 40, //changed
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: height /40,  // changed
    marginBottom: height/40 // added

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
    marginTop: '4%'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  number: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  }
})
