import { StatusBar } from "expo-status-bar";
import { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "./firebase";
import {collection,getDocs,addDoc,deleteDoc,updateDoc,doc} from "firebase/firestore";

import {db} from "./firestore"


export default function App() {
  const [mail, setMail] = useState("mucahitfurkanaydos@gmail.com");
  const [password, setPassword] = useState("123456");

  const [data, setData] = useState(null)



useEffect(() => {
  const getDocument= async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Test"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));  
      setData(data)
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  getDocument()

}, [])




  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(mail, password)
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }


      });
  };



useEffect(() => {

  if(data){
    console.log("data is =")
    console.log(data[0].TestString) 
  }

 
}, [data])



  return (
    <View style={styles.container}>

      <Text style={styles.txt}>{mail}</Text>
      <Text style={styles.txt}>{password}</Text>

      <Text style={styles.txt}>{data ? data[0].TestString : "Loading"}</Text>
      <Text style={styles.txt}>{data ? data[0].TestNumber : "Loading"}</Text>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.btn}>Buttonnnn</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
