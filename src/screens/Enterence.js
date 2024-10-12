import React from "react";
import { StyleSheet, Text, TouchableOpacity,Button, View, Image } from "react-native";
import MyButton from "../components/MyButton";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/FontAwesome6';
import Toast from 'react-native-toast-message';

const Enterence = () => {
  const navigation = useNavigation();

  const showToast = () => {
    console.log("dskflsjdfs")
    Toast.show({
      type: 'error',
      text1: 'Hello',
      text2: 'This is some something 👋👋👋'
    });
  }


  return (
    <View style={styles.container}>
      {/* <Text>This is Enterence Screen!</Text> */}
      <Button
      title='Show toast'
      onPress={showToast}
    />
      <Image style={styles.smallLogo} source={require("../images/logo1.png")} />
      <Image style={{width:100,height:100,backgroundColor:colors.darkGray}} source={require("../images/logoIcon.png")} />

      <MyButton
        text={"Register"}
        func={() => navigation.navigate("Register")}
        clr={colors.primary}
      />
      <MyButton
        text={"Login"}
        func={() => navigation.navigate("Login")}
        clr={colors.primary}
      />
        <Icon name="house-chimney" size={24} color= {colors.primary}/>  
        <Toast 
         position='bottom'
         bottomOffset={200}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  smallLogo: {
    // backgroundColor:"red",
    width: 250,
    height: 100,
  },
  aaa: {
    backgroundColor: "lightgreen",
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
 
});
export default Enterence;
