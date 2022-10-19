import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import colors from '../config/colors'

export default function SectionButton ({ navigation, nextSection = false, goSection, context, enabled = true, actOpacity = 0.3 }) {
    let screens = goSection.screens;
    let nextScreenIdx;
    let buttonText;
    let buttonTextSize;

    //If we're going to the next section, set button text to next section and get index of the 1st screen of the next section 
    //Also set text size to 35
    if(nextSection === true) {
        nextScreenIdx = 0;
        buttonText = 'Next Section';
        buttonTextSize = 35;
    }
    //If we're going to previous section, set button text to previous section and get index of last screen of previous section
    // set text size to 30
    else {
        nextScreenIdx = screens.length-1;
        buttonText = 'Previous Section';
        buttonTextSize = 30;
    }
    return <TouchableOpacity
            onPress={() => enabled && navigation.navigate(screens[nextScreenIdx], { context })}
            style={styles.button}
            activeOpacity={actOpacity}
            >
                <Text style={[styles.buttonText, {fontSize: buttonTextSize}]}>{buttonText}</Text>
            </TouchableOpacity>;
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary, 
        padding: 10, 
        borderRadius: 15,
        height: 70,
        width: 250,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold'
    },
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
