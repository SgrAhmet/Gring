import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const SearchUser = () => {
  return (
    <View style={styles.container}>
      <Text>SearchUser</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'red',
    display:"flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    // width:"80%",
    // height:"100%"
  },
});

export default SearchUser;