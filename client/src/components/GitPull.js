import React, { Button, View, Text} from 'react';
//import { TouchableOpacity, Text, Button, StyleSheet, View } from 'react-native'
//import { Actions } from 'react-native-router-flux'
import AntiClippyL from './AntiClippyL';
import * as Animatable from 'animated'
//route to add
const GitPull = () => {
   // const goToAdd = () => {
   //    Actions.gitAdd()
   // }
   return (
      <View style={styles.container}>
      <View style={styles.brownBox}>
      <Animatable.Text animation="zoomInDown"><Text style={styles.title}>Git Pull</Text></Animatable.Text>
      <View style={styles.circle1}>
      <AntiClippyL style={styles.AntiClippy}/> 
      <Text style={styles.p}>This adds any changes that have been made to the repo by someone else. Type <Text style={{ fontWeight: 'bold' }}>git pull</Text> to add these changes to your computer.</Text>
      
     
      </View>
      </View>
         <Button 
         //onPress = {goToAdd}
         title= "GitGoing to Git Add"
         color='#FF6D70'
         />
      </View>
        
         
   )
}
//style
const styles = {
   container: {
      flex: 1,
      backgroundColor: '#4A4843',
      alignItems: "center",      
    },
    
   title: {
      color: '#FF6D70',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: 60,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: 0,
    paddingTop: 75,
    
   },
   //white circle
  circle1: {
   backgroundColor: '#fff',
   width: 400,
   height: 400,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 100,
   borderColor: '#4A4843',
   borderWidth: 15,
   marginTop:60,
   flexDirection: 'row',
   alignItems: 'center',
   
 },
 //brown box
 brownBox: {
   backgroundColor: '#A79B82',
   width: 410,
   height:575,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 120,
   marginTop: 50,
   paddingBottom: 25,
 },

//logo
 AntiClippy: {
   flexDirection: 'row',
   alignItems: 'center',
 },

 
 button: {
    color:'#FF6D70',
    marginTop: 20,
 },
 p:{
    color: 'black',
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,

 },


 };
export default GitPull