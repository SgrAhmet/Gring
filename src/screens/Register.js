import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { auth } from "../../firebase";
import Icon from "react-native-vector-icons/FontAwesome6";
import Toast from "react-native-toast-message";
import GoBack from "../components/GoBack";

const Register = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(mail, password)
      .then(() => {
        Alert.alert("", "User account created,please verify your email");
        auth.currentUser.sendEmailVerification();
        auth.signOut();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("", "That email address is already in use!");
        }
        if (error.code === "auth/invalid-email") {
          Alert.alert("", "That email address is invalid!");
        }
      });
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.contentArea}>

        <Text style={{ fontSize: 20, color: colors.primary }}>
          Welcome to Gring!
        </Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          value={mail}
          onChangeText={setMail}
          autoComplete={"email"}
          placeholder="Mail"

        />

        <View style={styles.passwordArea}>
          <TextInput
            style={styles.input}
            secureTextEntry={showPassword ? false : true}
            // inputMode="password"
            value={password}
            onChangeText={setPassword}
          placeholder="Password"

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
          onPress={() => navigation.navigate("Login")}
        >
          Have a account,click here!
        </Text>

        <MyButton
          text={"Register"}
          clr={colors.primary}
          func={handleRegister}
        />
      </View> */}

      <GoBack />

      <View style={styles.topArea}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../images/logoIcon.png")}
        />
        <Text style={styles.upperText}>Sign Up</Text>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Hello!</Text>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>
          Welcome to{" "}
          <Text style={[{ color: colors.primary, fontWeight: "500" }]}>G</Text>
          <Text>ring </Text>
          <Icon name="face-grin-hearts" size={25} color={colors.white} />
        </Text>
      </View>

      <View style={styles.contentArea}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
            placeholder="Username"
          />
        </View>

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

        <TouchableOpacity style={styles.btn} onPress={handleRegister}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Sign Up</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={{width:"100%"}} onPress={forgotPassword}>
  <Text style={styles.linkText}>Forgot your password click here!</Text>
  </TouchableOpacity> */}

        <View style={styles.bottomMenu}>
          <Text style={styles.txt}>Do you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={[
                styles.txt,
                { textDecorationLine: "underline", color: colors.primary },
              ]}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast
      //  position='bottom'
      //  bottomOffset={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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
    // position:"absolute",
    // top:0
    marginTop: 170,
  },
  contentArea: {
    // backgroundColor: colors.red,
    width: "100%",
    height: "68%",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    gap: 20,
    marginTop: 50,
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
  btn: {
    backgroundColor: colors.primary,
    width: "80%",
    padding: 15,
    borderRadius: 10,
    elevation: 10,
    display: "flex",
    alignItems: "center",
  },
  linkText: {
    fontSize: 15,
    fontWeight: "500",
    textDecorationLine: "underline",
    color: colors.primary,
    textAlign: "right",
    // backgroundColor:"lightgreen",
    marginTop: -10,
    width: "90%",
  },
  bottomMenu: {
    // backgroundColor:"white",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 5,
  },
  txt: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default Register;
