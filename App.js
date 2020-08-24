import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyCSGxUwqhBcKfLIfgC51-aiuv1B-XoQkX8",
  authDomain: "ar-gardening-5eeb1.firebaseapp.com",
  databaseURL: "https://ar-gardening-5eeb1.firebaseio.com",
  projectId: "ar-gardening-5eeb1",
  storageBucket: "ar-gardening-5eeb1.appspot.com",
  messagingSenderId: "461196396366",
  appId: "1:461196396366:web:7b5b3f8ea9c5ad8303801f"
};

function connectToDatabase(){
  let connection = firebase.initializeApp(firebaseConfig);
  console.log(connection);
}

// const reference = firebase.database().ref('/test').once('value').then(snapshot => {
//   console.log('User data: ', snapshot.val());



export default function App() {
  connectToDatabase();
    return (
      <View style={styles.container} >
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
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
