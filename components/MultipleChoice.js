import React, {useState} from 'react'
import {View,Text, Button, StyleSheet} from 'react-native'
import Choice from "./Choice.js"

export default function MultipleChoice({ item, handleScroll }) {
    function checkAdvance(correct, buttonAnswer){
        if (correct == buttonAnswer){
            handleScroll(true)
        } else{
            handleScroll(false)
        }
    }
    return (
        <View style={styles.overall}>
            <Text style={styles.text}>{item.question}</Text>
            <View style={styles.container}>
                <View style={styles.column}>
                    <Choice title={item.multipleChoice.one} onPress={() => {checkAdvance(item.correctAnswer, item.multipleChoice.one)}} />
                    <Choice title={item.multipleChoice.two} onPress={() => {checkAdvance(item.correctAnswer, item.multipleChoice.two)}} />
                </View>
                <View style={styles.column}>
                    <Choice title={item.multipleChoice.three} onPress={() => {checkAdvance(item.correctAnswer, item.multipleChoice.three)}} />
                    <Choice title={item.multipleChoice.four} onPress={() => {checkAdvance(item.correctAnswer, item.multipleChoice.four)}} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight: 'bold',
        alignSelf:"center"
    },
    container:{
        flexDirection:'row',
        flex:1,
        justifyContent:"center"
    },
    overall:{
        justifyContent:"flex-end",
        maxWidth:"100%",
        flex:1,
        backgroundColor:"red",
        borderRadius:10
    }
  });