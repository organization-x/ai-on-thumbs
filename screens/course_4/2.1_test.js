// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import HomeButton from '../../components/HomeButton'
import ProgressBar from '../../components/ProgressBar'
import SectionButton from '../../components/SectionButton'
import { LinearGradient } from 'expo-linear-gradient'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Screen 4: Captcha Explanation Screen')

const height = Dimensions.get('window').height

export default function Test9 ({ navigation, context, enabled = true }) {
    let screenSection = screen_list.section2;
    let previousSection = screen_list.section1;
    let screenName = 'Test9';
    return (
    <View style={styles.container}>
        <View style={styles.top}>
            <HomeButton navigation={navigation}/>
            <Text style={styles.number}>1/9</Text>
        </View>
        <View style={styles.interactive}>
            <Text style={styles.text}>Section 2 Page 9</Text>
        </View>
        <View style={styles.sectionButton}>
            <SectionButton navigation={navigation} goSection={previousSection} />
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
    sectionButton: {
        marginBottom: 160,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: '2%'
    },
    text: {
        flex: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
})
