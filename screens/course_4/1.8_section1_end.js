// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import SectionButton from '../../components/SectionButton'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from '../../components/LessonButton'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Screen 4: Captcha Explanation Screen')

const height = Dimensions.get('window').height

export default function Course4Sect1End ({ navigation, context, enabled = true }) {
    let screenSection = screen_list.section1;
    let nextSection = screen_list.section2;
    let screenName = 'Course4Sect1End';
    return (
    <View style={styles.container}>
        <Text style={styles.number}>8/8</Text>
        <View style={styles.interactive}>
            <Text style={styles.text}>Now let's dive further into neural networks to better understand how they are able to process information!</Text>
        </View>
        <View style={styles.sectionButton}>
            <SectionButton navigation={navigation} nextSection={true} goSection={nextSection} />
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
        marginTop: height / 7
    },
    number: {
        color: 'white',
        fontSize: 30,
        textAlign: 'right',
        marginTop: 10
    },
    sectionButton: {
        marginBottom: 160,
        flexDirection: 'row',
        justifyContent: 'center',
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
})
