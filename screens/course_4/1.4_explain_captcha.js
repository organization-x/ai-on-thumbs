// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import LessonButton from '../../components/LessonButton'
import { ScrollView } from 'react-native-gesture-handler'
// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Screen 4: Captcha Explanation Screen')

const height = Dimensions.get('window').height

export default function Course4page1_4 ({ navigation, context, enabled = true }) {
    //set variables for section the screen is in and the screen name
    //These variables are passed into the progress bar 
    let screenSection = screen_list.section1;
    let screenName = 'Course4page1_4';
    return (
        <View style={styles.container}>
            {/* <Swiper navigation={navigation}/> */}
            <Text style={styles.number}>4/8</Text>
            <View style={styles.interactive}>
                <Text style={styles.text}>Tasks like the captcha you just completed aren't hard for humans because of the way we take in information and recognize patterns.</Text>
                <Text style={styles.text}>However, these tasks cause problems for computers since they <Text style={styles.underlineText}>can't process things the same way.</Text></Text>
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
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: colors.background,
    },
    footerButtons: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    interactive: {
        flex: 1,
        borderRadius: 7,
        overflow: 'hidden',
        marginTop: height / 12
    },
    number: {
        color: 'white',
        fontSize: 30,
        textAlign: 'right',
        marginTop: 10
    },
    text: {
        flex: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    },
    underlineText: {
        textDecorationLine: "underline"
    }
})