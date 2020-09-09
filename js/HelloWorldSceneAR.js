'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroBox,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        {/* <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]} animation={{name: "rotate", run: true, loop: true}}/> */}
        <ViroAmbientLight color={"#FFFFFF"} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroNode position={[0, -1, 0]} dragType="FixedToWorld" onDrag={() => { }} >
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
            require('./res/emoji_smile/emoji_smile_normal.png'),
            require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, .5, 0]}
            scale={[.2, .2, .2]}
            type="VRX" />

          <Viro3DObject
            source={require('./res/plant/01Alocasia_obj.obj')}
            resources={[
              require('./res/plant/01Alocasia_obj.mtl'),
              require('./res/plant/gorshok.jpg'),
              require('./res/plant/leaf.jpg'),
              require('./res/plant/leaf_normal.jpg'),
              require('./res/plant/moh.jpg'),
              require('./res/plant/sand.jpg'),
              require('./res/plant/sand_normal.jpg'),
              require('./res/plant/stem.jpg'),
            ]}
            position={[0, -10, -10]}
            scale={[.005, .005, .001]}
            type="OBJ"

          />
        </ViroNode>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: ""
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

// ViroMaterials.createMaterials({
//   grid: {
//     diffuseTexture: require('./res/grid_bg.jpg'),
//   },
// });
// ViroAnimations.registerAnimations({
//   rotate: {
//     properties: {
//       rotateY: "+=90"
//     },
//     duration: 250, //.25 seconds
//   },
// });

module.exports = HelloWorldSceneAR;