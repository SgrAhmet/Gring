import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import MyButton from "../components/MyButton";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";

const Enterence = () => {
  const navigation = useNavigation();

  const deneme = () => {
    console.log("ahmet");
  };

  return (
    <View style={styles.container}>
      {/* <Text>This is Enterence Screen!</Text> */}

      <Image style={styles.smallLogo} source={require("../images/logo.png")} />

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
export default Enterence;
