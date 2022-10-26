// Brain is composed of roughly 86 billion neurons, which communicate through electrical signals.

import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Screen 4: Captcha Explanation Screen')

const height = Dimensions.get('window').height

export default function Course4page1_6 ({ navigation, context, enabled = true }) {
    let section = screen_list.section1;
    let screenName = 'Course4Info2';
    return (
    <View style={styles.container}>
        <View style={styles.top}>
            <HomeButton navigation={navigation}/>
            <Text style={styles.number}>6/8</Text>
        </View>
        <View style={styles.interactive}>
            <Text style={styles.text}>The brain is composed of roughly 86 billion neurons, which <Text style={styles.underlineText}>communicate through electrical signals.</Text></Text>
            <Image source={require('../../assets/course_4/electrical_signal_1.6.jpg')} style={styles.image}/>
            <Text style={styles.text}>This allows humans to <Text style={styles.underlineText}>process information rapidly and efficiently.</Text></Text>
        </View>
        <View style={styles.footerButtons}>
          <ProgressBar navigation={navigation} currentScreen={'Course4page1_6'} section={section}  />
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: colors.progressButton,
        padding: 10,
        borderRadius: 12,
        height: 20,
        width: 35,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: colors.background,
    },
    currentButton: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 12,
        height: 20,
        width: 35,
    },
    footerButtons: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 20
    },
    interactive: {
        flex: 1,
        borderRadius: 7,
        overflow: 'hidden',
        marginTop: height / 22,
        alignItems: "center"
    },
    number: {
        color: 'white',
        fontSize: 30,
        textAlign: 'right',
        marginTop: 10
    },
    progressBar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        flex: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        marginTop: 12
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: '2%'
    },
    underlineText: {
        textDecorationLine: "underline"
    }
})
