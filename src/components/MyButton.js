import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MyButton = ({text,func,clr}) => {

    if(!clr){
        clr = "lightgreen"
    }

  return (

 
      <TouchableOpacity style={[styles.btn,{backgroundColor :clr}]} onPress={func}>
      <Text style={styles.txt}>{text}</Text>
      </TouchableOpacity>

  )
}


const styles = StyleSheet.create({
    btn:{
        backgroundColor:"red",
        padding:20,
        paddingHorizontal:40,
        borderRadius:20,
        // opacity:0.5,
        minWidth:150,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        shadowColor: 'black',
        // shadowOpacity:0.1,
        // shadowOffset:5,
        elevation:10
    },
    txt:{
        // fontStyle:"italic",

    }
});
export default MyButton