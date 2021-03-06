import React, {Component, Button, Form, TextInput, View, Text} from 'react';
//import { TouchableOpacity, Text, Button, StyleSheet, View } from 'react-native';
//import { Actions } from 'react-native-router-flux';
//import { TextInput } from "react-native";
import AntiClippyHalf from './AntiClippyHalf';
//import {Form} from 'native-base';
import fire from '../db/fire';
//import * as Animatable from 'react-native-animatable';++
import * as Animatable from 'animated';

// const goToGitInit = () => {
//    Actions.gitInit()
// }

export default class InputBox extends Component {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }
  
render(){
   return (
    
      <View style={styles.container}>
      <View style={styles.textBox1}>
      <View style={styles.circle}>
      <Animatable.View animation="fadeInDown"><AntiClippyHalf style={styles.AntiClippyHalf}/></Animatable.View>
      <Animatable.Text animation="rubberBand"><Text style={styles.title}>GitGoing</Text></Animatable.Text>
      </View>
      <Form>
      <View style={styles.textInput1}>
      <TextInput 
                onChangeText={(text) => this.setState({email: text})} 
                placeholder = "Email"
                value={this.state.email} 
                autoCorrect = {false}
                autoCapitolize = "none"
                />
      </View> 
      <View style={styles.textInput}>
      <TextInput 
                    onChangeText={(text) => this.setState({password: text})} 
                    placeholder = "Password"
                    value={this.state.password} 
                    secureTextEntry = {true}
                    autoCorrect = {false}
                    autoCapitalize = "none"
                />
      </View> 
      <View>
        <Button 
            title= "LogIn"
            full
            rounded
            success
            onPress = {() => fire.loginUser(this.state.email, this.state.password)}
            color= "#FF6D70"
        />
        </View>
        <View>
        <Button 
            title= "SignUp"
            full
            rounded
            success
            onPress = {() => fire.signUpUser(this.state.email, this.state.password)}
            color= "#FF6D70"  
        />   
      </View>
      </Form>
      </View> 
         <Button 
         //onPress = {goToGitInit}
         title= "GitGoing to Git Init"
         color='#FF6D70'
         />  
      <Text style={styles.p}>Would you like to learn more?</Text>
      </View>
     
   )
}
}
const styles = {
   container: {
      flex: 2,
      backgroundColor: '#4A4843',
      alignItems: "center",      
    },
    
   title: {
      color: '#FF6D70',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: 0,
    marginBottom: 0,
   },
   //white circle
  circle: {
   backgroundColor: '#fff',
   width: 400,
   height: 400,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 200,
   borderColor: '#4A4843',
   borderWidth: 25,
   marginTop:220,
   
 },
 //brown box
 textBox1: {
   backgroundColor: '#A79B82',
   width: 500,
   height: 350,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 30,
   marginTop: 50,
 },

//logo
 AntiClippyHalf: {
   flex: 1
 },

 //username
 textInput1: {
   color: 'black',
   borderWidth: 2,
   borderColor: 'black',
   backgroundColor: '#FFF',
   borderRadius: 20,
   width: 200,
   marginTop: 0,
   alignItems: 'center',   
   
 },

 //password
 textInput: {
   color: 'black',
   borderWidth: 2,
   borderColor: 'black',
   backgroundColor: '#FFF',
   borderRadius: 20,
   width: 200,
   marginTop: 10,
   marginBottom: 20,
   alignItems: 'center',
 },

 p:{
    color: 'white',
 },


 };
