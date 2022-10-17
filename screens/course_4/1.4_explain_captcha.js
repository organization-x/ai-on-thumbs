// Tasks like captchas are easy for humans but hard for computers

import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import HomeButton from '../../components/HomeButton'
import { ScrollView } from 'react-native-gesture-handler'

// import * as Analytics from 'expo-firebase-analytics'
// Analytics.setCurrentScreen('Course 4 Screen 4: Captcha Explanation Screen')

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Course4CaptExplain ({ navigation, context, enabled = true }) {
    //set variables for section the screen is in and the screen name
    //These variables are passed into the progress bar 
    let screenSection = screen_list.section1;
    let screenName = 'Course4CaptExplain';
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <HomeButton navigation={navigation}/>
                <Text style={styles.number}>4/8</Text>
            </View>
            <View style={styles.interactive}>
                <Text style={styles.text}>Tasks like the captcha you just completed aren't hard for humans because of the way we take in information and <Text style={styles.underlineText}>recognize patterns.</Text></Text>
                <Text style={styles.text}>However, these tasks cause problems for computers since they <Text style={styles.underlineText}>can't process things the same way.</Text></Text>
            </View>

            <View style={styles.footerButtons}>
                <ProgressBar navigation={navigation} currentScreen={screenName} section={screenSection} />
            </View>
        </View>
    )
}

{/*const Swiper = ({ navigation, context, enabled = true }) => {
    return(
        <ScrollView snapToInterval={width} decelerationRate="fast" horizontal>
            {() => enabled && navigation.navigate('Course4Info1', { context })}
        </ScrollView>
    )
}*/}

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
