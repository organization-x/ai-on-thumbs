
import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../../config/colors'
import HomeButton from '../../../components/HomeButton'
// import * as Analytics from 'expo-firebase-// analytics'Analytics.setCurrentScreen('Course 4 Screen 5 Section 2: NNs Hidden Layers Interactive')

const height = Dimensions.get('window').height

export default function Course4SelectDNN ({ navigation }) {
  const [singleLayerDisabled, setsingleLayerDisabled] = React.useState(false)
  const [dogDisabled, setdogDisabled] = React.useState(false)
  const [lowerScreenText, setLowerScreenText] = React.useState('Select the NN with 2 or more hidden layers')

  const handlePress = (num) => {
    if (num === 0) {
      setsingleLayerDisabled(true)
      setLowerScreenText("It's not that neural network! Pick another option.")
    } else if (num === 1) {
      setdogDisabled(true)
      setLowerScreenText('Hmm, the dog is definitely not the right choice! Pick another option.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} />
        <Text style={styles.number}>4/14</Text>
      </View>
      <View style={{ flex: 1, marginTop: '15%' }}>
        <Text style={styles.boldText}>Out of the following, which one has 2 or more hidden layers?</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} onPress={() => navigation.navigate('Course4SelectDNNCorrect')} disabled={false}>
            <Image style={styles.image} source={require('../../../assets/course_4/deep_nn.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={() => handlePress(0)} disabled={singleLayerDisabled}>
            <Image style={styles.image} onPress={() => handlePress(0)} source={require('../../../assets/course_4/single_layer_nn.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} onPress={() => handlePress(1)} disabled={dogDisabled}>
            <Image style={styles.image} source={require('../../../assets/course_4/dog.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{lowerScreenText}</Text>
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
  rowContainer: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '10%'
    // width: "80%"
  },
  cell: {
    width: height * 0.18,
    height: height * 0.18,
    marginRight: 6,
    backgroundColor: '#d1d1d1',
    borderRadius: 15
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    marginBottom: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 25
  },
  textContainer: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  boldText: {
    marginBottom: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: '800'
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
  }
})
