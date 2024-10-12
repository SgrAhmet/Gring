import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, Image } from "react-native";
import { auth } from "../../firebase";
import colors from "../styles/colors";
import { TextInput } from "react-native";
import MyButton from "../components/MyButton";
// import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoBack from "../components/GoBack";

import Icon from "react-native-vector-icons/FontAwesome6";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

const Login = () => {
  const [mail, setMail] = useState("");
  // const [mail, setMail] = useState("ahmet1aydos@gmail.com");
  const [password, setPassword] = useState("");
  // const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const setItem = async () => {
    try {
      await AsyncStorage.multiSet([
        ["mail", mail],
        ["password", password],
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(mail, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          auth.currentUser.sendEmailVerification();
          auth.signOut();
          Alert.alert(
            "Email Verification",
            "We send email vertification, please click that link."
          );
        } else {
          setItem();
        }
      })
      .catch((error) => {
        if (error.code === "auth/missing-password") {
          Alert.alert("", "lütfen Şifre Alanını doldurunuz");
        } else if (error.code === "auth/invalid-email") {
          Alert.alert("", "That email address is invalid!");
        } else if (error.code === "auth/invalid-credential") {
          Alert.alert("", "Şifre Yanlış");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <View style={styles.container}>
      <GoBack />

      <View style={styles.topArea}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../images/logoIcon.png")}
        />
        <Text style={styles.upperText}>Log In</Text>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Hello!</Text>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Welcome Back <Icon name="face-grin-hearts" size={25} color={colors.white}/></Text>
      </View>

      <View style={styles.contentArea}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={mail}
            onChangeText={setMail}
            placeholder="Mail"
          />
        </View>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={showPassword}
          />

          <Icon
            name={showPassword ? "eye" : "eye-slash"}
            size={30}
            color={"black"}
            style={styles.eyeIcon}
            onPress={togglePassword}
          />
        </View>

        {/* <MyButton func={handleLogin} text={"Login"} clr={colors.primary} /> */}

            <TouchableOpacity>
              <Text>Log In</Text>
            </TouchableOpacity>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "space-between",
  },
  topArea: {
    // backgroundColor:"lightgreen",
    width: "100%",
    height: "32%",
    display: "flex",
    padding: 20,
    paddingHorizontal: 40,
    alignItems: "flext-start",
    justifyContent: "flex-end",
  },
  contentArea: {
    // backgroundColor: colors.red,
    width: "100%",
    height: "68%",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    gap: 20,
  },

  inputArea: {
    // backgroundColor: "blue",
    position: "relative",
    width: "80%",
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 2,
  },
  input: {
    // backgroundColor: colors.white,
    // padding: 10,
    // paddingHorizontal: 20,
    paddingVertical: 10,
    width: "85%",
    // borderRadius: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "15%",
    zIndex: 99,
  },
  upperText: {
    fontSize: 30,
    fontWeight: "900",
  },
});

export default Login;
