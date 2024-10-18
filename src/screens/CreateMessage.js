import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomMenu from "../components/CustomMenu";
import colors from "../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchUser from "../components/SearchUser";

const CreateMessage = () => {
  const [keyWord, setKeyWord] = useState("");

  let arry = [];

  for (let i = 0; i < 30; i++) {

    arry.push(i)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-220}
    >

      <View style={styles.contentArea}>


      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={keyWord}
            onChangeText={setKeyWord}
            placeholder="Enter UserName"
          />
          <TouchableOpacity>
            <Icon name="search" size={32} color={colors.darkGray} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.footer}>
        {arry.map((index) => (
          <SearchUser key={index} />
        ))}
      </ScrollView>


      </View>
      <CustomMenu selected={"createMessage"} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  contentArea:{
    height:"100%",
    width:"100%"
  },
  header: {
    backgroundColor: colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "20%",
  },
  inputArea: {
    // backgroundColor:"red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  input: {
    // backgroundColor:"blue",
    width: "80%",
    height: "100%",
    borderBottomWidth: 2,
    borderBottomColor: colors.darkGray,
  },
  footer: {
    backgroundColor: colors.red,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width: "100%",
    // marginBottom: "25%",
    height:"60%"
  },
});

export default CreateMessage;
