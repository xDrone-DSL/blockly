goog.provide("Blockly.JavaScript.xDrone");
goog.require("Blockly.JavaScript");

Blockly.JavaScript["fly"] = function(block) {
  var statements_commands = Blockly.JavaScript.statementToCode(
    block,
    "commands"
  );
  var code =
    "fly() {\n" + "  TAKEOFF()\n" + statements_commands + "  LAND()\n" + "}";
  return code;
};

Blockly.JavaScript["move"] = function(block) {
  var dropdown_direction = block.getFieldValue("Direction");
  var number_duration = block.getFieldValue("duration");

  var code = dropdown_direction + "(" + number_duration + ")\n";
  return code;
};

Blockly.JavaScript["rotate"] = function(block) {
  var dropdown_direction = block.getFieldValue("direction");
  var number_duration = block.getFieldValue("duration");

  var code = dropdown_direction + "(" + number_duration + ")\n";
  return code;
};
