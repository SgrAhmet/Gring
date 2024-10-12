import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const GoBack = ({clr}) => {

    const navigate = useNavigation()

    if(!clr){
        clr = colors.primary
    }

  return (

 
      <TouchableOpacity style={[styles.btn]} onPress={()=>navigate.goBack()}>
       <Icon name="arrow-left" size={40} color= {clr}/>
      </TouchableOpacity>

  )
}


const styles = StyleSheet.create({
    btn:{
        // backgroundColor:"red",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        // width:100,
        position:"absolute",
        top:40,
        left:20
    },
  
});
export default GoBack