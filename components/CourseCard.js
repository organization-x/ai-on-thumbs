import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import FootPrint from './FootPrint';
import Header from './Header';

export default function CourseCard({ item, onPress }) {        
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={onPress}>
            <Header style={styles.title}>{item.title}</Header>
            <View style={styles.footer}>
                <FootPrint style={styles.footerText}>{item.description}</FootPrint>
                <Image resizeMode="cover" style={styles.image} source={{ uri: item.image }}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#55CE8C",
        borderRadius:20,
        padding:20,
        width:"100%",
        shadowOffset: {
            width: 0,
            height: 4
          },
          shadowRadius: 1,
          shadowColor: "rgba(0, 0, 0, 0.25)",
          shadowOpacity: 1,
          marginBottom:20,
    },
    image:{
        width:100,
        height:100,
        borderRadius:200,
        marginLeft: 10,
    },
    title: {
        fontSize: 25,
        color: "black",
        fontWeight: 'bold',
        marginBottom:10,
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%"
    },
    footerText:{
        maxWidth: "70%"
    }
});