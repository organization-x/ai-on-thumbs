import React, {useState} from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, FlatList, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { TapGestureHandler, } from 'react-native-gesture-handler'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
import ImageContainer from '../../components/Images'
import Imagel from '../../components/Image'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default function Course4_third ({ navigation, context }) {
  const [images, setImages] = useState([require('../../assets/bus_1.jpg'),require('../../assets/bus_2.jpg'),require('../../assets/bus.jpg'),require('../../assets/car.jpg'),require('../../assets/house.jpg'),require('../../assets/street.jpg'),require('../../assets/streets.jpg'),require('../../assets/traf.jpg'),require('../../assets/van.jpg')])
  const name = 'Course4_third'
  const section=screen_list.section1
  const [pressed, setPressed] = useState([])
  const [full, setFull] = useState([])
  const [work, setWork] = useState(true)


  const verify = () => {
    let count = 0
    for (let i =0; i <pressed.length; i++) {

      if(pressed[i] === false || pressed[i] == null) {
        navigation.navigate('Wrong', {context})
      } else if (pressed[i] === true) {
        count += 1
        if (count == 3) {
          navigation.navigate('Right', { context })
        }
      }
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.num}>3/8</Text>
      <View style={styles.interactive}>
        <Text style={styles.box}>Select all images with a{'\n'}<Text style={styles.bold}> Bus</Text>{'\n'}Click verify when done</Text>
        {/* <FlatList
          data={images}
          numColumns={3}
          renderItem={ ({ item, index }) => (
            <View style={styles.img_container}>
              <TouchableOpacity onPress={() => pressHandler(index)} >
                <Image source={item} key={index} style={{
                  tintColor: col ? null : 'black',
                  opacity: col ? 1 : 0.7,
                  width: 100,
                  height: 100,
                  marginLeft: 5
                }}/>
              </TouchableOpacity>
            </View>

          )}
        /> */}
      <View style ={styles.img_container}>
        <Imagel link={images[0]} press={pressed} presser={setPressed} one={true} ind={0} fill={full} filler={setFull}/>
        <Imagel link={images[1]} press={pressed} presser={setPressed} one={true} ind={1} fill={full} filler={setFull}/>
        <Imagel link={images[2]} press={pressed} presser={setPressed} one={true} ind={2} fill={full} filler={setFull}/>
        <Imagel link={images[3]} press={pressed} presser={setPressed} one={false} ind={3} fill={full} filler={setFull}/>
        <Imagel link={images[4]} press={pressed} presser={setPressed} one={false} ind={4} fill={full} filler={setFull}/>
        <Imagel link={images[5]} press={pressed} presser={setPressed} one={false} ind={5} fill={full} filler={setFull}/>
        <Imagel link={images[6]} press={pressed} presser={setPressed} one={false} ind={6} fill={full} filler={setFull}/>
        <Imagel link={images[7]} press={pressed} presser={setPressed} one={false} ind={7} fill={full} filler={setFull}/>
        <Imagel link={images[8]} press={pressed} presser={setPressed} one={false} ind={8} fill={full} filler={setFull}/>

      </View>
      <Text style={styles.verify} onPress={verify}>Verify!</Text>

      </View>
      <View style={styles.footerButtons}>
        {/* <ProgressBar navigation={navigation} currentScreen={name} section={section}  /> */}
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  img_container: {
    flexDirection: 'row',
    justifyContent:'center',
    flexWrap: 'wrap',
    alignItems:'center',
    width: width-50,
    paddingTop: 10,
    marginHorizontal: 3,
    borderColor: "#1FBD67",
    borderWidth: 4,
    borderRadius: 10,
    height: "55%",
    marginVertical: 10,
    paddingLeft: 5
  },
  container: {
    flex: 1,
    backgroundColor:"#202020",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  num: {
    fontSize: 28,
    color: "white",
    marginLeft: width-90,
    marginTop: 10,
    marginBottom: -10
  },
  verify:{
    backgroundColor: "#1FBD67",
    width: "100%",
    borderRadius: 20,
    paddingVertical: 10,
    width: "75%",
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    color: 'white'
  },
  box: {
    backgroundColor: "#1FBD67",
    color: 'white',
    width: "100%",
    borderRadius: 20,
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",

  },
  bold: {
    fontSize: 40,
    textAlign: 'left'
  },
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: "100%",
    fontWeight: 'bold',
    lineHeight: 35,
    marginBottom: 25
  },
  textund: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: "100%",
    fontWeight: 'bold',
    marginTop: 25,
    lineHeight: 35,
    textDecorationLine: 'underline'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

