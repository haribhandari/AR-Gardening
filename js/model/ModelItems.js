import * as LoadingConstants from '../redux/LoadingStateConstants';

var POSITION_OFFSET = .05 // 5 cm

var ModelItems = [
  {
    "name": "indoor_plant",
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/plant2/plant_2_vl.jpg"),
    "obj": require("../res/plant2/indoorplant_02.obj"),
    "materials": null,
    "animation":{name:"01", delay:0, loop:true, run:true},
    "scale": [.2, .2, .2],
    "position" : [0, 5*POSITION_OFFSET, 0],
    "type" : "VRX",
    "physics": undefined,
    "ref_pointer": undefined,
    "shadow_width": 10.5,
    "shadow_height": 10.5,
    "spotlight_position_y": 19,
    "lighting_mode": "IBL",
    "resources": [require('../res/plant2/indoorplant_02.mtl'), 
    require('../res/plant2/plant_2_COL.jpg'), 
    require('../res/plant2/plant_2_NOR.jpg'), 
    require('../res/plant2/plant_2_vl.jpg'), ],
  },
  
]
module.exports = {
  getModelArray: function() {
    return ModelItems;
  }
};