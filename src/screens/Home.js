import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import MyButton from "../components/MyButton";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  return (
    <View styles={styles.container}>

        <Text>Home Page</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.gray,
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
    },
  });
export default Home