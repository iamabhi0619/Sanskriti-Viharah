import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Title } from 'react-native-paper';

const GuideBookingScreen = () => {
  const handleBookGuide = () => {
    console.log('Booking a guide...');
  };

  return (
    <View style={styles.container}>
      <Title>Book a Guide</Title>
      <Text>Select your location and book a guide at an affordable price.</Text>
      <Button mode="contained" onPress={handleBookGuide} style={styles.button}>
        Book Now
      </Button>
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
  button: {
    marginTop: 20,
  },
});

export default GuideBookingScreen;