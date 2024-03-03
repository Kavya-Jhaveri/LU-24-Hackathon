import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './app/screens/login';
import List from './app/screens/list';
import Details from './app/screens/Details';
import { useState, useEffect } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';
import FetchData from './src/filter';


const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name = "random1" component = {FetchData} />
      <InsideStack.Screen name = "random2" component = {Details} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  },[]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user?
          <Stack.Screen name = 'Inside' component = {InsideLayout} options={{headerShown:true}}/>
        :
          <Stack.Screen name = 'Login' component = {Login} options={{headerShown:false}}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

