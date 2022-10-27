import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Quiz2Question2Wrong({ navigation }) {
  const correctAnswer = 2;
  const incorrectAnswer = 3;

  const answerStyle1 =
    correctAnswer === 1
      ? "#1FBD67"
      : incorrectAnswer === 1
      ? "#BD1F1F"
      : "#D9D9D9";
  const answerStyle2 =
    correctAnswer === 2
      ? "#1FBD67"
      : incorrectAnswer === 2
      ? "#BD1F1F"
      : "#D9D9D9";
  const answerStyle3 =
    correctAnswer === 3
      ? "#1FBD67"
      : incorrectAnswer === 3
      ? "#BD1F1F"
      : "#D9D9D9";

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>Facial Recognition Quiz II</Text>
      </View>
      <Text style={styles.question}>
        Close, but answer #{correctAnswer} is correct. Swipe up to review the lesson.
      </Text>
      <View style={styles.answerContainer}>
        {/*answer option 1*/}
        <View style={[styles.answer, { backgroundColor: answerStyle1 }]}>
          <Text style={styles.answerText}>
            They interpret the numerical values of each pixel
          </Text>
        </View>
        {/*answer option 2*/}
        <View style={[styles.answer, { backgroundColor: answerStyle2 }]}>
          <Text style={styles.answerText}>
            They compare the photo to a database of photos it has
          </Text>
        </View>
        {/*answer option 3*/}
        <View style={[styles.answer, { backgroundColor: answerStyle3 }]}>
          <Text style={styles.answerText}>
            They interpret photos through the colors of each pixel
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Quiz2Score");
        }}
      >
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Keep Going!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "center",
    padding: width/100,
  },
  headerText: {
    borderRadius: 15,
    fontSize: 30,
    color: "white",
  },
  headerBackground: {
    width: width,
    height: height / 10,
    backgroundColor: "#1FBD67",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height / 20,
  },
  question: {
    color: "white",
    fontWeight: "500",
    fontSize: 30,
    alignItems: "center",
    textAlign: "center",
    marginBottom: height / 20,
  },
  answer: {
    marginBottom: height / 40,
    backgroundColor: "#D9D9D9",
    height: height / 10,
    width: width / 1.2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    alignSelf: "center",
    padding: width / 50,
  },
  answerText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  answerContainer: {
    flex: 1,
    alignItems: "center",
  },
  submitButton: {
    marginBottom: height / 20,
    backgroundColor: "#1fbd67",
    height: height / 10,
    width: width / 1.2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    alignSelf: "center",
  },
  submitButtonText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 25,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
});