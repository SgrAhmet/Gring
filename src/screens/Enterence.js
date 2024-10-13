import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  Image,
} from "react-native";
import MyButton from "../components/MyButton";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";

// import Icon from 'react-native-vector-icons/FontAwesome6';
//  <Icon name="house-chimney" size={24} color= {colors.primary}/>

const Enterence = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../images/logoIcon.png")}
        />
      </View>

      {/* <Image style={styles.smallLogo} source={require("../images/logo1.png")} /> */}
      {/* <Image style={[styles.smallLogo,{backgroundColor:colors.gray}]} source={require("../images/logo2.png")} /> */}

      <View style={styles.welcomeArea}>
        <Text style={styles.wlcText}>Welcome To</Text>
        <Image
          style={{ width: 200, height: 80 }}
          source={require("../images/logo1.png")}
        />
      </View>

      <Text style={styles.txt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat
        augue in erat ultrices condimentum.
      </Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "900" }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: "center",
    // justifyContent: "center",
    // position:"relative",
    gap: 5,
  },
  topArea: {
    backgroundColor: colors.gray,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  welcomeArea: {
    // backgroundColor:"lightgreen",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  smallLogo: {
    width: 250,
    height: 100,
  },
  wlcText: {
    fontSize: 24,
    fontWeight: "800",
    // fontFamily:"sans-serif-medium"
  },
  txt: {
    // backgroundColor:"red",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 50,
    // padding:10
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 20,
    paddingHorizontal: 40,
    width: "90%",
    borderRadius: 20,
    elevation: 10,
    shadowColor: "black",
    position: "absolute",
    bottom: 50,
  },
});
export default Enterence;
