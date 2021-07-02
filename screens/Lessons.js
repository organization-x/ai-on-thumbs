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
import IDE from '../components/Ide';
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
  {
    key: '5',
    title: "What is a Variable?",
    description: "A variable is a box in which you can store different values. For example, you can store text, numbers, or even sequences of numbers/text in a variable. To assign a value to a variable, you use the single equal sign, or '='"
  },
  {
    key: '6',
    title: "Getting the Classifier and Image URL",
    description: "Here we will get the face detector, or CascadeClassifier object from the OpenCV library and store it in the faceCascade variable. \n An object is a little bit like a variable but has its own attributes and functions. For example, lets say we have a dog object. That dog has attributes, for example its color and breed, and functions like barking and sitting. The CascadeClassifier has important functions we will use later like detecting faces!"
  },
  {
    key: '7',
    title: "Getting the Classifier and Image URL",
    description: "Here we will get the face detector, or CascadeClassifier object from the OpenCV library and store it in the faceCascade variable. \n An object is a little bit like a variable but has its own attributes and functions. For example, lets say we have a dog object. That dog has attributes, for example its color and breed, and functions like barking and sitting. The CascadeClassifier has important functions we will use later like detecting faces!",
    code: "#get the cascade classifier from the cv2 filepath\nfaceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')"
  },
  {
    key: '8',
    title: "Getting the Classifier",
    description: "Here we will get the face detector, or CascadeClassifier object from the OpenCV library and store it in the faceCascade variable. \n An object is a little bit like a variable but has its own attributes and functions. For example, lets say we have a dog object. That dog has attributes, for example its color and breed, and functions like barking and sitting. The CascadeClassifier has important functions we will use later like detecting faces!",
    code: "#get the cascade classifier from the cv2 filepath\nfaceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')",
  },
  {
    key: '9',
    title: "Getting the Image URL",
    description: "We then put the image address/url of the image in a variable called url. The example url below is an image of a group of four people. If you want, you can also upload a picture of yourself to google colab and put the filepath instead of the url to run facial detection on images from your own computer.",
    code: "#url of the image\nurl = 'https://image.shutterstock.com/image-photo/young-successful-team-four-business-260nw-289449125.jpg'",
  },
  {
    key: '10',
    title: "Converting to OpenCV format",
    description: "However, we need to convert it to OpenCV format because we are using the OpenCV classifier. The io image comes in RGB color format and we convert it to BGR as that is the default for opencv. We use the cvtColor function to do this and pass in the parameters of the picture we want to convert and the new format",
    code: "#turn the image to cv2 BGR format \n picture = cv2.cvtColor(picture, cv2.COLOR_RGB2BGR)"
  },
  {
    key: '11',
    title: "Converting to Grayscale",
    description: "We also need to convert the image to grayscale, as the OpenCV model only works on grayscale faces. We use the same function as before to do this, except we use the format BGR2GRAY to convert the BGR format to grayscale.",
    code: "#convert picture to grayscale \n gray = cv2.cvtColor(picture, cv2.COLOR_BGR2GRAY)"
  },
  {
    key: '12',
    title: "Detect the Faces",
    description: `We execute the detectMultiScale method (a function of the faceCascade object we created before) to detect the faces. \n The first input is the grayscale image we want to use for detection.
    scaleFactor is used if the image is too large and we make it smaller by a factor of 1.1 as the face detector can only detect faces in a certain range of sizes.\n
    minNeighbors is one of the most important parameters in the model. Remember, the image is first split into many small sections before classification. If minNeighbors is 5, there must be 5 other parts, or sections, of a face around a certain section if that section can be classified as part of a face (because usually one part of the face is surrounded by other parts). If you make minNeighbors larger, than the model will be much more sure about the faces it detects but it might miss some faces. If you make this smaller, the model will detect more faces but it will also make more mistakes. \n
    minSize is the minimum size a face must be in order for it to be viable for detection.`,
    code: "# Detect faces in the image\nfaces = faceCascade.detectMultiScale(\ngray,\nscaleFactor=1.1,\nminNeighbors=5,\nminSize=(30, 30),\nflags = cv2.CASCADE_SCALE_IMAGE\n)"
  },
  {
    key: '13',
    title: "Detect the Faces",
    description: `We execute the detectMultiScale method (a function of the faceCascade object we created before) to detect the faces. \n The first input is the grayscale image we want to use for detection.
    scaleFactor is used if the image is too large and we make it smaller by a factor of 1.1 as the face detector can only detect faces in a certain range of sizes.\n
    minNeighbors is one of the most important parameters in the model. Remember, the image is first split into many small sections before classification. If minNeighbors is 5, there must be 5 other parts, or sections, of a face around a certain section if that section can be classified as part of a face (because usually one part of the face is surrounded by other parts). If you make minNeighbors larger, than the model will be much more sure about the faces it detects but it might miss some faces. If you make this smaller, the model will detect more faces but it will also make more mistakes. \n
    minSize is the minimum size a face must be in order for it to be viable for detection.`,
    code: "# Detect faces in the image\n faces = faceCascade.detectMultiScale(\ngray,\nscaleFactor=1.1,\nminNeighbors=5,\nminSize=(30, 30),\nflags = cv2.CASCADE_SCALE_IMAGE\n)"
  },
  {
    key: '14',
    title: "Display the Results",
    description: `We execute the detectMultiScale method (a function of the faceCascade object we created before) to detect the faces. \n The first input is the grayscale image we want to use for detection.
    scaleFactor is used if the image is too large and we make it smaller by a factor of 1.1 as the face detector can only detect faces in a certain range of sizes.\n
    minNeighbors is one of the most important parameters in the model. Remember, the image is first split into many small sections before classification. If minNeighbors is 5, there must be 5 other parts, or sections, of a face around a certain section if that section can be classified as part of a face (because usually one part of the face is surrounded by other parts). If you make minNeighbors larger, than the model will be much more sure about the faces it detects but it might miss some faces. If you make this smaller, the model will detect more faces but it will also make more mistakes. \n
    minSize is the minimum size a face must be in order for it to be viable for detection.`,
    code: "# Detect faces in the image\n faces = faceCascade.detectMultiScale(\ngray,\nscaleFactor=1.1,\nminNeighbors=5,\nminSize=(30, 30),\nflags = cv2.CASCADE_SCALE_IMAGE\n)"
  },
];
const Lessons = () => {
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
      {/* <FlatList
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
      /> */}
      <IDE text="Hello"/>
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

export default Lessons;