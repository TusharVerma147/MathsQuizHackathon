import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Icons } from '../../assets';
import CustomButton from '../../components/customButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Login = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleContinue = () => {
    if (name.trim() === '') {
      Alert.alert('Error', 'Please enter your name.');
    } else {
      navigation.navigate('Home', { name });
    }
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <View style={styles.top}>
          <Image style={styles.symbol} source={Icons.splash} />
          <Image style={styles.symbol1} source={Icons.math} />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.select}>Enter Your Name</Text>
          <View style={styles.search}>
            <TextInput
              placeholder="Enter Your Name"
              style={{ padding: 15, fontSize: 15, color: 'black', flex: 1 }}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <CustomButton
            title="Let's Go"
            onPress={handleContinue}
            style={{ marginTop: 20 }}
            textStyle={{ fontWeight: '700' }}
            borderRadius={50}
            backgroundColor={'#FFB800'}
            textColor='black'
          />
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#079FE0',
    paddingTop: 100,
  },
  symbol: {
    width: width/2,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  symbol1: {
    width: width,
    height:width/2.5,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    flex:1
  },
  search: {
    paddingHorizontal: 15,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  select: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});