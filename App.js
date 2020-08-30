import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';


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
  if (firebase.apps.length === 0) {
    let connection = firebase.initializeApp(firebaseConfig);
    console.log(connection);
  }
}

function readData(){
   const reference = firebase.database().ref('/test').once('value').then(snapshot => 
     console.log('User data:', snapshot.val()));
   }


function pushData(plantId, plantName, plantDesc, plantType, plantDiseases, plantSeason, plantPurchase, plantInstructions, plantFood, plantWFrequency){
  const reference = firebase.database().ref('/'+ plantId).set({
    ID: plantId,
    Name: plantName,
    Description: plantDesc,
    Type: plantType,
    Diseases: plantDiseases,
    Season: plantSeason,
    Stores: plantPurchase,
    Instructions: plantInstructions,
    Food: plantFood,
    Water_Frequency: plantWFrequency 
  });
}


export default function App() {
  connectToDatabase();
  const test = pushData(1, "test", "test data", "indoor", "random disease", "Summer", "Bunnings", "1. Dig hole, 2.Put seed", "ABC manure", "3 times a day");
  console.log(test);
  readData();
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