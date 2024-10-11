import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import MyButton from "../components/MyButton";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";

const Home = () => {
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      {/* <Text>This is Home Screen!</Text> */}

      <Image style={styles.smallLogo} source={require("../images/logo.png")} />

      <MyButton text={"Home Page"} />
      <MyButton text={auth.currentUser.uid}/>
      <MyButton text={auth.currentUser.email}/>
      <MyButton text={"Sign Out"} clr={colors.red} func={()=>auth.signOut()}/>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  smallLogo: {
    // backgroundColor:"red",
    width: 100,
    height: 100,
  },
  aaa: {
    backgroundColor: "lightgreen",
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
});
export default Home;
