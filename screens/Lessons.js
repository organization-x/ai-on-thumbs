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
const LessonData = [
  {
    key: '1',
    title: "Let's Build An AI Face Detector! 🤖",
    description:'In just a couple, simple lines of code you will be able to build your very own face detector where you can input a image url and the face detector will draw boxes around the faces before displaying the results of AI face detection.',
    image: require("../assets/01_01.png"),
    question: 'How does a for loop start?',
    multipleChoice: {'one':'sheee', 'two':'while', 'three':'herd', 'four':'A display of the image with only faces and everything else cropped out'},
    correctAnswer: 'sheee',
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
      if(index+1>LessonData.length-1){
        navigation.navigate("Try")
      }
      else{
        flatListRef.current.scrollToIndex({animated: true, index: index+1});
        setIndex(prev=>prev+1)
      }
    }
    else{
        setToast({ type: 'error', message: "Wrong answer. Please try again."})
    }
  }
    
  const renderItem = React.useCallback(
    ({ item }) => {
      return (
        <View style={[styles.itemContainer, { width: width }]}>
            <Header>Lesson {item.key}</Header>
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
        style={{height:"100%", backgroundColor:"green"}}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
      
      <ConfettiCannon
      count={100}
      origin={{x: 200, y: 0}}
      autoStart={false}
      ref={ref => (explosion.current = ref)}
      fallSpeed={2000}
      fadeOut
    />
    <Toast {...toast} onDismiss={() => setToast({ value: '', type: toast.type })} />
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

            }}
          />
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
    flex:1
  },
  image:{
      width:400,
      height:200,
      borderWidth:5,
      borderRadius:10,
      margin: 10,
  }
});