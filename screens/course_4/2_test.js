// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import { LinearGradient } from 'expo-linear-gradient'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Screen 4: Captcha Explanation Screen')

const height = Dimensions.get('window').height

export default function Test2 ({ navigation, context, enabled = true }) {
    let screenSection = screen_list.section1;
    let screenName = 'Test2';
    return (
    <View style={styles.container}>
        <Text style={styles.number}>4/8</Text>
        <View style={styles.interactive}>
            <Text style={styles.text}>Page</Text>
            <Text style={styles.text}>2</Text>
        </View>
        {/*<View style={styles.footerButtons}>
            <LessonButton navigation={navigation} nextScreen='Courses' buttonColor='#8976C2' buttonText='Back' />
            <LessonButton navigation={navigation} nextScreen='Cours4Info1' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
        </View>*/}
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
        fontSize: 30,
        fontWeight: 'bold'
    },
})
