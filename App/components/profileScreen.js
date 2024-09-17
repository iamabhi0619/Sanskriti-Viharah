import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Title } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Your Profile</Title>
      <Text>View your details and manage your account.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default ProfileScreen;
