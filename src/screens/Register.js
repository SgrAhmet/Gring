import React from 'react'
import { StyleSheet, Text, View } from "react-native";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text>This is Register Screen!</Text>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Register