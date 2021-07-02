import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import FootPrint from '../components/FootPrint';
import CourseCard from '../components/CourseCard';
const DATA = [
  {
    id: "01",
    title: '01 Face Detection in Python',
    description: "Learn how to detect faces using the opencv library and python. No prior experience required.",
    require: require("../assets/01_course.jpg"),
  }
];
export default function Courses({navigation}) {
  return (
    <Background>
        <Header style= {styles.left_align}>Courses</Header>
        <FootPrint style= {styles.left_align}>No Experience Required</FootPrint>
        <FlatList
          data={DATA}
          renderItem={(item)=><CourseCard item={item.item} onPress={()=>navigation.navigate("Try")}/>}
          keyExtractor={item => item.id}
        />
    </Background>
  );
}

const styles = StyleSheet.create({
    left_align:{
      alignSelf:"flex-start",
      marginLeft:10,
      marginVertical:2,
  },
});
