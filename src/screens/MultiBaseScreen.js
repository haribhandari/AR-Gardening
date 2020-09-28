import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Switch } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';


export default class App extends React.Component {
 render(){
   return(
   <View>
     <Text>AR Screen</Text>
   </View>
   );
 }
}

// MultiBaseScreen.navigationOptions = {
//   headerTitleStyle: gStyle.headerTitleStyle,
//   title: 'AR Screen'
// };

// MultiBaseScreen.propTypes = {
//   // required
//   navigation: PropTypes.object.isRequired
// };

// export default MultiBaseScreen;
