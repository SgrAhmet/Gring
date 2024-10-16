import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const MessageBox = () => {

  return (
    <View style={[styles.container,{}]}>
       <Text>Message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default MessageBox;