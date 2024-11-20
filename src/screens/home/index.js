import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

import {Icons} from '../../assets';
import { useRoute } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Home = ({navigation}) => {
  const route = useRoute();
  const {name} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <View style={styles.headerparent}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={Icons.boy} style={styles.account} />
          </TouchableOpacity>

          <Text style={styles.user}>Hii! {name} </Text>
        </View>
        <Image source={Icons.app} style={styles.splashicon} />
        <Text style={styles.welcome}>
          Welcome! Choose according to your choice
        </Text>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.plus} onPress={() => navigation.navigate('Levels', { name, operator: 'plus' })}>
          <Text style={styles.textoption}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subtract} onPress={() => navigation.navigate('Levels', { name, operator: 'subtract' })}>
          <Text style={styles.textoption}>−</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.division} onPress={() => navigation.navigate('Levels', { name, operator: 'division' })}>
          <Text style={styles.textoption}>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.multiply} onPress={() => navigation.navigate('Levels', { name, operator: 'multiply' })}>
          <Text style={styles.textoption}>x</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#079FE0',
  },
  headerparent: {
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  account: {
    height: 40,
    width: 40,
    // tintColor: 'black',
  },
  track: {
    color: 'white',
    fontWeight: '600',
    fontSize: 30,
    alignSelf: 'center',
  },
  user: {
    color: 'white',
    fontWeight: '800',
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 10,
  },
  splashicon: {
    width: 200,
    height: 100,
    resizeMode:'contain',
    alignSelf:'center'
  },
  welcome: {
    color: 'white',
    fontWeight: '800',
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 10,
    marginVertical:20,
    alignSelf:'center'
  },
  textoption:{
    color:'white',
    fontSize:30,
    fontWeight:'bold'
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding:20,
  },
  plus:{
    backgroundColor:'#9D2BB1',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:60,
    paddingVertical:40,
    borderRadius:20
  },
  
  subtract:{
    backgroundColor:'#E91E63',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:60,
    paddingVertical:40,
    borderRadius:20
  },
  division:{
    backgroundColor:'#4CAF50',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:60,
    paddingVertical:40,
    borderRadius:20
  },
  multiply:{
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:60,
    paddingVertical:40,
    borderRadius:20
  }
});
