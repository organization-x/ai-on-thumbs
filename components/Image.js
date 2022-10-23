import full from '@babel/core/lib/config/full'
import React, {useState} from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions, Image, View} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Imagel (props) {
  const [col, setCol] = useState(true)
  const [num, setNum] = useState(null)
  const [once, setOnce] = useState(0)
  const pressHandler = () => {
    if (full.length == 0 || work) {

      console.log(props.press.length, 'first press')
      let ars = []
      let oth = []
      console.log(col)
      if (props.one === true) {
        ars = props.press
        oth = props.fill
        ars[props.ind] = col
        oth[props.ind] = col
        props.presser(ars)
        props.filler(oth)
        console.log(props.press)
        console.log(props.oth)
      } else if (props.one == false ){
        oth = props.fill
        oth[props.ind] = col
        props.filler(oth)
        console.log(props.oth)
      }

      setCol(!col)
  }
          // setPressed(pressed.concat(num))
  }

  return (
    <View>
        {(work) ? (
          <TouchableOpacity onPress={() => pressHandler()} style={{
            marginRight: 5,
            height: "30%",
            marginBottom: 5
          }} >
            <Image source={props.link} style={{
              opacity: col ? 1 : 0.3,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: 100
            }}/>
          </TouchableOpacity>) : (
          <TouchableOpacity onPress={() => pressHandler()} style={{
            marginRight: 5,
            height: "30%",
            marginBottom: 5
            // alignSelf: 'center'
          }} >
            <Image source={props.link} style={{

              opacity: (full[props.ind]) ? 1 : 0.3,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: 100
            }}/>
          </TouchableOpacity>)
          }
    </View>
  )
  }