import React from 'react';
import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes, { func } from 'prop-types';
import { useTheme } from 'react-navigation';
import { gStyle, images} from '../constants';
import Touch from '../components/Touch';
import { firebase } from '../firebase/config';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      plants: [],
    }
    this.readData()
  }

  // componentWillMount() {    
  //   var reference = firebase.database().ref('/');
  //   reference.once('value').then(snapshot => {
  //     this.setState({plants: snapshot.val()});
  //     // console.log(snapshot.val());
  //   });  
  // }
  readData(){
    var reference = firebase.database().ref('/');
    reference.once('value').then(snapshot => {
      this.setState({plants: snapshot.val()});
      console.log(this.state.plants);
      // console.log(snapshot.val());
    });   
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Plants
          </Text>
          {/* <FlatList 
              style={styles.listItem}
              data={[{name:'bob'}, {name : 'Tim'}]}
              keyExtractor={item => item.name}
              renderItem={({ item }) => <Text>{item.name}</Text>}
          /> */}
          {/* <Text>{this.state.plants}</Text> */}
          {/* <FlatList 
            data={this.state.plants}
            keyExtractor = {(x, i ) => i }
            renderItem={({ item }) => <Text>{`${item.Name}`}</Text>}
            
          /> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F7F7F7',
    // marginTop:60
  },
  listItem:{
    fontSize: 40,
    textAlign: "center",
    margin: 'auto'
  },
  text: {
    marginTop: 16, 
    fontSize: 34,
     textAlign: "center",
     fontSize: 30,
  }
});


// SettingsScreen.navigationOptions = ({ theme }) => {
//   return {
//     // headerLeft: () => (
//     //   <View style={{ flex: 1, paddingLeft: 16 }}>
//     //     <Text style={gStyle.text[theme]}>left</Text>
//     //   </View>
//     // ),
//     // headerRight: () => (
//     //   <View style={{ flex: 1, paddingRight: 16 }}>
//     //     <Text style={gStyle.text[theme]}>right</Text>
//     //   </View>
//     // ),
//     headerTitle: () => (
//       <View style={{ flex: 1 }}>
//       <Text>Plant List</Text>
//       </View>
//     )
//   };
// };


// SettingsScreen.propTypes = {
//   // required
//   navigation: PropTypes.object.isRequired,
//   screenProps: PropTypes.object.isRequired
// };

/*
// shoutout @notbrent: https://snack.expo.io/H105kxsG7
const shouldShowBackButton = stackRouteNavigation => {
  const parent = stackRouteNavigation.dangerouslyGetParent();
  return parent.state.routes.indexOf(stackRouteNavigation.state) > 0;
};

SettingsScreen.navigationOptions = ({ navigation }) => ({

headerLeft: !shouldShowBackButton(navigation) ? (
  <View style={{ flex: 1 }}>
    <Text>left</Text>
  </View>
) : null,
*/

// export default SettingsScreen;
