import React, { useRef, useEffect } from 'react'
import { Animated, Easing, StyleSheet, View, Text } from 'react-native'

export default function IntImageAnim({ boxes, animate=true, style }) {

  // sets correct opacity value
  const getFadeValue = (letter) => {
    if(boxes.includes(letter)) {
      return useRef(new Animated.Value(animate ? 0 : 1)).current
    }
    return 0
  }

  // returns an array of the animation sequence
  const getAnimations = (fades) => {
    const animations = [Animated.delay(500)]
    const fadeOutAnimations = []

    // add animations for each box if it's in boxes
    for (let i = 0; i < fades.length; i++) {
      if(boxes.includes(fades[i].letter)) {
        animations.push(
          Animated.timing(fades[i].fade, {
            toValue: 1,
            duration: 1700,
            useNativeDriver: false,
            easing: Easing.out(Easing.exp)
          })
        )
        fadeOutAnimations.push(
          Animated.timing(fades[i].fade, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: false,
            easing: Easing.out(Easing.exp)
          })
        )
      }
    }
    // short delay after everything is displayed
    animations.push(
      Animated.delay(3000)
    )
    // add in the fadeouts at the end
    animations.push(
      Animated.parallel(fadeOutAnimations)
    )
    // return array of animations for animation sequence
    return animations
  }

  // set the opacity values
  const aFade = getFadeValue('a')
  const bFade = getFadeValue('b')
  const cFade = getFadeValue('c')
  const dFade = getFadeValue('d')
  const eFade = getFadeValue('e')

  // run animations if animate=true
  let AnimateLoop
  if(animate) {
    AnimateLoop = useRef(
      Animated.loop(
        Animated.sequence(
          getAnimations([
            { letter: 'a', fade: aFade },
            { letter: 'b', fade: bFade },
            { letter: 'c', fade: cFade },
            { letter: 'd', fade: dFade },
            { letter: 'e', fade: eFade }
          ])
        )
      )
    ).current
  }

  useEffect(() => {
    if(animate) {
      AnimateLoop.start()
      // prevent loop from running after leaving screen
      // edit: this does not stop the loop for some reason
      return () => AnimateLoop.stop()
    }
  })


  return (
    <View style={[styles.container, styles.shadow, style]}>
      <Text style={[styles.Txt, styles.contTxt]}>Full Image</Text>

      <Animated.View style={[styles.box, styles.aBox, styles.shadow,
        {
          opacity: aFade
        }
      ]}>
        <Text style={[styles.Txt, styles.aTxt]}>A</Text>

        <Animated.View style={[styles.box, styles.bBox, styles.shadow,
          {
            opacity: bFade
          }
        ]}>
          <Text style={[styles.Txt, styles.bTxt]}>B</Text>
        </Animated.View>
        <Animated.View style={[styles.box, styles.cBox, styles.shadow,
          {
            opacity: cFade
          }
        ]}>
          <Text style={[styles.Txt, styles.cTxt]}>C</Text>
        </Animated.View>
        <Animated.View style={[styles.dBox, styles.shadow,
          {
            opacity: dFade
          }
        ]}>
          <Text style={[styles.Txt, styles.dTxt]}>D</Text>
        </Animated.View>
        <Animated.View style={[styles.box, styles.eBox, styles.shadow,
          {
            opacity: eFade
          }
        ]}>
          <Text style={[styles.Txt]}>E</Text>
        </Animated.View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#161616',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 5
  },
  container: {
    flex: 1,
    minWidth: 200,
    minHeight: 100,
    position: 'relative',
    borderRadius: 7,
    zIndex: 10,
    backgroundColor: '#666666'
  },
  box: {
    flex: 1,
    borderRadius: 7,
    position: 'absolute',
    left: 0,
    top: 0
  },
  aBox: {
    width: '80%',
    height: '75%',
    zIndex: 11,
    backgroundColor: '#aa2e2e'
  },
  bBox: {
    right: 0,
    height: '25%',
    zIndex: 12,
    backgroundColor: '#ce7b23',
    justifyContent: 'center'
  },
  cBox: {
    bottom: 0,
    width: '25%',
    zIndex: 13,
    backgroundColor: 'rgba(139, 209, 20, 0.6)',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  dBox: {
    flex: 1,
    borderRadius: 7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '75%',
    height: '75%',
    backgroundColor: '#809399',
    zIndex: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  eBox: {
    width: '25%',
    height: '25%',
    backgroundColor: '#72c454',
    zIndex: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  contTxt: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  aTxt: {
    position: 'absolute',
    right: 13,
    bottom: 10
  },
  bTxt: {
    alignSelf: 'flex-end',
    marginRight: 15
  },
  cTxt: {
    marginBottom: 10
  },
  dTxt: {
    marginBottom: 10,
    marginRight: 13
  }
})