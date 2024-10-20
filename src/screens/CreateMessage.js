import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomMenu from "../components/CustomMenu";
import colors from "../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchUser from "../components/SearchUser";
import {collection,getDocs,addDoc,deleteDoc,updateDoc,doc,where,query,select} from "firebase/firestore";
import { db } from '../../firestore'; // Firebase yapılandırma dosyanızın yolu


const CreateMessage = () => {
  const [keyWord, setKeyWord] = useState("");
  const [userArray, setUserArray] = useState([]);

  let arry = [];

  // for (let i = 0; i < 3; i++) {
  //   arry.push(i)
  // }




  // const findUser =async()=>{
  //   setUserArray([])
  //   if(keyWord.trim() != ""){
  //     const usersCollection = collection(db, 'Users');
  
  //     // Tüm belgeleri al
  //     const querySnapshot = await getDocs(usersCollection);
    
  //     // Sadece 'userName' alanlarını al
  //     const userData = querySnapshot.docs.map((doc) => doc.data());
  //     userData.map((user)=>{
  //       if(user.userName.trim().toLowerCase().includes(keyWord.trim().toLocaleLowerCase())){
  //         // console.log(user)
  //         userArray.push(user)
  //         console.log(userArray)
  //       }
  //     }
  //     )
      
  //   }else{
  //     console.log("Please Enter keywod")
  //   }

  // }

  const findUser = async () => {
    setUserArray([]); // Önce array'i temizleyelim
    if (keyWord.trim() != "") {
      const usersCollection = collection(db, 'Users');
  
      // Tüm belgeleri al
      const querySnapshot = await getDocs(usersCollection);
  
      // Sadece 'userName' alanlarını al
      const userData = querySnapshot.docs.map((doc) => doc.data());
  
      // Arama kelimesini içeren kullanıcıları filtrele
      const filteredUsers = userData.filter((user) =>
        user.userName.trim().toLowerCase().includes(keyWord.trim().toLowerCase())
      );
      
      setUserArray(filteredUsers); // Filtrelenen kullanıcıları state'e ekleyelim

      userArray.map((user)=>(console.log(user.userName)))
    } else {
      console.log("Please Enter keyword");
    }
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-220}
    >

      <View style={styles.contentArea}>


      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={keyWord}
            onChangeText={setKeyWord}
            placeholder="Enter UserName"
          />
          <TouchableOpacity onPress={findUser}>
            <Icon name="search" size={32} color={colors.darkGray} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.footer}>
      {userArray.length > 0 ? (
    userArray.map((user, index) => (
      <SearchUser
        key={index}
        avatar={user.avatar}
        userName={user.userName}
        userUID={user.userUID}
        // messageBox={user.messageBox}
      />
    ))
  ) : (
    <Text style={styles.txt}>No Users Found</Text> // Eğer sonuç yoksa bilgilendirme mesajı
  )}
      </ScrollView>


      </View>
      <CustomMenu selected={"createMessage"} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  contentArea:{
    height:"100%",
    width:"100%"
  },
  header: {
    backgroundColor: colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "20%",
  },
  inputArea: {
    // backgroundColor:"red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  input: {
    // backgroundColor:"blue",
    width: "80%",
    height: "100%",
    borderBottomWidth: 2,
    borderBottomColor: colors.darkGray,
  },
  footer: {
    backgroundColor: colors.lightGray,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width: "100%",
    // marginBottom: 400,
    paddingBottom:"25%",
    marginTop:"2%"
    // height:"80%"
  },
  txt:{
    fontSize:20,
    fontWeight:"600",
    color:colors.red
  }
});

export default CreateMessage;
