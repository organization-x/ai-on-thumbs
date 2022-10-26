import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import colors from '../../../config/colors'
import screen_list from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'


export default function Course4page2_15 ({navigation}) {
  let screenSection = screen_list.section2;
  let screenName = 'Course4page2_15';
  let nextSection = screen_list.section3;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}>13/14</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.text}>You followed a similar process in the matching game, and were able to improve your accuracy in matching items and numbers after seeing the correct pairings!</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  number: {
    fontSize: 28,
    color: "white",
    textAlign: 'right'
  },
  box: {
    backgroundColor: colors.primary,
    color: 'white',
    width: "100%",
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
    justifyContent: 'flex-start',
    marginTop: 50
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: "100%",
    fontWeight: 'bold',
    lineHeight: 35,
    marginBottom: 25
  },
  textund: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: "100%",
    fontWeight: 'bold',
    marginTop: 25,
    lineHeight: 35,
    textDecorationLine: 'underline'
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

