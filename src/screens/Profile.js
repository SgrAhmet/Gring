import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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

export default Profile;