import React, {useState} from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions, Image, View} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height



export default function ImageContainer () {
  const [images, setImages] = useState([require('../assets/bus_1.jpg'),require('../assets/bus_2.jpg'),require('../assets/bus.jpg'),require('../assets/car.jpg'),require('../assets/house.jpg'),require('../assets/street.jpg'),require('../assets/streets.jpg'),require('../assets/traf.jpg'),require('../assets/van.jpg')])
  const [col, setCol] = useState(false)
  const [pressed, setPressed] = useState([])
  const pressHandler = () => {
    // if (num == 0) {
    //   console.log(col)
    // }
    setCol(!col)
    // setPressed(pressed.concat(num))
    console.log(col)
  }
  return(
  <View style={styles.img_container}>
    <TouchableOpacity onPress={() => pressHandler()} style={{
        width: 100,
        height:100,
        marginRight: 5
      }} >
      <Image source={images[1]} style={{
        // tintColor: col ? null : 'black',
        opacity: col ? 1 : 0.7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => pressHandler()} style={{
      width: 100,
      height:100,
      marginRight: 5
    }} >
      <Image source={images[1]} style={{
        // tintColor: col ? null : 'black',
        opacity: col ? 1 : 0.7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => pressHandler()} style={{
      width: 100,
      height:100,
      marginRight: 5
    }} >
      <Image source={images[1]} style={{
        // tintColor: col ? null : 'black',
        opacity: col ? 1 : 0.7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => pressHandler()} style={{
      width: 100,
      height:100,
      marginRight: 5
    }} >
      <Image source={images[1]} style={{
        // tintColor: col ? null : 'black',
        opacity: col ? 1 : 0.7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}/>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  img_container: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    flexWrap: 'wrap',
    alignItems:'flex-start',
    width: width-50,
    paddingTop: 7,
    marginHorizontal: 3,
    borderColor: "#1FBD67",
    borderWidth: 4,
    borderRadius: 10,
    height: "55%",
    marginVertical: 10,
    paddingLeft: 5
  }
})