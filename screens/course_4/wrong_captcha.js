import React, {useState} from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, FlatList, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native'
import screen_list from '../../config/screen_list'
import ProgressBar from '../../components/ProgressBar'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Wrong({navigation, context}) {
  const section = screen_list.section1
  const try_again = () =>{
    navigation.navigate('Course4_third', {context})
  }
  return(
    <View style={styles.container}>
      <Text style={styles.num}>3/8</Text>
      <View style={styles.interactive}>
        <Text style={styles.box}>Uh oh!{'\n'}Let's try that again{'\n'}🙂</Text>
        <Image style={styles.img} source={require('./captc_3.png')}/>
        <View style={styles.group}>
          <Text style={styles.txts}>Move On!</Text>
          <Text style={styles.txts} onPress={try_again}>Try Again!</Text>
        </View>
      </View>

      <View style={styles.footerButtons}>
        <ProgressBar navigation={navigation} currentScreen={'Course4_third'} section={section}  />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  txts: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#1FBD67',
    borderRadius: 20,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: width / 2.75,
    textAlign: 'center'
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
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
    width: width-70,
    height: width-70,
    marginBottom: 25,
    borderColor: "#1FBD67",
    borderWidth: 3,
    borderRadius: 5
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
