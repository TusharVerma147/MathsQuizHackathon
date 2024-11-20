import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

import {Icons} from '../../assets';
import { useRoute } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Levels = ({navigation}) => {
    const route = useRoute();
    const { name, operator } = route.params;
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
  
        <View style={styles.headerparent}>
          <View style={styles.header}>
            <TouchableOpacity> 
              <Image source={Icons.boy} style={styles.account} />
            </TouchableOpacity>
  
            <Text style={styles.user}>Hii! {name}</Text>
          </View>
          <Image source={Icons.app} style={styles.splashicon} />
          <Text style={styles.welcome}>Play according to difficulty Level!</Text>
        </View>
        <View style={styles.level}>
          <TouchableOpacity style={styles.plus} onPress={() => navigation.navigate('Game', { name, operator, level: 'Easy' })}>
            <Text style={styles.textoption}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subtract} onPress={() => navigation.navigate('Game', { name, operator, level: 'Medium' })}>
            <Text style={styles.textoption}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.division} onPress={() => navigation.navigate('Game', { name, operator, level: 'Difficult' })}>
            <Text style={styles.textoption}>Difficult</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
export default Levels;

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
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  welcome: {
    color: 'white',
    fontWeight: '800',
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 10,
    marginVertical: 20,
    alignSelf: 'center',
  },
  textoption: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  plus: {
    backgroundColor: '#9D2BB1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom:20
  },

  subtract: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom:20
  },
  division: {
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom:20
  },
level:{
    paddingHorizontal:30
}
});
