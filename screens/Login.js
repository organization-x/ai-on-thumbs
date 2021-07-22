import React, {useState} from 'react';
import {TextInput, View, Text, Button, StyleSheet, SafeAreaView, Pressable} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';

//send POST request to backend to create user based on username, password, and email entered
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

  //convert user creation response to text
  const res_text = await res.text();

  //if user is not successfully created, display in a text component what the user did wrong
  if (res_text!="User Successfully Created"){
    setFailedSignUp(res_text);
  }
}

//save the username in SecureStore for persistent login
async function save(username) {
  await SecureStore.setItemAsync("isAuthenticated", username);
}

//check if the user has been previously authenticated
async function getAuthenticated() {

  //this should set the result of the query as the username if previously authenticated
  let result = await SecureStore.getItemAsync("isAuthenticated");

  if (result) {
    return result;
  } else {
    return 'Not Authenticated';
  }
}

//authenticate the username and password through the backend API through a post request
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

  //convert the response to text
  const res_text = await res.text();

  /* If the backend API successfully authenticated the user, store the username in SecureStore. Once stored, navigate to the welcome screen of the app. If not successfully authenticated, display that the authentication
  has not succeeded */
  
  if (res_text=="User Is Authenticated"){

    save(username);
    setUsernameVar(username);
    navigation.navigate("Welcome");

  } else {

    setFailedLogin(true);

  }

}

//when the login button is pressed
function onLoginPress(navigation, username, email, password, isLogin, setFailedLogin, setFailedSignUp, setUsernameVar){

  /*if the user is signing up, send a create user post request to the backend. Otherwise,
  authenticate the user */
  
  if (isLogin==false){
    createUser(username, email, password, setFailedSignUp)
  } else {
    authUser(username, password, navigation, setFailedLogin, setUsernameVar)
  }
  
}

//Checkbox functional component that acts as a radio button (whether the user wants to sign up or login)
function MyCheckbox({isLogin, setIsLogin, original_value}) {

  function onCheckmarkPress() {

    /*only if the checkbox is not checked should you be able to click it 
    (when its value doesn't match isLogin) since that is how a radio button acts */
    if (isLogin==(!original_value)){
      setIsLogin(!isLogin);
    }

  }

  /* For the checkbox, the original value is whether the box is checked in the beginning. The Login box is
  checked by default and the Signup box is not checked. If the original value is true, then the box is the Login box and thus should be checked when isLogin is true. Otherwise, if it is the Signup box, then it should be checked when isLogin is false. This acts like a radio button, since expo
  doesn't support prebuilt radio button components. */

  return (
    <Pressable
      style={[styles.checkboxBase, (original_value ? isLogin==true : isLogin==false) && styles.checkboxChecked]}
      onPress={onCheckmarkPress}>
      {(original_value ? isLogin==true : isLogin==false) && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

export default function Login({navigation, setUsernameVar}){

  //username, email, and password storing states
  const [username, onChangeUsername] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  //whether the user wants to login or sign up
  const [isLogin, setIsLogin] = useState(true);

  //state to store whether user authentication or user sign up failed
  const [failedLogin, setFailedLogin] = useState(false);
  const [failedSignUp, setFailedSignUp] = useState(null);

  //state to store whether the user has been previously authenticated on the app
  const [authenticated, setAuthenticated] = useState('');

    /*If the user has been previously authenticated, navigate to welcome screen 
    with the variable usernameVar as the username of the authenticated user */
    useEffect(()=>{
      async function persistLogin(){
        setAuthenticated(await getAuthenticated());
        if (authenticated!="Not Authenticated"){
          setUsernameVar(authenticated);
          navigation.navigate("Welcome");
        }
      }
      persistLogin();
    });
  
    return (
      <SafeAreaView>

        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Username"
        />

        { 
        //If the user is signing up, then show the email field, otherwise hide it
        (isLogin==false) ? (
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
        //if the user authentication failed, display the message
        (failedLogin) ? 
        (<Text style={styles.failedLoginStyle}>
          You may have entered the wrong username or password, please try again
        </Text>):null
        }

        {
        //if the django backend signup field validation failed, display what the user did wrong
        (failedSignUp)!='' ? 
        (<Text style={styles.failedLoginStyle}>
          {failedSignUp}
        </Text>):null
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
          onPress={()=>{onLoginPress(navigation, username, email, password, isLogin, setFailedLogin, setFailedSignUp, setUsernameVar)}}
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
