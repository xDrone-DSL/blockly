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
    colour: 230,
    tooltip: "",
    helpUrl: "fly"
  },
  {
    type: "move",
    message0: "Move %1 for %2 seconds",
    args0: [
      {
        type: "field_dropdown",
        name: "Direction",
        options: [
          ["up", "UP"],
          ["down", "DOWN"],
          ["forward", "FORWARD"],
          ["backwards", "BACK"],
          ["right", "RIGHT"],
          ["left", "LEFT"]
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
    colour: 230,
    tooltip: "move Forward",
    helpUrl: ""
  },
  {
    type: "rotate",
    message0: "Rotate %1 for %2 seconds",
    args0: [
      {
        type: "field_dropdown",
        name: "direction",
        options: [["right", "ROTATERIGHT"], ["left", "ROTATELEFT"]]
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
    colour: 230,
    tooltip: "move Forward",
    helpUrl: ""
  }
]);
