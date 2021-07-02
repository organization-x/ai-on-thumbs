import * as React from 'react';
import { useCallback } from 'react';
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
import { TextInput } from 'react-native-paper';
import ConfettiCannon from 'react-native-confetti-cannon';
import IDE from '../components/Ide';
import FootPrint from '../components/FootPrint';
const LessonData = [
  {
    key: '1',
    title: "Let's Build An AI Face Detector! 🤖",
    description:'In just a couple, simple lines of code you will be able to build your very own face detector where you can input a image url and the face detector will draw boxes around the faces before displaying the results of AI face detection.',
    image: require("../assets/01_01.png"),
  },
  {
    key: '2',
    title: 'Theory Behind the Model 🧐',
    description:
    "First the face detector splits the image into multiple small sections. For each section, it first runs a series of general facial tests. \n The sections that pass these tests move on to the next, more specific, facial tests and the ones that don't pass are disregarded. \n On the sections that the face detector is unsure about, it runs more and more tests (a total of 6000) until the face detector can be positive that the section is part of a face. It is like a cascade, or waterfall, of tests which is why the face detector we use is called a cascade classifier.",
    image: require("../assets/01_02.png"),
  },
  
  {
    key: '3',
    title: 'What is a library/Dependency? ',
    description:'You can think of a library as a bunch of external functions you can get and then use without programming them yourself. \n A function is just a series of code with a specific purpose that runs when you call it. Functions often have parameters, or inputs, that you pass into the function. For example, you pass the text you want to print out into your printer. \n To get these functions, you need to use an **import** statement to import, or get, these functions from an external source or folder. \n For example, if there is a library called tree that has a bunch of functions for growing trees, such as water plant and give soil, then you can get these functions by importing the library.',
    image: require("../assets/01_03.png"),
  },
  {
    key: '4',
    title: 'Dependencies',
    description:'First we will import the dependencies, or libraries, necessary for this project. The dependencies are OpenCV for the face detector, skimage for reading an image from a url, and cv2_imshow for displaying the image in this notebook.',
    code: "#import dependencies \n import cv2 \n from skimage import io \n from google.colab.patches import cv2_imshow",
    image: require("../assets/01_04.png"),
  },
  {
    key: '5',
    title: "What is a Variable?",
    description: "A variable is a box in which you can store different values. For example, you can store text, numbers, or even sequences of numbers/text in a variable. To assign a value to a variable, you use the single equal sign, or '='",
    image: require("../assets/01_05.png"),
  },
  {
    key: '6',
    title: "Getting the Classifier and Image URL",
    description: "Here we will get the face detector, or CascadeClassifier object from the OpenCV library and store it in the faceCascade variable. \n An object is a little bit like a variable but has its own attributes and functions. For example, lets say we have a dog object. That dog has attributes, for example its color and breed, and functions like barking and sitting. The CascadeClassifier has important functions we will use later like detecting faces!",
    image: require("../assets/01_08.jpg"),
  },
  {
    key: '7',
    title: "Getting the Classifier and Image URL",
    description: "Here we will get the face detector, or CascadeClassifier object from the OpenCV library and store it in the faceCascade variable. \n An object is a little bit like a variable but has its own attributes and functions. For example, lets say we have a dog object. That dog has attributes, for example its color and breed, and functions like barking and sitting. The CascadeClassifier has important functions we will use later like detecting faces!",
    code: "#get the cascade classifier from the cv2 filepath\nfaceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')",
    image: require("../assets/01_07.png"),
  },
  {
    key: '8',
    title: "Getting the Classifier",
    description: "Here we will get the face detector, or CascadeClassifier object from the OpenCV library and store it in the faceCascade variable. \n An object is a little bit like a variable but has its own attributes and functions. For example, lets say we have a dog object. That dog has attributes, for example its color and breed, and functions like barking and sitting. The CascadeClassifier has important functions we will use later like detecting faces!",
    code: "#get the cascade classifier from the cv2 filepath\nfaceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')",
    image: require("../assets/01_08.jpg")
  },
  {
    key: '9',
    title: "Getting the Image URL",
    description: "We then put the image address/url of the image in a variable called url. The example url below is an image of a group of four people. If you want, you can also upload a picture of yourself to google colab and put the filepath instead of the url to run facial detection on images from your own computer.",
    code: "#url of the image\nurl = 'https://image.shutterstock.com/image-photo/young-successful-team-four-business-260nw-289449125.jpg'",
    image: require("../assets/01_09.png")
  },
  {
    key: '10',
    title: "Converting to OpenCV format",
    description: "However, we need to convert it to OpenCV format because we are using the OpenCV classifier. The io image comes in RGB color format and we convert it to BGR as that is the default for opencv. We use the cvtColor function to do this and pass in the parameters of the picture we want to convert and the new format",
    code: "#turn the image to cv2 BGR format \n picture = cv2.cvtColor(picture, cv2.COLOR_RGB2BGR)",
    image: require("../assets/01_10.jpg")
  },
  {
    key: '11',
    title: "Converting to Grayscale",
    description: "We also need to convert the image to grayscale, as the OpenCV model only works on grayscale faces. We use the same function as before to do this, except we use the format BGR2GRAY to convert the BGR format to grayscale.",
    code: "#convert picture to grayscale \n gray = cv2.cvtColor(picture, cv2.COLOR_BGR2GRAY)",
    image: require("../assets/01_11.jpg")
  },
  {
    key: '12',
    title: "Detect the Faces",
    description: `We execute the detectMultiScale method (a function of the faceCascade object we created before) to detect the faces. \n The first input is the grayscale image we want to use for detection.
    scaleFactor is used if the image is too large and we make it smaller by a factor of 1.1 as the face detector can only detect faces in a certain range of sizes.\n
    minNeighbors is one of the most important parameters in the model. Remember, the image is first split into many small sections before classification. If minNeighbors is 5, there must be 5 other parts, or sections, of a face around a certain section if that section can be classified as part of a face (because usually one part of the face is surrounded by other parts). If you make minNeighbors larger, than the model will be much more sure about the faces it detects but it might miss some faces. If you make this smaller, the model will detect more faces but it will also make more mistakes. \n
    minSize is the minimum size a face must be in order for it to be viable for detection.`,
    code: "# Detect faces in the image\nfaces = faceCascade.detectMultiScale(\ngray,\nscaleFactor=1.1,\nminNeighbors=5,\nminSize=(30, 30),\nflags = cv2.CASCADE_SCALE_IMAGE\n)",
    image: require("../assets/01_05.png"),
  },
  {
    key: '13',
    title: "Detect the Faces",
    description: `We execute the detectMultiScale method (a function of the faceCascade object we created before) to detect the faces. \n The first input is the grayscale image we want to use for detection.
    scaleFactor is used if the image is too large and we make it smaller by a factor of 1.1 as the face detector can only detect faces in a certain range of sizes.\n
    minNeighbors is one of the most important parameters in the model. Remember, the image is first split into many small sections before classification. If minNeighbors is 5, there must be 5 other parts, or sections, of a face around a certain section if that section can be classified as part of a face (because usually one part of the face is surrounded by other parts). If you make minNeighbors larger, than the model will be much more sure about the faces it detects but it might miss some faces. If you make this smaller, the model will detect more faces but it will also make more mistakes. \n
    minSize is the minimum size a face must be in order for it to be viable for detection.`,
    code: "# Detect faces in the image\n faces = faceCascade.detectMultiScale(\ngray,\nscaleFactor=1.1,\nminNeighbors=5,\nminSize=(30, 30),\nflags = cv2.CASCADE_SCALE_IMAGE\n)",
    image: require("../assets/01_07.png")
  },
  {
    key: '14',
    title: "Display Number of Faces Found",
    description: `The display will first output the length of the list of faces, or the number of faces, to the user. This uses python's built in "print" function that can output text or variables. \n\n

    To find the length of a sequence, we use the len() function passing in the parameter of faces, which is the sequence we want to find the length of.\n\n
    
    We then use string formatting to print out len(faces) along with the text. String formatting starts with a "f" character at the beginning of the string and places whatever variables you want to print out in curly braces.`,
    code: `#print the number of faces found\nprint(f"Found {len(faces)} faces!")`,
    image: require("../assets/01_09.png")
  },
  {
    key: '15',
    title: "Add Rectangles Around Faces",
    description: `We want to draw rectangles around the faces. The following code is exactly how it looks like. (x,y,w,h) is a pair where x and y are the coordinates of the top left corner of the rectangles for each face and w and h are the height and width. For each pair in the sequence of identified faces, use the cv2.rectangle function to draw a rectangle around it. The cv2.rectangle function takes the picture, the x and y coordinates of the top left corner and bottom left corner, the RGB color, and thickness of rectangle border.`,
    code: `# Draw a rectangle around the faces\nfor (x, y, w, h) in faces:\ncv2.rectangle(picture, (x, y), (x+w, y+h), (0, 255, 0), 2)`,
    image: require("../assets/01_01.png")
  },
  {
    key: '16',
    title: "Show the Image",
    description: `Finally, the function cv2_imshow is used to display the picture to the screen including the rectangles drawn`,
    code: `#show the image with the rectangle drawn around it\ncv2_imshow(picture)`,
    image: require("../assets/01_04.png")
  },
];
export default function Lessons({navigation}) {
  const flatListRef = React.useRef()
  const explosion = React.useRef()
  const { width } = useWindowDimensions();
  const [index, setIndex] = React.useState(0)
  const [codeString, setCodeString] = React.useState(()=>{
    let array = []
    for (let index = 0; index < LessonData.length; index++) {
      array.push("")
    }
    return array
  })
  const scrollX = React.useRef(new Animated.Value(0)).current;
  function handleScroll(){
    console.log(index)
    //check that result is good
    if(index+1>LessonData.length-1){
      navigation.navigate("Try")
    }
    else{
      explosion.current.start()
      flatListRef.current.scrollToIndex({animated: true, index: index+1});
      setIndex(prev=>prev+1)
    }
    
  }
  const renderItem = React.useCallback(
    ({ item }) => {
      return (
        <View style={[styles.itemContainer, { width: width }]}>
            <FootPrint style={{color:"black", }}>Lesson {item.key}</FootPrint>
            {item.image?<Image resizeMode="cover" source={item.image} style={styles.image}/>:null}
            <InfoCard item={item}/>
            <TextInput label="Code" mode="outlined" multiline selectionColor="black"
            theme={{ colors: { primary: 'black'}}}
            underlineColor="transparent" autoCapitalize={"none"} style={{height:80, width:"90%"}} />
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
      <ConfettiCannon
        count={100}
        origin={{x: 200, y: 0}}
        autoStart={false}
        ref={ref => (explosion.current = ref)}
        fallSpeed={2000}
        fadeOut
      />
      {/*  */}
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