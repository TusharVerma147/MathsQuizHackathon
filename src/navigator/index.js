import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,  useNavigationContainerRef, } from '@react-navigation/native';
import Splash from '../screens/splash';
import Login from '../screens/login';
import Home from '../screens/home';
import Levels from '../screens/levels';
import Game from '../screens/game';
import { ScreenNames } from './screenNames';


const Stack =createNativeStackNavigator();

const RootNavigator = () => {

  const navigationRef= useNavigationContainerRef();
  return (
    <NavigationContainer   ref={navigationRef}>
    <Stack.Navigator 
    screenOptions={{headerShown:false,  animation: 'slide_from_right',}}
    initialRouteName={ScreenNames.Splash }>
        <Stack.Screen name={ScreenNames.Splash}  component={Splash}/>
        <Stack.Screen name={ScreenNames.Login}  component={Login}/>
        <Stack.Screen name={ScreenNames.Home}  component={Home}/>
        <Stack.Screen name={ScreenNames.Levels}  component={Levels}/>
        <Stack.Screen name={ScreenNames.Game}  component={Game}/>
    
        {/* <Stack.Screen
            component={BottomTab}
            name={ScreenNames.BottomTab}
            options={{headerShown: false}}
          /> */} 

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;