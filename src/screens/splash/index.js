import {View, Text, StyleSheet, StatusBar, Image, Dimensions} from 'react-native';
import React, { useEffect } from 'react';

import {Icons} from '../../assets';


import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Splash = ({navigation}) => {

   useEffect(()=>{
    setTimeout(()=>{
   AsyncStorage.getItem('key').then((result)=>{
    if(result){
        navigation.navigate('Login')
    }
    else{
        navigation.navigate('Login')
    }
   }).catch((err)=>{
      console.log(err)
   });
    },2000)
   },[]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.logoview}>
      <Image style={styles.splashicon} source={Icons.splash} />
      <Text style={styles.easy}>Easy Math</Text>
      <View  style={styles.symbol}>
      <Image style={styles.footer} source={Icons.subtract} />
      <Image style={styles.footer} source={Icons.add} />
      </View>
      </View>
      <View style={{justifyContent:'flex-end'}}>
      <Image style={styles.splashicon} source={Icons.logo} />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#079FE0',
    alignItems: 'center',
    justifyContent:'space-evenly'
  },
  logoview:{
    paddingTop:width/5,
     alignItems:'center'
  },
  easy:{
      fontWeight:'bold',
      fontSize:30,
      color:'white'
  },
  symbol:{
    flexDirection:'row',
    marginTop:10,
  },
  splashicon: {
    width: 200,
    height: 200,
    resizeMode:'contain'
  },
});
