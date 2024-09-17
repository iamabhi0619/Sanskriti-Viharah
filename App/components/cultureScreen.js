import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Title } from 'react-native-paper';

const CultureScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Explore Culture & Heritage</Title>
      <Text>Learn about the rich culture and heritage of the places you're visiting.</Text>
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

export default CultureScreen;
