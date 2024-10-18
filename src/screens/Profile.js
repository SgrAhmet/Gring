import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import CustomMenu from '../components/CustomMenu';
import colors from '../styles/colors';
import { auth } from '../../firebase';
import MyButton from '../components/MyButton';

import {collection,getDocs,addDoc,deleteDoc,updateDoc,doc,query,where} from "firebase/firestore";
import {db} from "../../firestore"
import AsyncStorage from "@react-native-async-storage/async-storage";



const avatarImages = {
  man0: require('../images/avatars/man0.png'),
  man1: require('../images/avatars/man1.png'),
  man2: require('../images/avatars/man2.png'),
  man3: require('../images/avatars/man3.png'),
  man4: require('../images/avatars/man4.png'),
  man5: require('../images/avatars/man5.png'),
  man6: require('../images/avatars/man6.png'),
  // Diğer avatarlar da buraya eklenebilir
};




const Profile = () => {
const [useName, setUseName] = useState(null)
const [avatar, setAvatar] = useState("man0")

useEffect(() => {
  
  const getDocument= async () => {
    try {
      const querySnapshot = await getDocs(query(collection(db, "Users"),where("userUID","==",auth.currentUser?.uid)));
      console.log("querySnapShot is ")
      console.log(querySnapshot)
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));  
      console.log(data)
      setUseName(data[0].userName)
      setAvatar(`man${data[0].avatar}`)

    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  getDocument()

  
}, [])

 
  
useEffect(() => {
  
  console.log(avatar)

}, [avatar])


const handleSignOut = async () => {
  auth.signOut();
  try {
    await AsyncStorage.multiRemove(["mail", "password"]);
  } catch (error) {
    console.log(error);
  }
};
  
  return (
    <View style={styles.container}>

      <Text>Profile</Text>
      <Text>{useName ? useName : "Loading.."}</Text>
      <Image style={[styles.avatar,{}]} source={avatarImages[avatar]} />
      {/* <Image style={[styles.avatar,{}]} source={avatar} /> */}

     
     <MyButton text={"Sign Out"} clr={colors.primary} func={()=>handleSignOut()}/>

      <CustomMenu selected={"profile"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  avatar:{
    width:150,
    height:150
  }
});

export default Profile;