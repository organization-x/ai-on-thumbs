
import React, {useState} from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions, Image, View} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Imagel (props) {
  const [col, setCol] = useState(true)
  const [num, setNum] = useState(null)
  const [once, setOnce] = useState(0)
  const pressHandler = () => {
    if (props.one === true) {
        console.log(col)
        let ars = props.press
        ars[props.ind] = col
        props.presser(ars)
        console.log(props.press)
        setCol(!col)
            // setPressed(pressed.concat(num))
      }
  }
          // setPressed(pressed.concat(num))


  return (
    <TouchableOpacity onPress={() => pressHandler()} style={{
      marginRight: 5,
      height: "30%",
      marginBottom: 5
      // alignSelf: 'center'
    }} >
      <Image source={props.link} style={{

        opacity: col ? 1 : 0.3,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
      }}/>
    </TouchableOpacity>
  )
  }