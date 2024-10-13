import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, Image} from "react-native";
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
import { Link, useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';



const Login = () => {

  // const [mail, setMail] = useState("");
  const [mail, setMail] = useState("ahmet1aydos@gmail.com");
  // const [password, setPassword] = useState("");
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation()

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
          // Alert.alert(
          //   "Email Verification",
          //   "We send email vertification, please click that link."
          // );

          Toast.show({
            type: 'info',
            text1: 'Email Verification',
            text2: 'We send email vertification, please click that link.'
          });

        } else {
          setItem();
        }
      })
      .catch((error) => {
        if (error.code === "auth/missing-password") {
          // Alert.alert("", "lütfen Şifre Alanını doldurunuz");
          Toast.show({
            type: 'info',
            text1: 'Missing Password',
            text2: 'Please Enter Your Password'
          });
        } else if (error.code === "auth/invalid-email") {
          // Alert.alert("", "That email address is invalid!");
          Toast.show({
            type: 'info',
            text1: 'Invalid Email',
            text2: 'That email address is invalid!'
          });
        } else if (error.code === "auth/invalid-credential") {
          // Alert.alert("", "Şifre Yanlış");
          Toast.show({
            type: 'error',
            text1: 'Incorrect Password',
            text2: 'Your password is not correct'
          });
        } else {
          console.log(error);
        }
      });
  };

  const forgotPassword=()=>{
    if(mail.trim() == ""){
      Toast.show({
        type: 'error',
        text1: 'Missing Email',
        text2: 'Your email is missing'
      });
    }else{
      auth.sendPasswordResetEmail(mail)
      Toast.show({
        // type: 'sucse',
        text1: 'Password Reset',
        text2: 'We send password reset email.Please check your mail.'
      });
    }
  }
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
        <Text style={{ fontSize: 20, fontWeight: "300" }}>
          Welcome Back{" "}
          <Icon name="face-grin-hearts" size={25} color={colors.white} />
        </Text>
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

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Log In</Text>
        </TouchableOpacity>

      

        <TouchableOpacity style={{width:"100%"}} onPress={forgotPassword}>
        <Text style={styles.linkText}>Forgot your password click here!</Text>
        </TouchableOpacity>

        <View style={styles.bottomMenu}>
        <Text style={styles.txt}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
        <Text style={[styles.txt,{textDecorationLine:"underline",color:colors.primary}]}>SIGN UP</Text>
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
    position:"relative"
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
    marginTop:170
  },
  contentArea: {
    // backgroundColor: colors.red,
    width: "100%",
    height: "68%",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    gap: 20,
    marginTop:50
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
    textDecorationLine:"underline",
    color:colors.primary,
    textAlign:"right",
    // backgroundColor:"lightgreen",
    marginTop:-10,
    width:"90%"
  },
  bottomMenu:{
    // backgroundColor:"white",
    width:"80%",
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"center",
    gap:5
  },
  txt:{
    fontSize:16,
    fontWeight:"500"
  }
});

export default Login;
