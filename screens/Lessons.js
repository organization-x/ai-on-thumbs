import * as React from 'react';
import { useCallback, } from 'react';
import {
  View,
  Text,
  Animated,
  FlatList,
  Image,
  useWindowDimensions,
  StyleSheet,
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
import MultipleChoice from "../components/MultipleChoice"
import { TextInput } from 'react-native-paper';
import ConfettiCannon from 'react-native-confetti-cannon';
import IDE from '../components/Ide';
import FootPrint from '../components/FootPrint';
import Toast from '../components/Toast';
import ProgressCircle from 'react-native-progress-circle';
const LessonData = [
  {
    key: '1',
    title: "Let's Build An AI Face Detector! 🤖",
    description:'In just a couple, simple lines of code you will be able to build your very own face detector where you can input a image url and the face detector will draw boxes around the faces before displaying the results of AI face detection.',
    image: require("../assets/01_01.png"),
    question: 'How does a for loop start?',
    multipleChoice: {'one':'a', 'two':'while', 'three':'herd', 'four':'A display of the image with only faces and everything else cropped out'},
    correctAnswer: 'while',
  },
  {
    key: '2',
    title: "Let's Build An AI Face Detector! 🤖",
    description:'In just a couple, simple lines of code you will be able to build your very own face detector where you can input a image url and the face detector will draw boxes around the faces before displaying the results of AI face detection.',
    image: require("../assets/01_01.png"),
    question: 'How does a for loop start?',
    multipleChoice: {'one':'a', 'two':'while', 'three':'herd', 'four':'A display of the image with only faces and everything else cropped out'},
    correctAnswer: 'while',
  },
];
export default function Lessons({route, navigation}) {
  const { courseId } = route.params;
  const flatListRef = React.useRef();
  const explosion = React.useRef();
  const [toast, setToast] = React.useState({ value: '', type: '' });
  const { width } = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [advance, setAdvance] = React.useState();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  function handleScroll(advance){
    console.log(index)
    if(advance){
      //check that result is good
      explosion.current.start()
    }
    else{
        setToast({ type: 'error', message: "Wrong answer. Please try again."})
    }
  }
  function moveToNextLesson(){
    if(index+1>LessonData.length-1){
      navigation.navigate("Try")
    }
    else{
      flatListRef.current.scrollToIndex({animated: true, index: index+1});
      setIndex(prev=>prev+1)
    }
  }
    
  const renderItem = React.useCallback(
    ({ item }) => {
      return (
        <View style={[styles.itemContainer, { width: width }]}>
            <View style={{position:"absolute", top:0, zIndex:2, right:3.5}}>
              <ProgressCircle
                percent={parseInt(item.key)/LessonData.length*100}
                radius={40}
                borderWidth={6}
                color="#98D7B4"
                shadowColor="#999"
                bgColor="#fff">
                  <Header style={{fontSize:30}}>{item.key}</Header>
            </ProgressCircle>
          </View>
            {item.image?<Image resizeMode="cover" source={item.image} style={styles.image}/>:null}
            <InfoCard item={item}/>
            <MultipleChoice item={item} setAdvance={setAdvance} handleScroll={handleScroll}/>
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
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) => (
          {length: width, offset: width * index, index}
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        style={{flex:1}}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
      
      <ConfettiCannon
      count={100}
      origin={{x: 200, y: -100}}
      autoStart={false}
      ref={ref => (explosion.current = ref)}
      fallSpeed={1000}
      fadeOut onAnimationEnd={()=>moveToNextLesson()}
      />
    <Toast {...toast} onDismiss={() => setToast({ value: '', type: toast.type })} />
          
    </Background>
  );
};

const styles = StyleSheet.create({
  text: {
    justifyContent:"flex-end",
  },
  dotContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  itemContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    flex:6
  },
  image:{
      flex:1,
      width: '92%',
      borderWidth:5,
      borderRadius:10,
      margin: 10,
  },
});