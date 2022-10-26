import React, {useState} from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, FlatList, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native'
import ProgressBar from '../../components/ProgressBar'
import screen_list from '../../config/screen_list'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Right ({navigation}) {
  const section = screen_list.section1
  return (
    <View style={styles.container}>
      <Text style={styles.num}>3/8</Text>
      <View style={styles.interactive}>
        <Text style={styles.box}>See  how  you're{'\n'} able  to  identify{'\n'}what  a  bus  is!</Text>
        <Image style={styles.img} source={require('./captc_2.png')}/>
        <Text style={styles.btm}>Humans are easily able to identify buses by finding their characteristics, since we have seen them multiple times</Text>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={'Course4_third'} section={section}  />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btm:{
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    width: "90%",
    textAlign: 'center'
  },
  img: {
    width: width-85,
    height: width-85,
    marginBottom: 15
  },
  box: {
    backgroundColor: "#1FBD67",
    color: 'white',
    width: "95%",
    borderRadius: 20,
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 35,
    marginBottom: 25
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
  interactive: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  }

})