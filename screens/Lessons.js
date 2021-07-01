import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import {
  ScalingDot,
  SlidingBorder,
  ExpandingDot,
  SlidingDot,
} from 'react-native-animated-pagination-dots';
import ActionButton from '../components/ActionButton';
import Background from '../components/Background';
import InfoCard from '../components/InfoCard'
import Header from "../components/Header"
import ConfettiCannon from 'react-native-confetti-cannon';
const LessonData = [
  {
    key: '1',
    title: "Let's Build An AI Face Detector! 🤖",
    description:'In just a couple, simple lines of code you will be able to build your very own face detector where you can input a image url and the face detector will draw boxes around the faces before displaying the results of AI face detection.',
    image: require("../assets/01_01.png")
  },
  {
    key: '2',
    title: 'Theory Behind the Model 🧐',
    description:
    "First the face detector splits the image into multiple small sections. For each section, it first runs a series of general facial tests. \n The sections that pass these tests move on to the next, more specific, facial tests and the ones that don't pass are disregarded. \n On the sections that the face detector is unsure about, it runs more and more tests (a total of 6000) until the face detector can be positive that the section is part of a face. It is like a cascade, or waterfall, of tests which is why the face detector we use is called a cascade classifier.",
    image: require("../assets/01_02.png")
  },
  
  {
    key: '3',
    title: 'What is a library/Dependency? ',
    description:'You can think of a library as a bunch of external functions you can get and then use without programming them yourself. \n A function is just a series of code with a specific purpose that runs when you call it. Functions often have parameters, or inputs, that you pass into the function. For example, you pass the text you want to print out into your printer. \n To get these functions, you need to use an **import** statement to import, or get, these functions from an external source or folder. \n For example, if there is a library called tree that has a bunch of functions for growing trees, such as water plant and give soil, then you can get these functions by importing the library.',
    image: require("../assets/01_03.png")
    
  },
  {
    key: '4',
    title: 'Dependencies',
    description:'First we will import the dependencies, or libraries, necessary for this project. The dependencies are OpenCV for the face detector, skimage for reading an image from a url, and cv2_imshow for displaying the image in this notebook.',
    code: "#import dependencies \n import cv2 \n from skimage import io \n from google.colab.patches import cv2_imshow",
  },
];
const App = () => {
  const flatListRef = React.useRef()
  const explosion = React.useRef()
  const { width } = useWindowDimensions();
  const [index, setIndex] = React.useState(1)
  const scrollX = React.useRef(new Animated.Value(0)).current;
  function handleScroll(){
    console.log(index)
    flatListRef.current.scrollToOffset({ animated: true, offset: width*index })
    if(index<LessonData.length){setIndex(prev=>prev+1)}
    //explosion.current.start()
  }
  const renderItem = React.useCallback(
    ({ item }) => {
      return (
        <View style={[styles.itemContainer, { width: width }]}>
            <Header>Course {index}</Header>
            {item.image?<Image resizeMode="cover" source={item.image} style={styles.image}/>:null}
          <InfoCard item={item}/>
        </View>
      );
    },
    [width]
  );
  const keyExtractor = React.useCallback((item) => item.key, []);
  return (
    <Background>
      <FlatList
        ref={flatListRef}
        data={LessonData}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        style={{height:"100%"}}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
      <View style={styles.text}>
        <View style={styles.dotContainer}>
          <ExpandingDot
            data={LessonData}
            expandingDotWidth={30}
            scrollX={scrollX}
            inActiveDotColor={'#55CE8C'}
            activeDotColor={'#1FBD67'}
            inActiveDotOpacity={0.5}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 3,
              marginTop:10,
              marginBottom:0
            }}
          />
        </View>
      </View>
      <ActionButton title={"Continue"} onPress={()=>handleScroll()}/>
      {/* <ConfettiCannon
        count={100}
        origin={{x: 200, y: 0}}
        autoStart={false}
        ref={ref => (explosion.current = ref)}
        fallSpeed={2000}
        fadeOut
      /> */}
    </Background>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent:"flex-end"
  },
  dotContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flex:1
  },
  image:{
      width:400,
      height:200,
      borderWidth:5,
      borderRadius:10
  }
});

export default App;



// start here: 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