import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, Title, IconButton } from 'react-native-paper';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async () => {
    console.log('Register button pressed');
    
    // Basic validation
    if (!email || !password || !confirmPassword || !name) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Auto-generate id
    const id = Math.floor(10000 + Math.random() * 90000);

    // The request body to send
    const requestBody = {
      id, 
      name, 
      email, 
      password
    };

    console.log('Request Body:', requestBody);
    
    try {
      const response = await fetch('https://sanskriti-viharah.onrender.com/memberapi/singup', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });
      
      const data = await response.json();
      console.log('Server Response:', data);
      
      // Handle response based on status
      if (response.ok) {
        Alert.alert('Success', 'Registration successful!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Error', 'An error occurred during registration.');
    }
  };
  
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Register</Title>
      <TextInput
        label="Name"
        value={name}
        mode="outlined"
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        mode="outlined"
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        mode="outlined"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        mode="outlined"
        secureTextEntry
        onChangeText={text => setConfirmPassword(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Register
      </Button>

      {/* Social Media Registration Section */}
      <Text style={styles.socialText}>Or Register with</Text>
      <View style={styles.socialContainer}>
        <IconButton
          icon="google"
          size={40}
          style={styles.icon}
          color="#DB4437"  // Google red color
          onPress={() => console.log('Google Register')}
        />
        <IconButton
          icon="facebook"
          size={40}
          style={styles.icon}
          color="#3b5998"  // Facebook blue color
          onPress={() => console.log('Facebook Register')}
        />
        <IconButton
          icon="twitter"
          size={40}
          style={styles.icon}
          color="#1DA1F2"  // Twitter blue color
          onPress={() => console.log('Twitter Register')}
        />
      </View>

      <Text style={styles.text}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Log in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
  text: {
    marginTop: 15,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
  },
  socialText: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 4, 
  },
});

export default RegisterScreen;
