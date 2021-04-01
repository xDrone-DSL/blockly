goog.provide("Blockly.JavaScript.xDrone");
goog.require("Blockly.JavaScript");

Blockly.JavaScript["fly"] = function(block) {
  var statements_commands = Blockly.JavaScript.statementToCode(
      block,
      "commands"
  );
  var code =
      "main() {\n" + "  takeoff();\n" + statements_commands + "  land();\n" + "}";
  return code;
};

Blockly.JavaScript["move"] = function(block) {
  var dropdown_direction = block.getFieldValue("direction");
  var number_duration = block.getFieldValue("duration");

  var code = dropdown_direction + "(" + number_duration + ");\n";
  return code;
};

Blockly.JavaScript["rotateRight"] = function(block) {
  var angle = block.getFieldValue("angle");

  var code = "rotate_right(" + angle + ");\n";
  return code;
};

Blockly.JavaScript["rotateLeft"] = function(block) {
  var angle = block.getFieldValue("angle");

  var code = "rotate_left(" + angle + ");\n";
  return code;
};

Blockly.JavaScript["repeat"] = function(block) {
  var number_repeat = block.getFieldValue("repeat");
  var statements_commands = Blockly.JavaScript.statementToCode(
      block,
      "commands"
  );
  var code = "repeat " + number_repeat + " times {\n" + statements_commands + "}\n";
  return code;
};
