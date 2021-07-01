import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FootPrint from "../components/FootPrint.js"

export default function InfoCard({item}){
    return (
        <View style={styles.infoBox}>
            <FootPrint style={styles.title}>
                {item.title}
            </FootPrint>
            <FootPrint style={styles.description}>
                {item.description}
            </FootPrint>
        </View>
    )
}

const styles = StyleSheet.create({
    infoBox: {
        borderRadius: 4,
        backgroundColor: "#55CE8C",
        marginTop: 10,
        marginBottom: 30,
        justifyContent: "center",
        borderRadius:10,
        paddingVertical:20,
        paddingHorizontal:40,
        marginHorizontal:10
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
