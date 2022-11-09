import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import colors from '../../../config/colors'
import ScreenList from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course4BPExplanation1 ({ navigation }) {
  const screenSection = ScreenList.section2
  const screenName = 'Course4BPExplanation1'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.number}>12/14</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.textund}>In short, backpropagation allows NNs to make more accurate predictions. </Text>
        <Text style={styles.text}>This process compares the predictions the NN makes to the expected outputs, and from there adjusts the values of the nodes in the hidden layers to generate more accurate predictions.</Text>
      </View>
      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: width / 20,
    paddingVertical: height / 40
  },
  number: {
    fontSize: height / 25,
    color: 'white',
    textAlign: 'right'
  },
  box: {
    backgroundColor: colors.primary,
    color: 'white',
    width: '100%',
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
    marginTop: 50
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: height / 40,
    width: '100%',
    fontWeight: '500',
    lineHeight: 35,
    marginBottom: 25
  },
  textund: {
    textAlign: 'center',
    color: 'white',
    fontSize: height / 35,
    width: '100%',
    fontWeight: 'bold',
    marginTop: 25,
    lineHeight: 35,
    textDecorationLine: 'underline'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '4%'
  },
  footerButtons: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
