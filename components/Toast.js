import React from 'react';
import { Snackbar } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

//a special kind of notification that appears at the top of the screen

export default function Toast({ type = 'error', message, onDismiss }) {
	console.log(message);
	console.log(type);

	return (
		<View style={styles.container}>
			<Snackbar
				visible={message}
				duration={2000}
				onDismiss={onDismiss}
				style={{
					"backgroundColor": type === 'error' ? "red" : "green",
				}}
			>
				<Text style={styles.content}>{message}</Text>
			</Snackbar>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: "12%",
    width: '100%',
  },
  content: {
    fontWeight: '500',
  }
});
