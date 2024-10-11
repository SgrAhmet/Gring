import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View ,Alert} from "react-native";
import { auth } from "../../firebase";
import colors from "../styles/colors";
import { TextInput } from "react-native";
import MyButton from "../components/MyButton";
import { FontAwesome } from "@expo/vector-icons";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    
    auth.signInWithEmailAndPassword(mail,password).then(() => {
      Alert.alert("", "kullanıcı giriş yaptı");
    
    })
    .catch((error) => {
      if (error.code === "auth/missing-password") {
        Alert.alert("", "lütfen Şifre Alanını doldurunuz");
      }else if (error.code === "auth/invalid-email") {
        Alert.alert("", "That email address is invalid!");
      }else if(error.code === "auth/invalid-credential"){
        Alert.alert("", "Şifre Yanlış");
      }
      else{
        console.log(error)
      }

    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentArea}>
        <TextInput
          style={styles.input}
          value={mail}
          onChangeText={setMail}
          placeholder="Mail"
        />

        <View style={styles.passwordArea}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={showPassword}
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
        <MyButton func={handleLogin} text={"Login"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    width: 250,
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
export default Login;
