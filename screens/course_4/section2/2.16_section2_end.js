import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import colors from '../../../config/colors'
import screen_list from '../../../config/screen_list'
import ProgressBar from '../../../components/ProgressBar'
import HomeButton from '../../../components/HomeButton'
import SectionButton from '../../../components/SectionButton'

export default function Course4page2_16 ({navigation}) {
  let screenSection = screen_list.section2;
  let screenName = 'Course4page2_16';
  let nextSection = screen_list.section3;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation}/>
        <Text style={styles.number}>13/13</Text>
      </View>
      <View style={styles.interactive}>

        <Text style={styles.text}>Let's now look at a real-world application of Neural Networks!</Text>
      </View>
      <View style={styles.sectionButton}>
            <SectionButton navigation={navigation} nextSection={true} goSection={nextSection} />
      </View>
      {/* <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  number: {
    fontSize: 28,
    color: "white",
    textAlign: 'right'
  },
  sectionButton: {
    marginBottom: 160,
    flexDirection: 'row',
    justifyContent: 'center',
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
    justifyContent: 'center',
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
