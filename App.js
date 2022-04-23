import { Fontisto } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Users from './screens/Users';
import Website from './screens/Website.js';
import { useState } from 'react';

const Stack = createNativeStackNavigator()

export default function App() {
  const [isListUser, setIsListUser] = useState(true)

  function changeListUser() {
    setIsListUser(false)
    alert('map ' + isListUser)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}
        />
        <Stack.Screen
          name="Users" component={Users}
          options={{
            headerRight: () => (
              <Fontisto name="map-marker-alt" size={24} color="black"
                onPress={changeListUser}
              />
            ),
          }}
        />
        <Stack.Screen name="Website" component={Website} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
