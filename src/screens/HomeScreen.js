import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold", flex:1, marginTop:20}}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
    </View>
  );
}

export default class App extends React.Component {
  state = {
    data:[
        {
            "name": "Visualise the Plants",
            // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
            "photo": "https:\/\/cdn.pixabay.com\/photo\/2013\/07\/12\/19\/24\/seedling-154735_960_720.png"
        },
        {
            "name": "View indoor plants",
            // "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
            "photo": "https:\/\/cdn.pixabay.com\/photo\/2015\/01\/03\/15\/06\/klee-587484_960_720.png"
        },
        {
            "name": "View Outdoor Plants",
            "photo": "https:\/\/cdn.pixabay.com\/photo\/2017\/01\/31\/22\/47\/nature-2027899_960_720.png"
        },
        {
            "name": "View Plant Bugs",
            "photo": "https:\/\/cdn.pixabay.com\/photo\/2017\/02\/01\/00\/18\/floral-2028496_960_720.png"
        },
        {
            "name": "Buy Planting Products",
            "photo": "https:\/\/cdn.pixabay.com\/photo\/2020\/04\/17\/19\/48\/city-5056657_960_720.png"
        }
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <FlatList
          // style={{flex:1}}
          horizontal={true}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.name}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.text}>Plant Joke of the day!</Text>
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
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"50%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5,
    justifyContent: "flex-start"
  },
  text: {
    marginTop: 16, 
    fontSize: 34,
     textAlign: "center",
     fontSize: 30,
  }
});






// const HomeScreen = ({ navigation }) => {
//   const theme = useTheme();

// //   return (
// //   //   <View style={gStyle.container[theme]}>
// //   //     <ScrollView contentContainerStyle={gStyle.contentContainer}>
// //   //       <Text style={gStyle.text[theme]}>Home content area</Text>

// //   //       <View style={gStyle.spacer64} />

// //   //       <Touch
// //   //         onPress={() => navigation.navigate('MultiBase')}
// //   //         text="Jump to Multi tab"
// //   //       />

// //   //       <Touch
// //   //         onPress={() => screenProps.updateTheme('light')}
// //   //         text="Light theme"
// //   //       />
// //   //       <Touch
// //   //         onPress={() => screenProps.updateTheme('dark')}
// //   //         text="Dark theme"
// //   //       />
// //   //     </ScrollView>
// //   //   </View>
// //   // );
// // };

// HomeScreen.navigationOptions = {
//   headerTitleStyle: gStyle.headerTitleStyle,
//   title: 'Home'
// };

// // HomeScreen.propTypes = {
// //   // required
// //   navigation: PropTypes.object.isRequired,
// //   screenProps: PropTypes.object.isRequired
// // };

// export default HomeScreen;
