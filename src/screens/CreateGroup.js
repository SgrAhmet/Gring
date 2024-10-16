import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import CustomMenu from '../components/CustomMenu';

const CreateGroup = () => {
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
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default CreateGroup;