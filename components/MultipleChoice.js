import React, {useState} from 'react'
import {View,Text, Button, StyleSheet} from 'react-native'
import Choice from "./Choice.js"

export default function MultipleChoice({ item, handleScroll }) {
    function checkAdvance(correct, buttonAnswer){
        if (correct.toString() == buttonAnswer.toString()){
            handleScroll(true)
        } else{
            handleScroll(false)
        }
    }
    return (
        <View style={styles.overall}>
            <View style={{ flex:.8, flexDirection:"row", alignItems:"center", justifyContent:'center' }}>
                <Text style={styles.text}>{item.question}</Text>
            </View>
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
        fontSize:20,
        fontWeight: '500',
        textAlign:"center",
        flex:1,
    },
    container:{
        flexDirection:'row',
        justifyContent:"center",
        flex:4,
        alignItems:"center",
    },
    overall:{
        borderRadius:10,
        flex:1,
    },
  });