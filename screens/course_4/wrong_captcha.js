import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function CaptchaWrong ({ navigation, context }) {
  const TryAgain = () => {
    navigation.navigate('Course4InteractiveCaptcha', { context })
  }
  return (
    <View style={styles.container}>
      <View style={styles.interactive}>
        <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold', textAlign: 'center', lineHeight: 50, marginTop: width / 5 }}>{'\t'}Uh oh!{'\n'}Let's try that again{'\n'}🙂</Text>
        <View style={styles.group}>
          <Text style={styles.txts} onPress={TryAgain}>Try Again!</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: width - 50,
    paddingTop: 10,
    marginHorizontal: 3,
    borderColor: '#1FBD67',
    borderWidth: 4,
    borderRadius: 10,
    height: '55%',
    paddingLeft: 5,
    marginBottom: width / 10
  },
  txts: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#1FBD67',
    borderRadius: 20,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: width / 2,
    textAlign: 'center',
    marginTop: height / 4.5
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btm: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center'
  },
  img: {
    width: width - 70,
    height: width - 70,
    marginBottom: 25,
    borderColor: '#1FBD67',
    borderWidth: 3,
    borderRadius: 5
  },
  box: {
    backgroundColor: '#1FBD67',
    color: 'white',
    width: '95%',
    borderRadius: 20,
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35,
    marginBottom: 25
  },
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  num: {
    fontSize: 28,
    color: 'white',
    marginLeft: width - 90,
    marginTop: 10,
    marginBottom: -10
  },
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 50
  }

})
