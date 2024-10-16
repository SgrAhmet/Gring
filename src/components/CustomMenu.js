import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";


const CustomMenu = ({selected}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={[styles.btn,{}]}>
       */}

       <TouchableOpacity style={[styles.btn, selected === "messages" && styles.selectedBtn]} onPress={()=>navigation.navigate("Home")}>
        <Icon name="message" size={38} color={colors.gray} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, selected === "createMessage" && styles.selectedBtn]} onPress={()=>navigation.navigate("CreateMessage")}>
        {/* <Icon name="message-plus" size={40} color= {colors.gray}/> */}
        <Icon name="message-plus-outline" size={40} color={colors.gray} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, selected === "createGroup" && styles.selectedBtn]} onPress={()=>navigation.navigate("CreateGroup")}>
        <Icon2 name="group" size={40} color={colors.gray} />
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Profile")}> */}
      <TouchableOpacity style={[styles.btn, selected === "profile" && styles.selectedBtn]} onPress={()=>navigation.navigate("Profile")}>
        <Icon3 name="person-circle-outline" size={40} color={colors.gray}/>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    position: "absolute",
    bottom: "1%",
    width: "80%",
    height: "8%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 40,
    paddingHorizontal:4,
    elevation:10
  },
  btn:{
    padding:10,
    borderRadius:40,

  },
  selectedBtn:{
    backgroundColor:colors.white,
    elevation:10
  }
});

export default CustomMenu;
