import React from 'react';
import { StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import ActionButton from "../components/ActionButton";
import InfoCard from '../components/InfoCard';
import * as Linking from 'expo-linking';

export default function Ad({navigation}) {
    
	return (
		<Background>
		<Header style= {styles.left_align}>Great Job!</Header>
		<Logo style={styles.logo}/>
		<InfoCard item={{
			title: "Join AI-Camp!", 
			description: "AI Camp teaches future leaders about coding, AI, how to learn, and how to work through creating impressive AI products and tech internships. Our students learn real skills. Not only do they learn real engineering and data skills and get hired at tech companies, they also learn how to use data to make decisions and how to build deep relationships with people."
		}}/>
		<View style={styles.buttonView}>
			<ActionButton 
				style={{ width: "45%", marginRight: 10 }} 
				onPress={() => Linking.openURL('https://ai-camp.org')} 
				title="Learn More"/>

			<ActionButton 
				style={{ width: "45%" }} 
				onPress={() => navigation.navigate("Courses")} 
				title="Return Home"/>
		</View>
		</Background>
	);
};

const styles = StyleSheet.create({
    left_align:{
      alignSelf:"flex-start",
      marginLeft:10,
      marginVertical:5,
    },
    logo:{
      marginVertical: 50,
    },
    buttonView:{
      justifyContent:"center",
      alignItems:"flex-end",
      flexDirection:'row',
    }
});
