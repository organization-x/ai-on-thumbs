import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

<<<<<<< HEAD
<<<<<<< HEAD
=======
import colors from '../config/colors'
>>>>>>> nr_neural_network
=======
import colors from '../config/colors'
>>>>>>> 477da7fde227259acd044170367584082ac69d06

export default function ProgressBar ({ navigation, section, currentScreen, context, enabled = true, actOpacity = 0.3 }) {
    let buttonWidth = section.buttonWidth;
    let screens = section.screens;
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
>>>>>>> nr_neural_network

=======
>>>>>>> 477da7fde227259acd044170367584082ac69d06
    let progressBar = [];
    let buttonColor;
    let currentScreenIdx;
    let firstScreenIdx;
    //Find index of current screen
    for (let i=0; i<screens.length; i++){
        if (screens[i] === currentScreen) {
            currentScreenIdx = i;
            break;
        }
    }
    //setting first button screen
    if (currentScreenIdx < 4){
        firstScreenIdx = 0;
    }
    else if (currentScreenIdx > screens.length-3) {
        firstScreenIdx = screens.length-5;
    }
    else {
        firstScreenIdx = currentScreenIdx-2;
    }

    for (let i=firstScreenIdx; i<firstScreenIdx+5; i++){
        //the first button is small when you're farther from the beginning
        if (progressBar.length === 0 && i>0) {
            buttonWidth = 20;
        }
        //the last button is small when you're farther from the end
        else if (progressBar.length > 4 && i<screens.length-1) {
            buttonWidth = 20;
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
        else if (progressBar.length === screens.length && screens.length < 5) {
            break;
        }
>>>>>>> nr_neural_network
=======
        else if (progressBar.length === screens.length && screens.length < 5) {
            break;
        }
>>>>>>> 477da7fde227259acd044170367584082ac69d06
        //else the button is long
        else {
            buttonWidth = 50;
        }
        //set color of each button
        if (i === currentScreenIdx) {
            buttonColor = colors.primary;
<<<<<<< HEAD
        }
=======
        } 
>>>>>>> nr_neural_network
        else {
            buttonColor = colors.progressButton;
        }
        progressBar.push(
        <TouchableOpacity
            key={i}
            onPress={() => enabled && navigation.navigate(screens[i], { context })}
            style={[styles.button, {backgroundColor: buttonColor, width: buttonWidth}]}
            activeOpacity={actOpacity}
        />);
    }
<<<<<<< HEAD

=======
    
>>>>>>> nr_neural_network

    return progressBar;
}


const styles = StyleSheet.create({
    button: {
<<<<<<< HEAD
<<<<<<< HEAD
        backgroundColor: 'red',
        padding: 10,
=======
        backgroundColor: colors.progressButton, 
        padding: 10, 
>>>>>>> nr_neural_network
        marginHorizontal: 5,
=======
        backgroundColor: colors.progressButton,
        marginHorizontal: 30,
>>>>>>> 477da7fde227259acd044170367584082ac69d06
        borderRadius: 12,
        height: 20,
        width: 35,
    },
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    }
<<<<<<< HEAD
})
=======
})
>>>>>>> nr_neural_network
