import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "./screens/Welcome";
import Courses from "./screens/Courses";
import Lessons from "./screens/Lessons";
import Login from "./screens/Login";
import Try from "./screens/Try";
import Ad from "./screens/Ad";

const Stack = createStackNavigator();

export default function App() {

	const [usernameVar, setUsernameVar] = useState('');

  	return (
    	<NavigationContainer>
          	<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{ headerShown: false } 
			}>
				<Stack.Screen name="Login">
					{(props) => <Login {...props} setUsernameVar={setUsernameVar}/>}
				</Stack.Screen>
				<Stack.Screen name="Welcome">
					{(props) => <Welcome {...props} usernameVar={usernameVar}/>}
				</Stack.Screen>
				<Stack.Screen name="Courses" component={Courses} />
				<Stack.Screen name="Lessons" component={Lessons} />
				<Stack.Screen name="Try" component={Try} />
				<Stack.Screen name="Ad" component={Ad} />
			</Stack.Navigator>
      	</NavigationContainer>
  	);
};