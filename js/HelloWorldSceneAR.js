'use strict';

import React, { Component } from 'react';
import ModelItemRender from './component/ModelItemRender';
import { connect } from 'react-redux';
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
    this._renderModels = this._renderModels.bind(this);
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    let models = this._renderModels(this.props.modelItems, startingBitMask);
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        {/* <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]} animation={{name: "rotate", run: true, loop: true}}/> */}
        <ViroAmbientLight color={"#FFFFFF"} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroNode position={[0, -1, 0]} dragType="FixedToWorld" onDrag={() => { }} >
          {/* <Viro3DObject
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
            onError={this.onError}
            position={[0, -10, -10]}
            scale={[.005, .005, .001]}
            type="OBJ"
          /> */}

           <Viro3DObject
            source={require('./res/plant2/indoorplant_02.obj')}
            resources={[
              require('./res/plant2/indoorplant_02.mtl'),
              require('./res/plant2/plant_2_COL.jpg'),
              require('./res/plant2/plant_2_NOR.jpg'),
              require('./res/plant2/plant_2_vl.jpg'),
            ]}
            position={[0, -15, -15]}
            scale={[1, 1, 1]}
            type="OBJ"

          />
        </ViroNode>
        {models}
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
  _renderModels(modelItems, startingBitMask) {
    var renderedObjects = [];
    if(modelItems) {
      var root = this;
      let objBitMask = startingBitMask;
      Object.keys(modelItems).forEach(function(currentKey) {
        if(modelItems[currentKey] != null && modelItems[currentKey] != undefined) {
          renderedObjects.push(
            <ModelItemRender key={modelItems[currentKey].uuid}
              modelIDProps={modelItems[currentKey]}
              hitTestMethod={root._performARHitTest}
              onLoadCallback={root._onLoadCallback}
              onClickStateCallback={root._onModelsClickStateCallback}
              bitMask={Math.pow(2,objBitMask)} />
          );
        }
        objBitMask++;
      });
  
    }
    return renderedObjects;
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

function selectProps(store) {
  return {
    modelItems: store.arobjects.modelItems,
  };
}


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
