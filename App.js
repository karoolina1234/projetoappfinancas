import 'react-native-gesture-handler'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { View, Text, StatusBar } from 'react-native';
import firebase from './src/service/FirebaseConnection'
import Routes from './src/routes/index'
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131313" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  )

}

export default App;