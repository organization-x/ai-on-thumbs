// Did you have fun learning AI with us?

import React, { useState } from 'react'
import {Text, Image, View, TouchableOpacity} from 'react-native'
import LessonButton from '../../components/LessonButton'
import { LinearGradient } from 'expo-linear-gradient'
import StarRating from 'react-native-star-rating';
import TopLessonParagraph from '../../components/TopLessonParagraph';

async function sendFeedback (rating) {
  await fetch('https://ai-camp.org/set-rating', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      rating: rating
    })
  })
} 

export default function Course1Rating ( {navigation} ) {
  const [starCount, setStarCount] = useState(0);
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <Image style={styles.logo} resizeMode='contain' source={require('../../assets/stock/ai-on-thumbs-logo.png')} />
      <TopLessonParagraph> Did you have fun learning AI with us?</TopLessonParagraph>
      <View style={styles.starView}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={starCount}
          selectedStar={(rating) => setStarCount(rating)}
          fullStarColor={"yellow"}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{sendFeedback(starCount)}}>
        <Text>Send Feedback</Text>
      </TouchableOpacity>
      <Text style={styles.subText}>We told you that if you have thumbs, you can learn AI</Text>
      <View style={styles.footerButtons}>
        <LessonButton style={{marginRight: 20}} navigation={navigation} nextScreen='Course1Review' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course1EmailPrompt' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
      </View>
    </LinearGradient>
  )
}

const styles = {
  logo: {
    height: 140,
    marginTop: 70
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    paddingVertical: '40%',
  },
  starView: {
    marginTop: 50
  },
  subText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  }, 
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    margin: 20,
  }
}
