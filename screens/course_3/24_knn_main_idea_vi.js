// Members of each group are close to other members of the group.

import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import colors from '../../config/colors'
import ScreenList from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function Course3KNNMainIdeaVI ({ navigation }) {
  const screenSection = ScreenList.course3
  const screenName = 'Course3KNNMainIdeaVI'
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeButton navigation={navigation} style={{ marginTop: height / 120 }} />
        <Text style={styles.pageNumber}>20/21</Text>
      </View>
      <View style={styles.interactive}>
        <Text style={styles.topText}>Members of each group are close to other members of the group.</Text>
        <Text style={styles.bottomText}> It's all based on distance, see what I mean?</Text>
      </View>
      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: width / 20,
    paddingVertical: height / 40
  },
  pageNumber: {
    color: 'white',
    fontSize: height / 25,
    textAlign: 'right'
  },
  top: {
    marginTop: '4%',
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
  topText: {
    marginTop: '40%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 20,
    fontWeight: '600'
  },
  bottomText: {
    marginTop: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    fontWeight: 'bold'
  },
  boldText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 40,
    fontWeight: '800'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
