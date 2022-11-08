import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import HomeButton from '../../../components/HomeButton'
import colors from '../../../config/colors'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4RWInteractive ({ navigation }) {
  const [choice, setChoice] = React.useState('')
  const [checkColor1, setCheckColor1] = React.useState('#474747')
  const [checkColor2, setCheckColor2] = React.useState('#474747')
  const [checkColor3, setCheckColor3] = React.useState('#474747')
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.number}>2/4</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Amazon automatically recommends products that a user would like based
          on their past purchases
        </Text>
      </View>
      <View style={styles.textBox}>
        <View style={[styles.textContainer, { width: width * 0.75 }]}>
          <Text style={[styles.text, { fontSize: 30 }]}>
            If a user named John loves to play soccer, which product would he be
            the most likely to buy?
          </Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          onPress={() => {
            setChoice('soccer')
            setCheckColor1('#1fbd67')
            setCheckColor2('#474747')
            setCheckColor3('#474747')
          }}
        >
          <View style={styles.optionBox}>
            <View
              style={[styles.optionCheck, { backgroundColor: checkColor1 }]}
            />
            <Image
              style={styles.image}
              source={require('../../../assets/course_4/soccer.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setChoice('calc')
            setCheckColor1('#474747')
            setCheckColor2('#1fbd67')
            setCheckColor3('#474747')
          }}
        >
          <View style={styles.optionBox}>
            <View
              style={[styles.optionCheck, { backgroundColor: checkColor2 }]}
            />
            <Image
              style={styles.image}
              source={require('../../../assets/course_4/calc.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setChoice('controller')
            setCheckColor1('#474747')
            setCheckColor2('#474747')
            setCheckColor3('#1fbd67')
          }}
        >
          <View style={styles.optionBox}>
            <View
              style={[styles.optionCheck, { backgroundColor: checkColor3 }]}
            />
            <Image
              style={styles.image}
              source={require('../../../assets/course_4/controller.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (choice !== '') {
            navigation.navigate(
              choice === 'soccer' ? 'Course4RWInteractiveCorrect' : 'Course4RWInteractiveIncorrect'
            )
          }
        }}
        underlayColor='#fff'
        activeOpacity={0.3}
      >
        <View style={styles.submitBox}>
          <Text style={styles.submitText}>Submit</Text>
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
    backgroundColor: colors.background
  },
  number: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    alignSelf: 'center'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  titleBox: {
    flex: 1,
    backgroundColor: colors.secondary,
    height: 150,
    width: '95%',
    borderRadius: 15,
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  textBox: {
    flex: 1,
    backgroundColor: '#0f89ce',
    height: height * 0.25,
    width: width * 0.85,
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
    marginBottom: 10
  },
  optionBox: {
    marginTop: 20,
    backgroundColor: '#d1d1d1',
    height: height * 0.13,
    width: height * 0.13,
    borderRadius: 15
  },
  optionCheck: {
    marginTop: 5,
    marginRight: 5,
    height: 20,
    width: 20,
    borderRadius: 10,
    alignSelf: 'flex-end'
  },
  optionsContainer: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  submitBox: {
    backgroundColor: '#1fbd67',
    height: height / 20,
    width: width * 0.85,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 50
  },
  submitText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
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
