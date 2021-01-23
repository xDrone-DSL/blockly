Blockly.defineBlocksWithJsonArray([
  {
    type: "fly",
    message0: "Fly %1 Take off %2 %3 Land",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "commands"
      }
    ],
    colour: "#18526B",
    tooltip: "",
    helpUrl: "fly"
  },
  {
    type: "move",
    message0: "Move %1 for %2 seconds",
    args0: [
      {
        type: "field_dropdown",
        name: "direction",
        options: [
          ["forward", "FORWARD"],
          ["backward", "BACKWARD"],
          ["right", "RIGHT"],
          ["left", "LEFT"],
          ["up", "UP"],
          ["down", "DOWN"]
        ]
      },
      {
        type: "field_number",
        name: "duration",
        value: 1,
        min: 0,
        max: 10,
        precision: 0.1
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#CE3A52",
    tooltip: "move",
    helpUrl: ""
  },
  {
    type: "rotateRight",
    message0: "Rotate right for %1 degrees",
    args0: [
      {
        type: "field_angle",
        name: "angle",
        angle: 90,
        round: 15,
        offset: 90,
        clockwise: true
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#3B92B8",
    tooltip: "rotate",
    helpUrl: ""
  },
  {
    type: "rotateLeft",
    message0: "Rotate left for %1 degrees",
    args0: [
      {
        type: "field_angle",
        name: "angle",
        angle: 90,
        round: 15,
        offset: 90,
        clockwise: false
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#3B92B8",
    tooltip: "rotate",
    helpUrl: ""
  },
  {
    type: "action",
    message0: "Action",
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: "action",
    helpUrl: ""
  },
  {
    type: "repeat",
    message0: "Repeat %1 times %2 %3",
    args0: [
      {
        type: "field_number",
        name: "repeat",
        value: 1
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "commands"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: ""
  }
]);
