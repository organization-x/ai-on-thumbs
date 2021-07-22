import React from 'react';
import { StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import FootPrint from '../components/FootPrint';
import ActionButton from "../components/ActionButton";

export default function Welcome({navigation, usernameVar}) {
	return (
		<Background>
			<Logo style={styles.logo}/>

			<Header style={styles.left_align}>
				Learn AI {"\n"}with Your Thumbs
			</Header>

			<FootPrint style={styles.left_align}>
				Built by Teenagers for Teenagers
			</FootPrint>

			<View style={styles.buttonView}>

				<ActionButton 
					onPress={ () => navigation.navigate("Courses") } 
					title="Start learning AI"/>

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
        flex:1,
        width:"100%",
        justifyContent:"flex-end",
        alignItems:"center"
    }
});
