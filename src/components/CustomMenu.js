import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors";

const CustomMenu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Icon name="message" size={40} color={colors.gray} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        {/* <Icon name="message-plus" size={40} color= {colors.gray}/> */}
        <Icon name="message-plus-outline" size={40} color={colors.gray} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Icon2 name="group" size={35} color={colors.gray} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Icon3 name="person-circle-outline" size={40} color={colors.gray} />
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
    paddingHorizontal:4
  },
  btn:{
    // backgroundColor:colors.white,
    padding:11,
    borderRadius:40,

  }
});

export default CustomMenu;
