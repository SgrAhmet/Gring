import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const CustomMenu = () => {
  return (
    <View styles={styles.container}>
      <Text styles={styles.txt}>CustomMenu</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        
    },
    txt:{
        color:"white"
    }
});

export default CustomMenu;
