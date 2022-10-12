import React, {useState} from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, FlatList, TouchableOpacity, Dimensions, Pressable } from 'react-native'
import LessonButton from '../../components/LessonButton'
import { TapGestureHandler, } from 'react-native-gesture-handler'
import colors from '../../config/colors'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'

<<<<<<< HEAD

<<<<<<< HEAD
export default function Course4_third ({navigation}) {
=======
export default function Course4page1_3 ({navigation}) {
>>>>>>> nr_neural_network
=======
export default function Course4_third ({ navigation }) {
  const [images, setImages] = useState([require('./bus_1.jpg'),require('./bus_2.jpg'),require('./bus.jpg'),require('./car.jpg'),require('./house.jpg'),require('./street.jpg'),require('./streets.jpg'),require('./traf.jpg'),require('./van.jpg')])
  const name = 'Course4_third'
  const section=screen_list.section1
  const [col, setCol] = useState(false)
  const [pressed, setPressed] = useState([])
  const pressHandler = (num) => {
    if (num == 0) {
      console.log(col)
    }
    setCol(!col)
    // setPressed(pressed.concat(num))
    console.log(col)
  }
>>>>>>> 477da7fde227259acd044170367584082ac69d06
  return (
    <View style={styles.container}>
      <Text style={styles.num}>3/8</Text>
      <View style={styles.interactive}>
        <Text style={styles.box}>Select all images with a{'\n'}<Text style={styles.bold}> Bus</Text>{'\n'}Click verify when done</Text>
<<<<<<< HEAD
<<<<<<< HEAD
        <Image style={styles.im} source={require('./captc.png')}/>
=======
      <View style={styles.im}>
        <FlatList
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
        />
      </View>
>>>>>>> 477da7fde227259acd044170367584082ac69d06
        <Text style={styles.verify}>Verify!</Text>
      </View>
      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={name} section={section}  />
      </View>
=======
        {/* <Image style={styles.im} source={require('./assets/images.jfif')}/> */}
        <Text style={styles.verify}>Verify!</Text>
      </View>
      <View style={styles.footerButtons}>
            <LessonButton navigation={navigation} nextScreen='Course4page1_2' buttonColor='#8976C2' buttonText='Back' />
            <LessonButton navigation={navigation} nextScreen='Course4page1_4' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
        </View>
>>>>>>> nr_neural_network
    </View>
  )
}



const styles = StyleSheet.create({
  img_container: {
    width: "30%",
    paddingTop: 7,
    marginHorizontal: 3,
  },
  container: {
    flex: 1,
    backgroundColor:"#202020",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  im:{
    borderColor: "#1FBD67",
    borderWidth: 4,
    borderRadius: 10,
    height: "55%",
    marginVertical: 10,
    paddingLeft: 5
  },
  num: {
    fontSize: 28,
    color: "white",
    marginLeft: 300,
    marginTop: 10,
    marginBottom: -10
  },
  verify:{
    backgroundColor: "#1FBD67",
    color: 'white',
    width: "100%",
    borderRadius: 20,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    width: "75%",
    marginBottom: 50
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

