import React, {useState} from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions, Image, View} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Imagel (props) {
  const [col, setCol] = useState(true)
  const [num, setNum] = useState(null)
  const [once, setOnce] = useState(0)
  const pressHandler = () => {
    // if (num == 0) {
    //   console.log(col)
    // }

    console.log(props.press.length, 'first press')
    if (props.one === true) {
    //   console.log('------------')
    //   console.log(props.press.length, 'length')
    //   console.log(once, 'once')
    //   if (props.press.length ==0) {
    //     setNum(0)
    //     setOnce(1)
    //     let ars = props.press

    //     console.log(num, 'num')
    //     ars[num] = col
    //     console.log(ars)
    //     props.presser(ars)
    //     console.log('hi')
    //   } else if (props.press.length !== 0 && once == 0) {
    //     setNum(props.press.length+1)
    //     console.log(props.press.length, 'length')
    //     setOnce(1)
    //     let ars = props.press

    //     console.log(num, 'num')
    //     ars[num] = col
    //     console.log(ars)
    //     props.presser(ars)
    //     // props.presser(props.press[num] = col)
    //     console.log('what')
    //   } else {
    //     let ars = props.press

    //     console.log(props.press.length, 'length')
    //     console.log(num, 'num')
    //     ars[num] = col
    //     console.log(ars)
    //     props.presser(ars)
    //     console.log('why')
    //     // props.presser(props.press[num] = col)
    //   }
    //   // props.presser(props.press=col)
    //   // console.log(props.press)
    // }
      console.log(col)
      let ars = props.press
      ars[props.ind] = col
      props.presser(ars)
      console.log(props.press)
      setCol(!col)
          // setPressed(pressed.concat(num))
    }
  }
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