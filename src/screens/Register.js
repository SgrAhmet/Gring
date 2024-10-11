import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../styles/colors";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Register = () => {
  const navigate = useNavigation();
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentArea}>
        <Text style={{ fontSize: 20, color: colors.primary }}>
          Welcome to Gring!
        </Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput style={styles.input} value={mail} onChangeText={setMail} />

        <View style={styles.passwordArea}>
          <TextInput
            style={styles.input}
            secureTextEntry={showPassword ? false : true}
            // inputMode="password"
            value={password}
            onChangeText={setPassword}
          />

          <FontAwesome
            name="eye"
            size={30}
            color={colors.darkGray}
            style={[
              styles.eyeIcon,
              { color: !showPassword ? colors.gray : "black" },
            ]}
            onPress={togglePassword}
          />
        </View>

        <Text
          style={{ fontSize: 16, color: colors.white }}
          onPress={() => navigate.navigate("Login")}
        >
          Have a account,click here!
        </Text>

        <MyButton
          text={"Register"}
          clr={colors.primary}
          func={() => console.log(userName)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  contentArea: {
    backgroundColor: colors.gray,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  input: {
    backgroundColor: colors.white,
    padding: 10,
    paddingHorizontal: 20,
    width: 200,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 20,
  },
  passwordArea: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "15%",
    zIndex: 99,
  },
});
export default Register;
