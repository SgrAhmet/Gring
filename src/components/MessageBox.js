import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MessageBox = () => {

  const navigation =useNavigation()
  return (
    <TouchableOpacity style={[styles.container,{}]} onPress={()=>navigation.navigate("ChatArea")}>
       <Text>Messageasd</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    height:100,
    marginHorizontal:30
  },
});

export default MessageBox;