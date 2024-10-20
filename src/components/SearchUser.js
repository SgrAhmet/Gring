import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from "../styles/colors";
import { auth } from "../../firebase";
import { avatarImages } from "./AvatarImages";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firestore";
import { useNavigation } from "@react-navigation/native";

const SearchUser = ({ userName, avatar, userUID }) => {
  const navigation = useNavigation()

  const handlePress = async () => {
    let data = {
      isGroup: false,
      groupName: "",
      members: [userName, "UserName2"],
      membersUIDs: [userUID, auth.currentUser?.uid],
      lastMessage: "",
      lastMessageTimeStamp: "",
      messages: [],
    };

    try {
      const ordersCollectionRef = collection(db, "Messages");
      await addDoc(ordersCollectionRef, data);
      navigation.navigate("ChatArea")
    } catch (error) {
      console.error("Error adding new order: ", error);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        userUID == auth.currentUser?.uid ? styles.displayNone : null,
      ]}
      onPress={handlePress}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={avatarImages[`avatar${avatar}`]}
      />
      <Text style={styles.txt}>{userName}</Text>
      {/* <Text style={styles.txt}>{userUID}</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  displayNone: {
    display: "none",
  },
  container: {
    // flex: 1,
    backgroundColor: colors.red,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
    width: "50%",
    height: 200,
    borderRadius: 20,
    elevation: 15,
    borderWidth: 5,
    borderColor: colors.white,
  },
  txt: {
    fontSize: 22,
    fontWeight: "500",
    color: colors.white,
  },
});

export default SearchUser;
