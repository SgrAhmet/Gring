import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import MyButton from "../components/MyButton";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoBack from "../components/GoBack";
import { ScrollView } from "react-native";
import CustomMenu from "../components/CustomMenu";
import MessageBox from "../components/MessageBox";


const Home = () => {
  const navigation = useNavigation();




  // auth.signOut()

  console.log(auth.currentUser?.uid)



  return (
    <View style={styles.container}>

      <View style={styles.content}>


      <View style={styles.topArea}>
        <Text style={{fontSize:20,opacity:0.4,fontWeight:"300",color:colors.darkGray}}>Hello,</Text>
      <Text style={{fontSize:25,fontWeight:"500",color:colors.darkGray}}>{auth.currentUser?.uid}</Text>
      </View>

      <ScrollView style={styles.chatsArea}>


      <MessageBox avatar={"1"}/>
      {/* <MessageBox /> */}
      {/* <MessageBox /> */}


   
      



      </ScrollView>
      

      </View>

      <CustomMenu selected={"messages"}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
    // gap: 5,
  },
  content:{
    backgroundColor: colors.lightGray,
    height:"100%",
    width:"100%",
    display:"flex",
    alignItems:"center",
    gap: 20,

  },
  topArea:{
    // backgroundColor:"green",
    display:"flex",
    flexDirection:"column",
    width:"90%",
    marginTop:40
    
  },
  chatsArea: {
    // backgroundColor: "lightblue",
    width:"100%",
    // padding:20,
    
  },
});
export default Home;
