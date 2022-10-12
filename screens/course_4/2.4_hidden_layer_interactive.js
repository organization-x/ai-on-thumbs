
import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import LessonButton from '../../components/LessonButton'

// import { LinearGradient } from 'expo-linear-gradient'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 3 Screen 8: Distance Role')
import colors from '../../config/colors'

import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'

const width = Dimensions.get('window').width

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
      setLowerScreenText("Hmm, the dog is definitely not the right choice! Pick another option.")
    }
  }
  let screenSection = screen_list.section2;
  let screenName = 'Course4page2_4_correct';
  return (
    // <LinearGradient colors={['#8976C2', '#a3acff']} style={styles.container}>
    //   <View style={styles.interactive}>
    //     <Text style={styles.boldText}>Out of the following, which one has 2 or more hidden layers? </Text>
        
    //   </View>
    //   <View style={styles.footerButtons}>
    //     <LessonButton navigation={navigation} nextScreen='Course4page2_3' buttonColor='#8976C2' buttonText='Back' />
    //     <LessonButton navigation={navigation} nextScreen='Course4page2_5' buttonColor={['#32B59D', '#3AC55B']} buttonText="Let's Do It!" />
    //   </View>
    // </LinearGradient>
    <View style={styles.container}>
      <View style={{ flex: 1, marginTop: '15%' }}>
        <Text style={styles.boldText}>Out of the following, which one has 2 or more hidden layers?</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} onPress={() => navigation.navigate('Course4page2_4_correct')} disabled={false}>
            <Image style={styles.image} source={require('../../assets/course_4/deep_nn.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={() => handlePress(0)} disabled={singleLayerDisabled}>
            <Image style={styles.image} onPress={() => handlePress(0)} source={require('../../assets/course_4/single_layer_nn.png')} />
          </TouchableOpacity>
          
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.cell} onPress={() => handlePress(1)} disabled={dogDisabled}>
              <Image style={styles.image} source={require('../../assets/course_4/dog.jpg')} />
          </TouchableOpacity>
        </View>
        
      </View>
      <Text style={styles.text}>{lowerScreenText}</Text>
      <View style={styles.footerButtons}>
        {/* <LessonButton navigation={navigation} nextScreen='Course4page2_4_correct' buttonColor='#8976C2' buttonText='Back' /> */}
        {/* <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />  */}
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
  rowContainer: {
    flex: 1.5,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // width: "80%"
  },
  cell: {
    width: width * 0.2,
    height: width * .25,
    marginRight: 6,
    backgroundColor: '#E6E8FB',
    borderRadius: 5
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
  image: {
    flex: 1,
    aspectRatio: 1,
    margin: 10
  },
  boldText: {
    marginTop: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
    fontWeight: '800'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
