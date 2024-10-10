import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
import MyButton from '../components/MyButton';
import colors from '../styles/colors';

const Enterence = () => {

  const helloWorld =()=>{
    console.log("Hello World")
  }


  const merhabaDunya =()=>{
    console.log("Merhaba Dünya")
  }

  return (
    <View style={styles.container}>
      {/* <Text>This is Enterence Screen!</Text> */}


        <Image style={styles.smallLogo} source={require('../images/logo.png')}/>
        <MyButton text={""} func={merhabaDunya} clr={colors.primary}/>
        <MyButton text={""} func={merhabaDunya} clr={colors.white}/>
        <MyButton text={""} func={merhabaDunya} clr={colors.gray}/>
        <MyButton text={""} func={merhabaDunya} clr={colors.darkGray}/>
      

       
       
    
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
    gap:5
  },
  smallLogo:{
    // backgroundColor:"red",
    width:100,
    height:100
  }
});
export default Enterence