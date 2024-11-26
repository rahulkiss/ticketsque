import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from './Screens/LogInScreen';
import OtpVerifyScreen from './Screens/OtpVerifyScreen';
import EnterDetailScreen from './Screens/EnterDetailScreen';
import HomeScreen from './Screens/HomeScreen';


const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loginscreen">
        <Stack.Screen name="Loginscreen" component={LogInScreen} />
        <Stack.Screen name="otpverifyscreen" component={OtpVerifyScreen} />
        <Stack.Screen name="enterdetailscreen" component={EnterDetailScreen} />
        <Stack.Screen name="homescreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
