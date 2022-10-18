// Developers created Neural Networks to mimic how the human brain learns.

import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Screen 4: Captcha Explanation Screen')

const height = Dimensions.get('window').height

export default function Course4page1_5 ({ navigation, context, enabled = true }) {
    let screenSection = screen_list.section1;
    let screenName = 'Course4page1_5';
    return (
    <View style={styles.container}>
        <View style={styles.top}>
            <HomeButton navigation={navigation}/>
            <Text style={styles.number}>5/8</Text>
        </View>
        <View style={styles.interactive}>
            <Text style={styles.text}>To solve this problem, developers created <Text style={styles.underlineText}>NNs</Text> to <Text style={styles.underlineText}>mimic the human brain.</Text></Text>
            <View style={styles.rectangle}>
                <Image source={require('../../assets/course_4/brain_1.5.png')} style={styles.image}/>
            </View>

        </View>
        
        <View style={styles.footerButtons}>
            <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
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
        width: 350,
        height: 200
    },
    interactive: {
        flex: 1,
        borderRadius: 7,
        overflow: 'hidden',
        marginTop: height / 10,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        color: 'white',
        fontSize: 30,
        textAlign: 'right'
    },
    progressBar: {
        alignItems: 'center', 
        justifyContent: 'flex-end',
    },
    rectangle: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        width: 350,
        height: 225,
        alignItems: "center",
        marginBottom: height / 5,
        justifyContent: "center"
    },
    text: {
        flex: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        paddingVertical: 10
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
