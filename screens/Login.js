import {  KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button,Input, Image } from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () =>{

  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style= 'light' />
      <Image source={{
        uri: 
        "https://freepngimg.com/thumb/chat/158654-pic-chat-icon-free-clipart-hq.png",

      }} 
      style={{width: 200, height:200}}
      />
      <View style={styles.inputContainer}>
        <Input 
          placeholder='Email' 
          autoFocus 
          type='email' 
          value={email}
          onChangeText={(text) =>setEmail(text)}
        />
        <Input placeholder='Password' secureTextEntry type='password'
        value={password}
        onChangeText={(text) =>setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title='Login' />
      <Button containerStyle={styles.button} type='outline' title='Register' />
      <View style={{height:100}}/>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputContainer:{
    width:300,
  },
  button:{
    width:200,
    paddingTop:10,
  },
})