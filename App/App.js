import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from './components/login';
import RegisterScreen from './components/register';
// import HomeScreen from './components/HomeScreen';
// import CultureScreen from './components/CultureScreen';
// import GuideBookingScreen from './components/GuideBookingScreen';
// import ProfileScreen from './components/ProfileScreen';
// import { Ionicons } from '@expo/vector-icons'; 

// Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator with Icons
// const MainTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = 'home';
//           } else if (route.name === 'Culture') {
//             iconName = 'information-circle';
//           } else if (route.name === 'Book Guide') {
//             iconName = 'person';
//           } else if (route.name === 'Profile') {
//             iconName = 'person-circle';
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: '#6200EE', // Paper default theme color
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Culture" component={CultureScreen} />
//       <Tab.Screen name="Book Guide" component={GuideBookingScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// Stack Navigator with Login and Register
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          {/* <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
