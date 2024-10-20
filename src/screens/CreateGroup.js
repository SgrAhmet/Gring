import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import CustomMenu from '../components/CustomMenu';
import colors from '../styles/colors';

const CreateGroup = () => {
  const [myArray, setMyArray] = useState([])

  useEffect(() => {
    
  // setMyArray([1])
  // setMyArray([2])
  // setMyArray(oldArry =>[...oldArry,[1]])
  myArray.push({a:1})
  myArray.push({a:2,b:3})

  console.log(myArray)
  
  
  }, [])
  

  return (
    <View style={styles.container}>
      <Text>CreateGroup</Text>
      <CustomMenu selected={"createGroup"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default CreateGroup;