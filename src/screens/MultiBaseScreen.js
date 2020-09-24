import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Switch } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';


const MultiBaseScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>AR FUNCTION</Text>

      <View style={gStyle.spacer64} />

      {/* <Touch
        onPress={() => navigation.navigate('MultiLevel2')}
        text="Go to level 2"
      /> */}
    </ScrollView>
  );
};

MultiBaseScreen.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'AR Screen'
};

MultiBaseScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MultiBaseScreen;
