import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import MyButton from "../components/MyButton";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const navigation = useNavigation();




  const getItem = async () => {
    try {
      const value = await AsyncStorage.multiGet(['mail', 'password'])
      if (value !== null) {
        console.log(value[0][1]);
        console.log(value[1][1]);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleSignOut=async()=>{
    auth.signOut()
    try {
     await AsyncStorage.multiRemove(['mail', 'password'])
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      {/* <Text>This is Home Screen!</Text> */}

      <Image style={styles.smallLogo} source={require("../images/logo.png")} />

      <MyButton text={"Home Page"}/>
      <MyButton text={auth.currentUser.uid} func={getItem}/>
      <MyButton text={auth.currentUser.email} />
      <MyButton text={"Sign Out"} clr={colors.red} func={handleSignOut}/>
   
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
