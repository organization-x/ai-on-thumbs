// Summer Camp Promotion

import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, Linking } from 'react-native'
import LessonButton from '../../components/LessonButton'
import colors from '../../config/colors'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Promotion ({ navigation }) {
  async function handlePress () {
    Linking.openURL('https://www.ai-camp.org/virtual-summer-camp')
  }

  return (
    <View style={styles.container}>
      <View style={styles.interactive}>
        <Image style={styles.logo} resizeMode='contain' source={require('../../assets/stock/ai-on-thumbs-logo.png')} />
        <Text style={styles.text}>If you had fun here, you'll certainly want to check out our after-school and summer programs at AI Camp.</Text>
        <Text style={styles.text}>At AI Camp, you will make lifelong friends and connections and we will teach you how to build amazing AI products!</Text>
        <View style={styles.rectangle} onPress={handlePress}>
          <Text style={styles.promoText} onPress={handlePress}>Click here to see what else AI Camp has to offer!</Text>
        </View>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course3Email' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Courses' buttonColor={['#32B59D', '#3AC55B']} buttonText='Back to Home' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  number: {
    color: 'white',
    fontSize: height / 28,
    textAlign: 'right'
  },
  rectangle: {
    backgroundColor: colors.primary,
    marginTop: height / 20,
    borderRadius: 20,
    width: width / 1.5,
    height: height / 9,
    alignItems: 'center',
    marginBottom: height / 2,
    justifyContent: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  logo: {
    height: height / 8,
    marginTop: height / 20
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 15,
    textAlign: 'center',
    color: 'white',
    fontSize: height / 35,
    fontWeight: 'bold'
  },
  promoText: {
    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: height / 1000,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: height / 35,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginTop: height / 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  emailView: {
    overflow: 'hidden'
  }
})
