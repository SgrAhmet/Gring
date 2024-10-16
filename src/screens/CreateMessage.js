import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import CustomMenu from '../components/CustomMenu';
import colors from '../styles/colors';

const CreateMessage = () => {
  return (
    <View style={styles.container}>
      <Text>CreateMessage</Text>

      <CustomMenu selected={"createMessage"}/>
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
});

export default CreateMessage;