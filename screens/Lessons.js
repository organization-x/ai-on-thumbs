import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  View,
  Animated,
  FlatList,
  Image,
  useWindowDimensions,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import Background from '../components/Background'
import InfoCard from '../components/InfoCard'
import Header from '../components/Header'
import MultipleChoice from '../components/MultipleChoice'
import ConfettiCannon from 'react-native-confetti-cannon'
import Toast from '../components/Toast'
import ProgressCircle from 'react-native-progress-circle'

export default function Lessons ({ route, navigation }) {
  const { courseId } = route.params
  const flatListRef = React.useRef()
  const explosion = React.useRef()
  const [toast, setToast] = React.useState({ value: '', type: '' })
  const { width } = useWindowDimensions()
  const [index, setIndex] = React.useState(0)
  const scrollX = React.useRef(new Animated.Value(0)).current
  const [lessonData, setLessonData] = useState(null)

  const get_course = async (courseId) => {
    const res = await fetch(`https://invite.ai-camp.org/course/${courseId}`, {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      }
    })
    const data = await res.json()
    setLessonData(data.course_lessons)
  }

  useEffect(() => { get_course(courseId) }, [])

  function handleScroll (advance) {
    if (advance) {
      // confetti if answer is correct
      explosion.current.start()
    } else {
      setToast({ type: 'error', message: 'Wrong answer. Please try again.' })
    }
  }

  function moveToNextLesson () {
    if (index + 1 > lessonData.length - 1) {
      navigation.navigate('Try')
    } else {
      flatListRef.current.scrollToIndex(
        { animated: true, index: index + 1 }
      )
      setIndex(prev => prev + 1)
    }
  }

  const keyExtractor = React.useCallback((item) => item.key.toString(), [])
  if (!lessonData) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size='large' color='green' />
      </View>
    )
  }
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.itemContainer, { width: width }]}>
        <View style={styles.progresscircle}>
          <ProgressCircle
            percent={parseInt(item.key) / lessonData.length * 100}
            radius={40}
            borderWidth={6}
            color='#98D7B4'
            shadowColor='#999'
            bgColor='#fff'
          >
            <Header style={{ fontSize: 30 }}>{item.key}</Header>
          </ProgressCircle>
        </View>

        {item.image ? <Image resizeMode='cover' source={{ uri: item.image }} style={styles.image} /> : null}
        <InfoCard item={item} />
        <MultipleChoice item={item} handleScroll={handleScroll} />
      </View>
    )
  }

  return (
    <Background>
      <FlatList
        ref={flatListRef}
        data={lessonData}
        keyExtractor={keyExtractor}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) =>
          ({
            length: width, offset: width * index, index
          })}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false
          }
        )}
        style={{ flex: 1 }}
        pagingEnabled
        horizontal
        decelerationRate='normal'
        scrollEventThrottle={16}
        renderItem={renderItem}
      />

      <ConfettiCannon
        count={100}
        origin={{ x: 200, y: -100 }}
        autoStart={false}
        ref={ref => { explosion.current = ref }}
        fallSpeed={1000}
        fadeOut onAnimationEnd={() => moveToNextLesson()}
      />
      <Toast {...toast} onDismiss={() => setToast({ value: '', type: toast.type })} />

    </Background>
  )
}

const styles = StyleSheet.create({
  text: {
    justifyContent: 'flex-end'
  },
  dotContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'center'
  },
  itemContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    flex: 6,
    zIndex: 1
  },
  image: {
    flex: 1,
    width: '92%',
    borderWidth: 5,
    borderRadius: 10,
    margin: 10,
    zIndex: 0
  },
  progresscircle: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    right: 3.5
  }
})
