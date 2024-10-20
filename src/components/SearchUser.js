import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import colors from '../styles/colors';

const SearchUser = ({i,username,photo}) => {

  const avatarImages = {
    avatar0: require('../images/avatars/avatar0.png'),
    avatar1: require('../images/avatars/avatar1.png'),
    avatar2: require('../images/avatars/avatar2.png'),
    avatar3: require('../images/avatars/avatar3.png'),
    avatar4: require('../images/avatars/avatar4.png'),
   
  };


  return (
    <TouchableOpacity style={styles.container} onPress={()=>console.log("deneme")}>
          <Image
          style={{ width: 100, height: 100 }}
          source={require("../images/avatars/avatar3.png")}
        />
      <Text style={styles.txt}>{username} {i}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.red,
    display:"flex",
    alignItems: 'center',
    justifyContent: "space-evenly",
    marginTop:10,
    width:"50%",
    height:200,
    borderRadius:20,
    elevation:15,

  },
  txt:{
    fontSize:22,
    fontWeight:"500",
    color:colors.white,
    
  }
});

export default SearchUser;