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
  var dropdown_direction = block.getFieldValue("direction");
  var number_duration = block.getFieldValue("duration");

  var code = dropdown_direction + "(" + number_duration + ")\n";
  return code;
};

Blockly.JavaScript["rotateRight"] = function(block) {
  var angle = block.getFieldValue("angle");

  var code = "ROTATERIGHT(" + angle + ")\n";
  return code;
};

Blockly.JavaScript["rotateLeft"] = function(block) {
  var angle = block.getFieldValue("angle");

  var code = "ROTATELEFT(" + angle + ")\n";
  return code;
};

Blockly.JavaScript["action"] = function(block) {
  var code = "ACTION()\n";
  return code;
};

Blockly.JavaScript["repeat"] = function(block) {
  var number_repeat = block.getFieldValue("repeat");
  var statements_commands = Blockly.JavaScript.statementToCode(
      block,
      "commands"
  );
  var code = "REPEAT " + number_repeat + " TIMES {\n" + statements_commands + "}\n";
  return code;
};
