/* To implement:
1. import HomeButton
2. wrap in the same view as the number telling the user what page they're on
3. give the view this style:
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: '2%'
    },
*/
import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

export default function HomeButton ({ navigation, style, context, enabled = true, actOpacity = 0.3 }) {
  return (
    <TouchableOpacity
      onPress={() => enabled && navigation.navigate('Courses', { context })}
      style={styles.button}
      activeOpacity={actOpacity}
    >
      <Image source={require('../assets/home_icon.png')} style={[styles.image, style]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    height: height / 16,
    width: height / 16,
    resizeMode: 'contain'
  }
})
