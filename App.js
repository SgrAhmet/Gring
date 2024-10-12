
import React, { useState,useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";




import Enterence from "./src/screens/Enterence"
import Login from "./src/screens/Login"
import Register from "./src/screens/Register"
import Home from "./src/screens/Home"

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    
    // Bellek sızıntısı olmaması için dinleyiciyi temizleme
    return unsubscribe;
  }, []);


useEffect(() => {
  
  const getItem = async () => {
    try {
      const value = await AsyncStorage.multiGet(['mail', 'password'])
      if (value[0][1] !== null || value[1][1] !== null) { //Veriler Null gelmiyorsa otomatik giriş yapıyor
        auth.signInWithEmailAndPassword(value[0][1],value[1][1])
      }
    } catch (error) {
      // console.log(error)
    }
  };

  getItem()

  
}, [])


  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
        {user ? (
          // Kullanıcı giriş yaptıysa
          <Stack.Screen name="Home" component={Home} />
        ) : (
          // Kullanıcı giriş yapmadıysa
          <>
            <Stack.Screen name="Enterence" component={Enterence} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "lightblue",
    padding: 20,
    paddingHorizontal: 40,
    fontSize: 24,
    borderRadius: 10,
    fontStyle: "italic",
  },
});
