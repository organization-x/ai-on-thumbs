// Share your results to show that you know how AI works!

import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LessonButton from "../../components/LessonButton"
import * as Sharing from 'expo-sharing'; 
import * as FileSystem from 'expo-file-system'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Course2FaceDetection ( { route, navigation } ) {
  const { context } = route.params;
  const [modalVisible, setModalVisible] = useState(false)

  function displayModal (show) {
    setModalVisible(show)
  }

  const shareData = async (context) => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    try{
      let name = 'face_detection.png';
      let filepath = `${FileSystem.documentDirectory}/${name}`;;
      await FileSystem.writeAsStringAsync(filepath, context, {encoding: 'base64'});
      await Sharing.shareAsync(filepath, { mimeType: 'image/png' })
    } catch (e) {
      // TODO: add SENTRY LOGGING HERE.
      console.log(e.message)
    }
  }
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <View style={{ alignItems: 'center'}}>
        <Image style={styles.logo} source={require('../../assets/ai-on-thumbs-logo.png')} />
      </View>
      <Text style={styles.mainText}> Click your photo to share your results and show others that you know how AI works!</Text>

      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalBigText}>  AI doesn't always get it right! </Text>
            <Text style={styles.modalBoldText}> Please go back to the previous page and retake your photo to detect your face. </Text>
            <Text style={styles.modalText}> Facial recognition can be affected by factors like lighting, face direction, face proportion to photo size, and intensity of expressions. </Text>
            <Text style={styles.closeText} onPress={() => { setModalVisible(!modalVisible) }}>Close</Text>
          </View>
        </View>
      </Modal>
      
      {context !== null ?
        <TouchableOpacity 
        style={styles.imageContainer} 
        onPress={() => shareData(context).catch(err => { console.log(err.message) })
        //TODO: LOG ERROR TO SENTRY
        }> 
          <Image style={styles.image} source={{ uri: `data:image/png;base64,${context}` }} />
        </TouchableOpacity>
      : <View style={styles.imageContainer}>
        <Image style={styles.noPhotoImage} source={require('../../assets/scan.png')}/>
        <Text style={styles.noPhotoText}> (No photo taken)</Text>
        </View>
      }        

      {context !== null ?
        <TouchableOpacity onPress={() => { displayModal(true)}}>
          <Text style={styles.secondText}> Face not detected? Tap here for help.</Text>
        </TouchableOpacity>
      :
      null}

      <View style={styles.footerButtons}>
        <LessonButton
          navigation = {navigation}
          nextScreen = "Course2Selfie"
          buttonColor = "#8976C2"
          buttonText = "Back"
        />

        <LessonButton
          navigation = {navigation}
          nextScreen = "Courses"
          buttonColor = {["#32B59D", "#3AC55B"]}
          buttonText = "Go to Home"
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 325,
    height: 128,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 17
  },
  mainText: {
    padding: 10,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: windowHeight/30,
    fontWeight: "bold"
  },
  noPhotoText: {
    padding: 10,
    marginTop: '5%',
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    color: "black",
    fontSize: windowHeight/25,
    fontWeight: "bold"
  },
  secondText: {
    padding: 30,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    fontWeight: 'bold',
    color: "black",
    fontSize: windowHeight/42
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imageContainer: { 
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: '95%',
    height: '95%',
    resizeMode: 'cover',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black'
  },
  noPhotoImage: {
    height: windowHeight/3,
    width:  windowHeight/3,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: windowHeight / 25,
    backgroundColor: '#3AC55B',
    borderRadius: 15,
    padding: windowHeight / 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 100
  },
  modalText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '4%',
    fontSize: windowHeight / 40,
    fontFamily: 'Avenir',
    color: 'white',
    textAlign: 'center'
  },
  modalBoldText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '4%',
    fontSize: windowHeight / 35,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  modalBigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontFamily: 'Avenir',
    marginBottom: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: windowHeight / 25,
    fontWeight: 'bold'
  },
  closeText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '10%',
    fontSize: windowHeight / 35,
    fontFamily: 'Avenir',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
})