import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, Linking } from 'react-native';
import { Block, Button, Text, theme, Input, Checkbox } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";



export default class Pro extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <ImageBackground
            source={Images.Pro}
            style={{ flex: 1, height: height, width, zIndex: 1 }}
          />
          <Block space="between" style={styles.padded}>
            <Block>
              <Block>
                <Image
                source={Images.UTS}
                style={{ height: 75, width: 235, marginLeft: 50, marginBottom:60 }}
                />
              </Block>

              <Block >
                <Block>
                  <Text style={{ marginBottom: 15 }} color="white" bold size={24}>Register Your Virtual Card</Text>
                </Block>
                <Block>
                  <Text color="white" size={18} style={{ marginTop: 35 }}>Enter your UTS Student/ Staff ID: </Text>
                </Block>

                <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                  <Input
                   borderless
                   placeholder="Student/ Staff ID"
                   color= 'black'

                   />

                   <Checkbox
                                   checkboxStyle={{borderWidth: 2}}
                                    style={{ marginTop: 30 }}

                                   label ="I agree to send my details to UTS Student Centre for UTS Virtual Card approval."
                                   color='black'
                                   />
                </Block>

                <Block row>

                </Block>
              </Block>



              <Block row style={{ marginTop: theme.SIZES.BASE * 1.5, marginBottom: theme.SIZES.BASE * 4 }}>
                

              </Block>
              <Button
                shadowless
                style={styles.button}
                color={argonTheme.COLORS.SWITCH_ON}
                onPress={() => Linking.openURL('https://firebase.google.com/').catch((err) => console.error('An error occurred', err))}>
                <Text bold color={theme.COLORS.WHITE}>Request Card to be Added</Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  pro: {
    backgroundColor: argonTheme.COLORS.INFO,
    paddingHorizontal: 8,
    marginLeft: 3,
    borderRadius: 4,
    height: 22,
    marginTop: 15
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
});
