import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, FlatList, Image } from 'react-native';
// import { useTheme } from 'react-navigation';
// import { gStyle } from '../constants';





export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Weather</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    // marginTop:60
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  },
  text: {
    marginTop: 16, 
    fontSize: 34,
     textAlign: "center"
  }
});








// import React from 'react';
// import { ScrollView, Text, StyleSheet, StatusBar, FlatList, View } from 'react-native';
// import { useTheme } from 'react-navigation';
// import { gStyle } from '../constants';


// const StatsScreen = () => {
//   const theme = useTheme();

//   return (
//     <ScrollView
//       contentContainerStyle={gStyle.contentContainer}
//       style={gStyle.container[theme]}
//     >
//       <Text style={gStyle.text[theme]}>I am number one</Text>
//     </ScrollView>
//   );
// };




// StatsScreen.navigationOptions = {
//   headerTitleStyle: gStyle.headerTitleStyle,
//   title: 'Stats'
// };

// export default StatsScreen;
