import React, {useState} from 'react';
import {TextInput, View, Text, Button, StyleSheet, SafeAreaView, Pressable} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';

async function createUser(username, email, password, setFailedSignUp){

  const res = await fetch("https://invite.ai-camp.org/create", {
    method: 'POST',
    body: JSON.stringify(
      { username: username, email: email, password: password }
    ),
    headers: {
      "Content-type": "application/json",
    },

  });

  var res_text = await res.text();
  if (res_text!="User Successfully Created"){
    setFailedSignUp(res_text);
  }
}

async function save(username) {
  await SecureStore.setItemAsync("isAuthenticated", username);
}

async function getAuthenticated() {
  let result = await SecureStore.getItemAsync("isAuthenticated");
  if (result) {
    return result;
  } else {
    return 'Not Authenticated';
  }
}


async function authUser(username, password, navigation, setFailedLogin, setUsernameVar){
  const res = await fetch("https://invite.ai-camp.org/auth", {
    method: 'POST',
    body: JSON.stringify(
      { username: username, password: password }
    ),
    headers: {
      "Content-type": "application/json",
    },
  });

  const res_text = await res.text();

  if (res_text=="User Is Authenticated"){
    save(username);
    setUsernameVar(username);
    navigation.navigate("Welcome");
  } else {
    setFailedLogin(true);
  }

}

function MyCheckbox({isLogin, setIsLogin, original_value}) {

  function onCheckmarkPress() {
    if (isLogin==(!original_value)){
      setIsLogin(!isLogin);
    }
  }

  return (
    <Pressable
      style={[styles.checkboxBase, (original_value ? isLogin==true : isLogin==false) && styles.checkboxChecked]}
      onPress={onCheckmarkPress}>
      {(original_value ? isLogin==true : isLogin==false) && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

export default function Login({navigation, setUsernameVar}){

   const [username, onChangeUsername] = useState('');
   const [email, onChangeEmail] = useState('');
   const [password, onChangePassword] = useState('');

   const [isLogin, setIsLogin] = useState(true);

   const [failedLogin, setFailedLogin] = useState(false);

   const [failedSignUp, setFailedSignUp] = useState(null);

  const [authenticated, setAuthenticated] = useState('');


  
    useEffect(()=>{
      setAuthenticated(getAuthenticated());
      if (authenticated!="Not Authenticated"){
        setUsernameVar(authenticated);
        navigation.navigate("Welcome");
      }
    });
  

    return (
      <SafeAreaView>

        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Username"
        />

        { (isLogin==false) ? (
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        /> ):null
        }
        

        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />

        {
        failedLogin ? 
        (<Text style={styles.failedLoginStyle}>You may have entered the wrong username or password, please try again</Text>):null
        }

        {
        failedSignUp!='' ? 
        (<Text style={styles.failedLoginStyle}>{failedSignUp}</Text>):null
        }

        <View style={styles.checkboxContainer}>
          
          <MyCheckbox isLogin={isLogin} setIsLogin={setIsLogin} original_value={true}/> 

          <Text style={styles.checkboxLabel}>Log In</Text>

          <MyCheckbox isLogin={isLogin} setIsLogin={setIsLogin} original_value={false}/> 

          <Text style={styles.checkboxLabel}>Sign Up</Text>
        
        </View>


        <View style={styles.space}>
        <Button 
          title="Login"
          style={styles.button}
          onPress={()=>{(isLogin==false) ? createUser(username, email, password, setFailedSignUp):authUser(username, password, navigation, setFailedLogin, setUsernameVar)}}
        />
        </View>

      </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

  space: {
    marginBottom: 15,
    marginTop: 15,
    marginRight: 30,
    marginLeft: 30,
  },

  button: {
    marginBottom: 20,
    padding: 30,
  },

  checkboxContainer: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  failedLoginStyle: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },

  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
    marginLeft: 34,
    marginTop: 24,
    marginBottom: 24,
  },

  checkboxChecked: {
    backgroundColor: 'coral',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },

  checkboxLabel: {
    marginLeft: 8,
    fontWeight: "bold",
    fontSize: 24,
  },

});
