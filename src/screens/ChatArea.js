import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from "../styles/colors";
import GoBack from "../components/GoBack";
import { TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { avatarImages } from "../components/AvatarImages";


const ChatArea = () => {
  return (
    <View style={styles.container}>
      <GoBack clr={colors.darkGray}/>

      <View style={styles.contentArea}>

        <View style={styles.topArea}>
        <Image
        style={{ width: 80, height: 80 }}
        source={avatarImages[`avatar1`]}
      />
      <Text style={styles.txt}>UserName</Text>
        </View>


        <View style={styles.chats}>
                    <Text>HelloWorld</Text>
                    <Text>HelloWorld</Text>
                    <Text>HelloWorld</Text>
                    <Text>HelloWorld</Text>
        </View>


        <View style={styles.bottomArea}>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            // value={mail}
            // onChangeText={setMail}
          />
        </View>
        <TouchableOpacity style={[styles.btn]}>
        <Icon name="send" size={38} color={colors.primary} />
      </TouchableOpacity>    
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    // borderWidth:
  },
  contentArea: {
    backgroundColor: colors.lightGray,
    width: "100%",
    height: "100%",
    // display:"flex",
    // justifyContent:"space-between"
  },
  topArea:{
    backgroundColor:colors.primary,
    width:"100%",
    height:"20%",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    elevation:10,
    // borderWidth:2

  },
  chats:{
    backgroundColor:colors.lightGray,
    width:"100%",
    height:"70%"
  },
  bottomArea:{
    // backgroundColor:colors.white,
    width:"100%",
    height:"10%",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    flexDirection:"row"
  },
  inputArea: {
    backgroundColor: colors.white,
    position: "relative",
    width: "80%",
    borderRadius:30,
    elevation:5
    // padding:20
    // borderBottomColor: colors.darkGray,
    // borderBottomWidth: 2,
  },
  input: {
    // backgroundColor: colors.white,
    paddingLeft: 20,
    // paddingHorizontal: 20,
    paddingVertical: 10,
    width: "85%",
    // borderRadius: 10,
  },
  txt:{
    color:colors.darkGray,
    fontSize:22,
    fontWeight:"600"
  }
});

export default ChatArea;
