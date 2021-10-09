import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LessonButton from "../../components/LessonButton";

export default function filter_features({ navigation }) {
  return (
    <LinearGradient colors={["#8976C2", "#E6E8FB"]} style={styles.container}>
    <View style = {styles.container}> 
      <View style={styles.textSection}>
        <Text style={styles.mainText}>
          Turns out the patterns in our facial features are distinctive, even in the pixel world!
        </Text>
        <Text style={styles.secondText}>
          We call these special patterns "filters".
        </Text>
      </View>

      <View style={styles.footerButtons}>
        <LessonButton
          navigation={navigation}
          nextScreen=""
          buttonColor={["#32B59D", "#3AC55B"]}
          buttonText="Continue"
        />

        <LessonButton
          navigation={navigation}
          nextScreen=""
          buttonColor="#8976C2"
          buttonText="Back"
        />
      </View>
    </View> 
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    marginVertical: 5,
    padding: 10,
    marginHorizontal : 0,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  secondText: {
    marginVertical: 10,
    padding: 15,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight : 'bold',
  }
});
