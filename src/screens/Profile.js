import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import CustomMenu from '../components/CustomMenu';
import colors from '../styles/colors';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>


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
});

export default Profile;