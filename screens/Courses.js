import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import FootPrint from '../components/FootPrint'
import CourseCard from '../components/CourseCard'

export default function Courses ({ navigation }) {
  const [courses, setCourses] = useState([])

  const get_courses = async () => {
    const res = await fetch('https://invite.ai-camp.org/courses', {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      }
    })
    const data = await res.json()
    const new_courses = await data.courses
    setCourses(new_courses)
  }

  useEffect(() => { get_courses() }, [])

  return (
    <Background>
      <Header style={styles.left_align}>Courses</Header>
      <FootPrint style={styles.left_align}>No Experience Required</FootPrint>

      <FlatList
        style={styles.list}
        data={courses}
        renderItem={(item) =>
          <CourseCard
            item={item.item} onPress={() => {
              navigation.navigate('Lessons', {
                courseId: item.item.id
              })
            }}
          />}
        keyExtractor={item => item.id.toString()}
      />
    </Background>
  )
}

const styles = StyleSheet.create({
  left_align: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginVertical: 2
  },
  list: {
    width: '90%'
  }
})
