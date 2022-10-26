import React, { useState } from 'react'
import { TouchableOpacity, Image } from 'react-native'

export default function Imagel (props) {
  const [col, setCol] = useState(true)
  const pressHandler = () => {
    if (props.one === true) {
      console.log(col)
      const ars = props.press
      ars[props.ind] = col
      props.presser(ars)
      console.log(props.press)
      setCol(!col)
    }
  }

  return (
    <TouchableOpacity
      onPress={() => pressHandler()} style={{
        marginRight: 5,
        height: '30%',
        marginBottom: 5
      }}
    >
      <Image
        source={props.link} style={{

          opacity: col ? 1 : 0.3,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: 100
        }}
      />
    </TouchableOpacity>
  )
}
