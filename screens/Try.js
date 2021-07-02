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


export default function Try({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [toast, setToast] = useState({ value: '', type: '' })
  const [startCamera,setStartCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const camera = useRef(null)
  const [loading, setLoading] = useState(true);
  
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
                axios.post('http://python-detect-faces.herokuapp.com/image', {
                    "base_64":base64
                  })
                  .then(function (response) {
                    console.log(JSON.parse(response.config.data).base_64);
                    setImageBase64(JSON.parse(response.config.data).base_64)
                    setLoading(false)
                  })
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
            if (!camera.current) return
            const photo = await camera.current.takePictureAsync();
            setCapturedImage(photo);
            setStartCamera(false);
    }
    if(startCamera){
        return(<Camera
        style={{flex: 1,width:"100%", alignItems:"center", justifyContent:"flex-end"}}
        ref={(r) => {
        camera.current = r
        }}
        >
            <ActionButton style={{marginBottom:30}} onPress={takePhoto} title={"Take Photo"} icon={<AntDesign name="camera" style={{marginLeft:5}} size={30} color="black" />}/>
        </Camera>)
    }
  return (
    <Background>
        <Header style= {[styles.left_align]}>Try it out!</Header>
        <FootPrint style={styles.left_align}>Use your own product in real life!</FootPrint>
        <ActionButton style={{marginTop:20}} onPress={()=>hasPermission?openCamera():setToast({ type: 'error', message: "Go to settings to enable the camera."})} title="Open Camera" icon={<AntDesign name="camera" style={{marginLeft:5}} size={30} color="black" />}/>
        {capturedImage?
        <View style={styles.imageContainer}>
            <FootPrint>{loading?"Result is loading.":"Result is complete."}</FootPrint>
            <Image
          style={{width: 300, height: 400, marginTop:10}}
          source={{uri: imageBase64?`data:image/jpeg;base64,${imageBase64}`:capturedImage.uri}}/>
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
