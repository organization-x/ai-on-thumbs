import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import FootPrint from "../components/FootPrint.js"

export default function InfoCard({item}){
    return (
        <ScrollView style={styles.infoBox} contentContainerStyle={{justifyContent: "center",}}>
            <FootPrint style={styles.title}>
                {item.title}
            </FootPrint>
            <FootPrint style={styles.description}>
                {item.description}
            </FootPrint>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    infoBox: {
        borderRadius: 4,
        backgroundColor: "#55CE8C",
        marginTop: 10,
        marginBottom: 30,
        
        borderRadius:10,
        paddingVertical:20,
        paddingHorizontal:40,
        marginHorizontal:10,
        maxHeight:"40%"
    },
    title:{
        color:"black",
        fontSize:20,
        fontWeight:"600"
    },
    description:{
        color:"black",
    }
})
