import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import LessonButton from '../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'

export default function Welcome ({ navigation }) {
  const [next, setNext] = useState(null)

  useEffect(() => {
    SecureStore.getItemAsync('hasSeenThumbs').then(value => {
      if (value !== 'true') {
        SecureStore.setItemAsync('hasSeenThumbs', 'true')
        setNext('Courses')
      } else {
        setNext('Thumbs')
      }
    }).catch((err) => {
      Sentry.captureException(err)
      setNext('Courses')
    })
  }, [])

  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <Image style={styles.logo} resizeMode='contain' source={require('../assets/stock/ai-on-thumbs-logo.png')} />
      <Text style={styles.text}>If you have thumbs,{'\n'}you can learn AI.</Text>

      <View style={styles.buttonView}>

        <LessonButton
          navigation={navigation}
          nextScreen='Courses'
          buttonColor={['#32B59D', '#3AC55B']}
          buttonText='Get Started'
          style={styles.welcomeBtn}
        />

      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 140,
    marginTop: 70
  },
  text: {
    marginTop: '20%',
    fontSize: 30,
    fontFamily: 'Avenir',
    color: 'white',
    textAlign: 'center'
  },
  buttonView: {
    marginTop: 150
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1
  },
  welcomeBtn: {
    width: 150
  }
})
