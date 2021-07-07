import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import FootPrint from '../components/FootPrint';
import ActionButton from "../components/ActionButton";
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import Toast from '../components/Toast';
import * as FileSystem from 'expo-file-system';
const axios = require('axios')
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
export default function Try({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [toast, setToast] = useState({ value: '', type: '' })
  const [startCamera,setStartCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const camera = useRef(null)
  const [loading, setLoading] = useState(true);
  const onUpload = async (text) => {
    const data = await sendFaceRequest(text)
    setImageBase64(data)
  }

  const sendFaceRequest = async (image_string) => {
    var res = await fetch("http://rohanjoshi2.herokuapp.com/image", 
      {method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        base_64: image_string
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    var data = await res.text()
    return data
  }
  useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);
    useEffect(() => {
        (async () => {
            setLoading(true)
            if(capturedImage && capturedImage.uri){
                const base64 = await FileSystem.readAsStringAsync(capturedImage.uri, { encoding: 'base64' });
                await onUpload(base64);
                setLoading(false);
            }
            else{
                setLoading(false)
            }
        })();
    }, [capturedImage]);

    if (hasPermission === null) {
        return <Background style={{justifyContent:"center"}}><ActivityIndicator size={100}/></Background>;
    }
    function openCamera(){
        setStartCamera(true)
    }
    async function takePhoto(){
            if (!camera.current){ 
            return null;
        }
            const photo = await camera.current.takePictureAsync();
            console.log("Photo" + photo)
            //setCapturedImage(photo);
            setStartCamera(false);
    }
    if(startCamera){
        return(<Camera
        style={{flex: 1,width:"100%", alignItems:"center", justifyContent:"flex-end"}}
        ref={(r) => {
        camera.current = r
        }}
        >
            <ActionButton style={{marginBottom:30}} onPress={async ()=> {await takePhoto()}} title={"Take Photo"} icon={<AntDesign name="camera" style={{marginLeft:5}} size={30} color="black" />}/>
        </Camera>)
    }
  return (
    <Background>
        <Header style= {[styles.left_align]}>Try it out!</Header>
        <FootPrint style={styles.left_align}>Use your own product in real life!</FootPrint>
        <ActionButton style={{marginTop:20}} onPress={()=>hasPermission?openCamera():setToast({ type: 'error', message: "Go to settings to enable the camera."})} title="Open Camera" icon={<AntDesign name="camera" style={{marginLeft:5}} size={30} color="black" />}/>
         {loading?<ActivityIndicator style={{marginTop:100,}}/>:imageBase64?
         <View style={styles.imageContainer}>
            <Image style={{width: 300, height: 400, marginTop:10}} source={{uri: `data:image/png;base64,${imageBase64}`}}/>
        </View>:null}
        
        <View style={styles.buttonView}>
            <ActionButton onPress={()=>navigation.navigate("Ad")} title="Done"/>
        </View>
        <Toast {...toast} onDismiss={() => setToast({ value: '', type: toast.type })} />
    </Background>
  );
}

const styles = StyleSheet.create({
    left_align:{
        alignSelf:"flex-start",
        marginLeft:10,
        marginVertical:5,
    },
    logo:{
      marginVertical: 50,
    },
    buttonView:{
        flex:1,
        width:"100%",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    imageContainer:{
        margin:30,
        flex:1,
        width:'100%',
        alignItems:"center",
    }
});
