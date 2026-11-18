/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author ascii@media.mit.edu (Andrew Sliwinski)
 *
 * After modifying this file, run `npm run translate` from the root directory
 * to regenerate `./msg/json/en.json`.
 * IMPORTANT:
 * All message strings must use single quotes for the scripts to work properly
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');

// Control blocks
Blockly.Msg.CONTROL_FOREVER = 'forever';
Blockly.Msg.CONTROL_REPEAT = 'repeat %1';
Blockly.Msg.CONTROL_IF = 'if %1 then';
Blockly.Msg.CONTROL_ELSE = 'else';
Blockly.Msg.CONTROL_STOP = 'stop';
Blockly.Msg.CONTROL_STOP_ALL = 'all';
Blockly.Msg.CONTROL_STOP_THIS = 'this script';
Blockly.Msg.CONTROL_STOP_OTHER = 'other scripts in sprite';
Blockly.Msg.CONTROL_WAIT = 'wait %1 seconds';
Blockly.Msg.CONTROL_WAITUNTIL = 'wait until %1';
Blockly.Msg.CONTROL_REPEATUNTIL = 'repeat until %1';
Blockly.Msg.CONTROL_WHILE = 'while %1';
Blockly.Msg.CONTROL_FOREACH = 'for each %1 in %2';
Blockly.Msg.CONTROL_STARTASCLONE = 'when I start as a clone';
Blockly.Msg.CONTROL_CREATECLONEOF = 'create clone of %1';
Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF = 'myself';
Blockly.Msg.CONTROL_DELETETHISCLONE = 'delete this clone';
Blockly.Msg.CONTROL_COUNTER = 'counter';
Blockly.Msg.CONTROL_INCRCOUNTER = 'increment counter';
Blockly.Msg.CONTROL_CLEARCOUNTER = 'clear counter';
Blockly.Msg.CONTROL_ALLATONCE = 'all at once';

// Data blocks
Blockly.Msg.DATA_SETVARIABLETO = 'set %1 to %2';
Blockly.Msg.DATA_CHANGEVARIABLEBY = 'change %1 by %2';
Blockly.Msg.DATA_SHOWVARIABLE = 'show variable %1';
Blockly.Msg.DATA_HIDEVARIABLE = 'hide variable %1';
Blockly.Msg.DATA_ADDTOLIST = 'add %1 to %2';
Blockly.Msg.DATA_DELETEOFLIST = 'delete %1 of %2';
Blockly.Msg.DATA_DELETEALLOFLIST = 'delete all of %1';
Blockly.Msg.DATA_INSERTATLIST = 'insert %1 at %2 of %3';
Blockly.Msg.DATA_REPLACEITEMOFLIST = 'replace item %1 of %2 with %3';
Blockly.Msg.DATA_ITEMOFLIST = 'item %1 of %2';
Blockly.Msg.DATA_ITEMNUMOFLIST = 'item # of %1 in %2';
Blockly.Msg.DATA_LENGTHOFLIST = 'length of %1';
Blockly.Msg.DATA_LISTCONTAINSITEM = '%1 contains %2?';
Blockly.Msg.DATA_SHOWLIST = 'show list %1';
Blockly.Msg.DATA_HIDELIST = 'hide list %1';
Blockly.Msg.DATA_INDEX_ALL = 'all';
Blockly.Msg.DATA_INDEX_LAST = 'last';
Blockly.Msg.DATA_INDEX_RANDOM = 'random';

// Event blocks
Blockly.Msg.EVENT_WHENFLAGCLICKED = 'when %1 clicked';
Blockly.Msg.EVENT_WHENTHISSPRITECLICKED = 'when this sprite clicked';
Blockly.Msg.EVENT_WHENSTAGECLICKED = 'when stage clicked';
Blockly.Msg.EVENT_WHENTOUCHINGOBJECT = 'when this sprite touches %1';
Blockly.Msg.EVENT_WHENBROADCASTRECEIVED = 'when I receive %1';
Blockly.Msg.EVENT_WHENBACKDROPSWITCHESTO = 'when backdrop switches to %1';
Blockly.Msg.EVENT_WHENGREATERTHAN = 'when %1 > %2';
Blockly.Msg.EVENT_WHENGREATERTHAN_TIMER = 'timer';
Blockly.Msg.EVENT_WHENGREATERTHAN_LOUDNESS = 'loudness';
Blockly.Msg.EVENT_BROADCAST = 'broadcast %1';
Blockly.Msg.EVENT_BROADCASTANDWAIT = 'broadcast %1 and wait';
Blockly.Msg.EVENT_WHENKEYPRESSED = 'when %1 key pressed';
Blockly.Msg.EVENT_WHENKEYPRESSED_SPACE = 'space';
Blockly.Msg.EVENT_WHENKEYPRESSED_LEFT = 'left arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_RIGHT = 'right arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_DOWN = 'down arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_UP = 'up arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_ANY = 'any';

// Looks blocks
Blockly.Msg.LOOKS_SAYFORSECS = 'say %1 for %2 seconds';
Blockly.Msg.LOOKS_SAY = 'say %1';
Blockly.Msg.LOOKS_HELLO = 'Hello!';
Blockly.Msg.LOOKS_THINKFORSECS = 'think %1 for %2 seconds';
Blockly.Msg.LOOKS_THINK = 'think %1';
Blockly.Msg.LOOKS_HMM = 'Hmm...';
Blockly.Msg.LOOKS_SHOW = 'show';
Blockly.Msg.LOOKS_HIDE = 'hide';
Blockly.Msg.LOOKS_HIDEALLSPRITES = 'hide all sprites';
Blockly.Msg.LOOKS_EFFECT_COLOR = 'color';
Blockly.Msg.LOOKS_EFFECT_FISHEYE = 'fisheye';
Blockly.Msg.LOOKS_EFFECT_WHIRL = 'whirl';
Blockly.Msg.LOOKS_EFFECT_PIXELATE = 'pixelate';
Blockly.Msg.LOOKS_EFFECT_MOSAIC = 'mosaic';
Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS = 'brightness';
Blockly.Msg.LOOKS_EFFECT_GHOST = 'ghost';
Blockly.Msg.LOOKS_CHANGEEFFECTBY = 'change %1 effect by %2';
Blockly.Msg.LOOKS_SETEFFECTTO = 'set %1 effect to %2';
Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS = 'clear graphic effects';
Blockly.Msg.LOOKS_CHANGESIZEBY = 'change size by %1';
Blockly.Msg.LOOKS_SETSIZETO = 'set size to %1 %';
Blockly.Msg.LOOKS_SIZE = 'size';
Blockly.Msg.LOOKS_CHANGESTRETCHBY = 'change stretch by %1';
Blockly.Msg.LOOKS_SETSTRETCHTO = 'set stretch to %1 %';
Blockly.Msg.LOOKS_SWITCHCOSTUMETO = 'switch costume to %1';
Blockly.Msg.LOOKS_NEXTCOSTUME = 'next costume';
Blockly.Msg.LOOKS_SWITCHBACKDROPTO = 'switch backdrop to %1';
Blockly.Msg.LOOKS_GOTOFRONTBACK = 'go to %1 layer';
Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT = 'front';
Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK = 'back';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS = 'go %1 %2 layers';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD = 'forward';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD = 'backward';
Blockly.Msg.LOOKS_BACKDROPNUMBERNAME = 'backdrop %1';
Blockly.Msg.LOOKS_COSTUMENUMBERNAME = 'costume %1';
Blockly.Msg.LOOKS_NUMBERNAME_NUMBER = 'number';
Blockly.Msg.LOOKS_NUMBERNAME_NAME = 'name';
Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT = 'switch backdrop to %1 and wait';
Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK = 'next backdrop';
Blockly.Msg.LOOKS_NEXTBACKDROP = 'next backdrop';
Blockly.Msg.LOOKS_PREVIOUSBACKDROP = 'previous backdrop';
Blockly.Msg.LOOKS_RANDOMBACKDROP = 'random backdrop';

// Motion blocks
Blockly.Msg.MOTION_MOVESTEPS = 'move %1 steps';
Blockly.Msg.MOTION_TURNLEFT = 'turn %1 %2 degrees';
Blockly.Msg.MOTION_TURNRIGHT = 'turn %1 %2 degrees';
Blockly.Msg.MOTION_POINTINDIRECTION = 'point in direction %1';
Blockly.Msg.MOTION_POINTTOWARDS = 'point towards %1';
Blockly.Msg.MOTION_POINTTOWARDS_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_POINTTOWARDS_RANDOM = 'random direction';
Blockly.Msg.MOTION_GOTO = 'go to %1';
Blockly.Msg.MOTION_GOTO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GOTO_RANDOM = 'random position';
Blockly.Msg.MOTION_GOTOXY = 'go to x: %1 y: %2';
Blockly.Msg.MOTION_GLIDESECSTOXY = 'glide %1 secs to x: %2 y: %3';
Blockly.Msg.MOTION_GLIDETO = 'glide %1 secs to %2';
Blockly.Msg.MOTION_GLIDETO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GLIDETO_RANDOM = 'random position';
Blockly.Msg.MOTION_CHANGEXBY = 'change x by %1';
Blockly.Msg.MOTION_SETX = 'set x to %1';
Blockly.Msg.MOTION_CHANGEYBY = 'change y by %1';
Blockly.Msg.MOTION_SETY = 'set y to %1';
Blockly.Msg.MOTION_IFONEDGEBOUNCE = 'if on edge, bounce';
Blockly.Msg.MOTION_SETROTATIONSTYLE = 'set rotation style %1';
Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT = 'left-right';
Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE = 'don\'t rotate';
Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND = 'all around';
Blockly.Msg.MOTION_XPOSITION = 'x position';
Blockly.Msg.MOTION_YPOSITION = 'y position';
Blockly.Msg.MOTION_DIRECTION = 'direction';
Blockly.Msg.MOTION_SCROLLRIGHT = 'scroll right %1';
Blockly.Msg.MOTION_SCROLLUP = 'scroll up %1';
Blockly.Msg.MOTION_ALIGNSCENE = 'align scene %1';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT = 'bottom-left';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT = 'bottom-right';
Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE = 'middle';
Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT = 'top-left';
Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT = 'top-right';
Blockly.Msg.MOTION_XSCROLL = 'x scroll';
Blockly.Msg.MOTION_YSCROLL = 'y scroll';
Blockly.Msg.MOTION_STAGE_SELECTED = 'Stage selected: no motion blocks';

// Operators blocks
Blockly.Msg.OPERATORS_ADD = '%1 + %2';
Blockly.Msg.OPERATORS_SUBTRACT = '%1 - %2';
Blockly.Msg.OPERATORS_MULTIPLY = '%1 * %2';
Blockly.Msg.OPERATORS_DIVIDE = '%1 / %2';
Blockly.Msg.OPERATORS_RANDOM = 'pick random %1 to %2';
Blockly.Msg.OPERATORS_GT = '%1 > %2';
Blockly.Msg.OPERATORS_LT = '%1 < %2';
Blockly.Msg.OPERATORS_EQUALS = '%1 = %2';
Blockly.Msg.OPERATORS_AND = '%1 and %2';
Blockly.Msg.OPERATORS_OR = '%1 or %2';
Blockly.Msg.OPERATORS_NOT = 'not %1';
Blockly.Msg.OPERATORS_JOIN = 'join %1 %2';
Blockly.Msg.OPERATORS_JOIN_APPLE = 'apple';
Blockly.Msg.OPERATORS_JOIN_BANANA = 'banana';
Blockly.Msg.OPERATORS_LETTEROF = 'letter %1 of %2';
Blockly.Msg.OPERATORS_LETTEROF_APPLE = 'a';
Blockly.Msg.OPERATORS_LENGTH = 'length of %1';
Blockly.Msg.OPERATORS_CONTAINS = '%1 contains %2?';
Blockly.Msg.OPERATORS_MOD = '%1 mod %2';
Blockly.Msg.OPERATORS_ROUND = 'round %1';
Blockly.Msg.OPERATORS_MATHOP = '%1 of %2';
Blockly.Msg.OPERATORS_MATHOP_ABS = 'abs';
Blockly.Msg.OPERATORS_MATHOP_FLOOR = 'floor';
Blockly.Msg.OPERATORS_MATHOP_CEILING = 'ceiling';
Blockly.Msg.OPERATORS_MATHOP_SQRT = 'sqrt';
Blockly.Msg.OPERATORS_MATHOP_SIN = 'sin';
Blockly.Msg.OPERATORS_MATHOP_COS = 'cos';
Blockly.Msg.OPERATORS_MATHOP_TAN = 'tan';
Blockly.Msg.OPERATORS_MATHOP_ASIN = 'asin';
Blockly.Msg.OPERATORS_MATHOP_ACOS = 'acos';
Blockly.Msg.OPERATORS_MATHOP_ATAN = 'atan';
Blockly.Msg.OPERATORS_MATHOP_LN = 'ln';
Blockly.Msg.OPERATORS_MATHOP_LOG = 'log';
Blockly.Msg.OPERATORS_MATHOP_EEXP = 'e ^';
Blockly.Msg.OPERATORS_MATHOP_10EXP = '10 ^';

// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = 'define %1';

// Sensing blocks
Blockly.Msg.SENSING_TOUCHINGOBJECT = 'touching %1?';
Blockly.Msg.SENSING_TOUCHINGOBJECT_POINTER = 'mouse-pointer';
Blockly.Msg.SENSING_TOUCHINGOBJECT_EDGE = 'edge';
Blockly.Msg.SENSING_TOUCHINGCOLOR = 'touching color %1?';
Blockly.Msg.SENSING_COLORISTOUCHINGCOLOR = 'color %1 is touching %2?';
Blockly.Msg.SENSING_DISTANCETO = 'distance to %1';
Blockly.Msg.SENSING_DISTANCETO_POINTER = 'mouse-pointer';
Blockly.Msg.SENSING_ASKANDWAIT = 'ask %1 and wait';
Blockly.Msg.SENSING_ASK_TEXT = 'What\'s your name?';
Blockly.Msg.SENSING_ANSWER = 'answer';
Blockly.Msg.SENSING_KEYPRESSED = 'key %1 pressed?';
Blockly.Msg.SENSING_MOUSEDOWN = 'mouse down?';
Blockly.Msg.SENSING_MOUSEX = 'mouse x';
Blockly.Msg.SENSING_MOUSEY = 'mouse y';
Blockly.Msg.SENSING_SETDRAGMODE = 'set drag mode %1';
Blockly.Msg.SENSING_SETDRAGMODE_DRAGGABLE = 'draggable';
Blockly.Msg.SENSING_SETDRAGMODE_NOTDRAGGABLE = 'not draggable';
Blockly.Msg.SENSING_LOUDNESS = 'loudness';
Blockly.Msg.SENSING_LOUD = 'loud?';
Blockly.Msg.SENSING_TIMER = 'timer';
Blockly.Msg.SENSING_RESETTIMER = 'reset timer';
Blockly.Msg.SENSING_OF = '%1 of %2';
Blockly.Msg.SENSING_OF_XPOSITION = 'x position';
Blockly.Msg.SENSING_OF_YPOSITION = 'y position';
Blockly.Msg.SENSING_OF_DIRECTION = 'direction';
Blockly.Msg.SENSING_OF_COSTUMENUMBER = 'costume #';
Blockly.Msg.SENSING_OF_COSTUMENAME = 'costume name';
Blockly.Msg.SENSING_OF_SIZE = 'size';
Blockly.Msg.SENSING_OF_VOLUME = 'volume';
Blockly.Msg.SENSING_OF_BACKDROPNUMBER = 'backdrop #';
Blockly.Msg.SENSING_OF_BACKDROPNAME = 'backdrop name';
Blockly.Msg.SENSING_OF_STAGE = 'Stage';
Blockly.Msg.SENSING_CURRENT = 'current %1';
Blockly.Msg.SENSING_CURRENT_YEAR = 'year';
Blockly.Msg.SENSING_CURRENT_MONTH = 'month';
Blockly.Msg.SENSING_CURRENT_DATE = 'date';
Blockly.Msg.SENSING_CURRENT_DAYOFWEEK = 'day of week';
Blockly.Msg.SENSING_CURRENT_HOUR = 'hour';
Blockly.Msg.SENSING_CURRENT_MINUTE = 'minute';
Blockly.Msg.SENSING_CURRENT_SECOND = 'second';
Blockly.Msg.SENSING_DAYSSINCE2000 = 'days since 2000';
Blockly.Msg.SENSING_USERNAME = 'username';
Blockly.Msg.SENSING_USERID = 'user id';

// Sound blocks
Blockly.Msg.SOUND_PLAY = 'start sound %1';
Blockly.Msg.SOUND_PLAYUNTILDONE = 'play sound %1 until done';
Blockly.Msg.SOUND_STOPALLSOUNDS = 'stop all sounds';
Blockly.Msg.SOUND_SETEFFECTO = 'set %1 effect to %2';
Blockly.Msg.SOUND_CHANGEEFFECTBY = 'change %1 effect by %2';
Blockly.Msg.SOUND_CLEAREFFECTS = 'clear sound effects';
Blockly.Msg.SOUND_EFFECTS_PITCH = 'pitch';
Blockly.Msg.SOUND_EFFECTS_PAN = 'pan left/right';
Blockly.Msg.SOUND_CHANGEVOLUMEBY = 'change volume by %1';
Blockly.Msg.SOUND_SETVOLUMETO = 'set volume to %1%';
Blockly.Msg.SOUND_VOLUME = 'volume';
Blockly.Msg.SOUND_RECORD = 'record...';

// Category labels
Blockly.Msg.CATEGORY_MOTION = 'Motion';
Blockly.Msg.CATEGORY_LOOKS = 'Looks';
Blockly.Msg.CATEGORY_SOUND = 'Sound';
Blockly.Msg.CATEGORY_EVENTS = 'Events';
Blockly.Msg.CATEGORY_CONTROL = 'Control';
Blockly.Msg.CATEGORY_SENSING = 'Sensing';
Blockly.Msg.CATEGORY_OPERATORS = 'Operators';
Blockly.Msg.CATEGORY_VARIABLES = 'Variables';
Blockly.Msg.CATEGORY_MYBLOCKS = 'My Blocks';

// Context menus
Blockly.Msg.DUPLICATE = 'Duplicate';
Blockly.Msg.DELETE = 'Delete';
Blockly.Msg.ADD_COMMENT = 'Add Comment';
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
Blockly.Msg.HELP = 'Help';
Blockly.Msg.UNDO = 'Undo';
Blockly.Msg.REDO = 'Redo';
Blockly.Msg.EDIT_PROCEDURE = 'Edit';
Blockly.Msg.SHOW_PROCEDURE_DEFINITION = 'Go to definition';
Blockly.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = 'Say something...';

// Color
Blockly.Msg.COLOUR_HUE_LABEL = 'Color';
Blockly.Msg.COLOUR_SATURATION_LABEL = 'Saturation';
Blockly.Msg.COLOUR_BRIGHTNESS_LABEL = 'Brightness';

// Variables
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
Blockly.Msg.RENAME_VARIABLE = 'Rename variable';
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';
Blockly.Msg.RENAME_VARIABLE_MODAL_TITLE = 'Rename Variable';
Blockly.Msg.NEW_VARIABLE = 'Make a Variable';
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
Blockly.Msg.VARIABLE_MODAL_TITLE = 'New Variable';
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another variable of type "%2".';
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Custom Procedures
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_PROCEDURE = 'Make a Block';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = 'A procedure named "%1" already exists.';
Blockly.Msg.PROCEDURE_DEFAULT_NAME = 'block name';
Blockly.Msg.PROCEDURE_USED = 'To delete a block definition, first remove all uses of the block';

// Lists
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_LIST = 'Make a List';
Blockly.Msg.NEW_LIST_TITLE = 'New list name:';
Blockly.Msg.LIST_MODAL_TITLE = 'New List';
Blockly.Msg.LIST_ALREADY_EXISTS = 'A list named "%1" already exists.';
Blockly.Msg.RENAME_LIST_TITLE = 'Rename all "%1" lists to:';
Blockly.Msg.RENAME_LIST_MODAL_TITLE = 'Rename List';
Blockly.Msg.DEFAULT_LIST_ITEM = 'thing';
Blockly.Msg.DELETE_LIST = 'Delete the "%1" list';
Blockly.Msg.RENAME_LIST = 'Rename list';

// Broadcast Messages
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_BROADCAST_MESSAGE = 'New message';
Blockly.Msg.NEW_BROADCAST_MESSAGE_TITLE = 'New message name:';
Blockly.Msg.BROADCAST_MODAL_TITLE = 'New Message';
Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME = 'message1';
Blockly.Msg.ANALOG_ANALOG = 'analog(%1)';
Blockly.Msg.ANALOG_ANALOG_PORT = 'port';
Blockly.Msg.ANALOG_ANALOG8 = 'analog8(%1)';
Blockly.Msg.ANALOG_ANALOG8_PORT = 'port';
Blockly.Msg.ANALOG_ANALOG10 = 'analog10(%1)';
Blockly.Msg.ANALOG_ANALOG10_PORT = 'port';
Blockly.Msg.ANALOG_ANALOG12 = 'analog12(%1)';
Blockly.Msg.ANALOG_ANALOG12_PORT = 'port';
Blockly.Msg.ANALOG_ANALOG_ET = 'analog_et(%1)';
Blockly.Msg.ANALOG_ANALOG_ET_PORT = 'port';
Blockly.Msg.ANALOG_SET_ANALOG_PULLUP = 'set_analog_pullup(%1, %2)';
Blockly.Msg.ANALOG_SET_ANALOG_PULLUP_PORT = 'port';
Blockly.Msg.ANALOG_SET_ANALOG_PULLUP_PULLUP = 'pullup';
Blockly.Msg.ANALOG_GET_ANALOG_PULLUP = 'get_analog_pullup(%1)';
Blockly.Msg.ANALOG_GET_ANALOG_PULLUP_PORT = 'port';
Blockly.Msg.DIGITAL_DIGITAL = 'digital(%1)';
Blockly.Msg.DIGITAL_DIGITAL_PORT = 'port';
Blockly.Msg.DIGITAL_SET_DIGITAL_VALUE = 'set_digital_value(%1, %2)';
Blockly.Msg.DIGITAL_SET_DIGITAL_VALUE_PORT = 'port';
Blockly.Msg.DIGITAL_SET_DIGITAL_VALUE_VALUE = 'value';
Blockly.Msg.DIGITAL_GET_DIGITAL_VALUE = 'get_digital_value(%1)';
Blockly.Msg.DIGITAL_GET_DIGITAL_VALUE_PORT = 'port';
Blockly.Msg.DIGITAL_SET_DIGITAL_OUTPUT = 'set_digital_output(%1, %2)';
Blockly.Msg.DIGITAL_SET_DIGITAL_OUTPUT_PORT = 'port';
Blockly.Msg.DIGITAL_SET_DIGITAL_OUTPUT_OUT = 'out';
Blockly.Msg.DIGITAL_GET_DIGITAL_OUTPUT = 'get_digital_output(%1)';
Blockly.Msg.DIGITAL_GET_DIGITAL_OUTPUT_PORT = 'port';
Blockly.Msg.DIGITAL_GET_DIGITAL_PULLUP = 'get_digital_pullup(%1)';
Blockly.Msg.DIGITAL_GET_DIGITAL_PULLUP_PORT = 'port';
Blockly.Msg.DIGITAL_SET_DIGITAL_PULLUP = 'set_digital_pullup(%1, %2)';
Blockly.Msg.DIGITAL_SET_DIGITAL_PULLUP_PORT = 'port';
Blockly.Msg.DIGITAL_SET_DIGITAL_PULLUP_PULLUP = 'pullup';
Blockly.Msg.MOTOR_GET_MOTOR_POSITION_COUNTER = 'get_motor_position_counter(%1)';
Blockly.Msg.MOTOR_GET_MOTOR_POSITION_COUNTER_MOTOR = 'motor';
Blockly.Msg.MOTOR_GMPC = 'gmpc(%1)';
Blockly.Msg.MOTOR_GMPC_MOTOR = 'motor';
Blockly.Msg.MOTOR_CLEAR_MOTOR_POSITION_COUNTER = 'clear_motor_position_counter(%1)';
Blockly.Msg.MOTOR_CLEAR_MOTOR_POSITION_COUNTER_MOTOR = 'motor';
Blockly.Msg.MOTOR_CMPC = 'cmpc(%1)';
Blockly.Msg.MOTOR_CMPC_MOTOR = 'motor';
Blockly.Msg.MOTOR_MOVE_AT_VELOCITY = 'move_at_velocity(%1, %2)';
Blockly.Msg.MOTOR_MOVE_AT_VELOCITY_MOTOR = 'motor';
Blockly.Msg.MOTOR_MOVE_AT_VELOCITY_VELOCITY = 'velocity';
Blockly.Msg.MOTOR_MAV = 'mav(%1, %2)';
Blockly.Msg.MOTOR_MAV_MOTOR = 'motor';
Blockly.Msg.MOTOR_MAV_VELOCITY = 'velocity';
Blockly.Msg.MOTOR_MOVE_TO_POSITION = 'move_to_position(%1, %2, %3)';
Blockly.Msg.MOTOR_MOVE_TO_POSITION_MOTOR = 'motor';
Blockly.Msg.MOTOR_MOVE_TO_POSITION_SPEED = 'speed';
Blockly.Msg.MOTOR_MOVE_TO_POSITION_GOAL_POS = 'goal_pos';
Blockly.Msg.MOTOR_MTP = 'mtp(%1, %2, %3)';
Blockly.Msg.MOTOR_MTP_MOTOR = 'motor';
Blockly.Msg.MOTOR_MTP_SPEED = 'speed';
Blockly.Msg.MOTOR_MTP_GOAL_POS = 'goal_pos';
Blockly.Msg.MOTOR_MOVE_RELATIVE_POSITION = 'move_relative_position(%1, %2, %3)';
Blockly.Msg.MOTOR_MOVE_RELATIVE_POSITION_MOTOR = 'motor';
Blockly.Msg.MOTOR_MOVE_RELATIVE_POSITION_SPEED = 'speed';
Blockly.Msg.MOTOR_MOVE_RELATIVE_POSITION_DELTA_POS = 'delta_pos';
Blockly.Msg.MOTOR_MRP = 'mrp(%1, %2, %3)';
Blockly.Msg.MOTOR_MRP_MOTOR = 'motor';
Blockly.Msg.MOTOR_MRP_SPEED = 'speed';
Blockly.Msg.MOTOR_MRP_DELTA_POS = 'delta_pos';
Blockly.Msg.MOTOR_SET_PID_GAINS = 'set_pid_gains(%1, %2, %3, %4, %5, %6, %7)';
Blockly.Msg.MOTOR_SET_PID_GAINS_MOTOR = 'motor';
Blockly.Msg.MOTOR_SET_PID_GAINS_P = 'p';
Blockly.Msg.MOTOR_SET_PID_GAINS_I = 'i';
Blockly.Msg.MOTOR_SET_PID_GAINS_D = 'd';
Blockly.Msg.MOTOR_SET_PID_GAINS_PD = 'pd';
Blockly.Msg.MOTOR_SET_PID_GAINS_ID = 'id';
Blockly.Msg.MOTOR_SET_PID_GAINS_DD = 'dd';
Blockly.Msg.MOTOR_GET_PID_GAINS = 'get_pid_gains(%1, %2, %3, %4, %5, %6, %7)';
Blockly.Msg.MOTOR_GET_PID_GAINS_MOTOR = 'motor';
Blockly.Msg.MOTOR_GET_PID_GAINS_P = 'p';
Blockly.Msg.MOTOR_GET_PID_GAINS_I = 'i';
Blockly.Msg.MOTOR_GET_PID_GAINS_D = 'd';
Blockly.Msg.MOTOR_GET_PID_GAINS_PD = 'pd';
Blockly.Msg.MOTOR_GET_PID_GAINS_ID = 'id';
Blockly.Msg.MOTOR_GET_PID_GAINS_DD = 'dd';
Blockly.Msg.MOTOR_FREEZE = 'freeze(%1)';
Blockly.Msg.MOTOR_FREEZE_MOTOR = 'motor';
Blockly.Msg.MOTOR_GET_MOTOR_DONE = 'get_motor_done(%1)';
Blockly.Msg.MOTOR_GET_MOTOR_DONE_MOTOR = 'motor';
Blockly.Msg.MOTOR_BLOCK_MOTOR_DONE = 'block_motor_done(%1)';
Blockly.Msg.MOTOR_BLOCK_MOTOR_DONE_MOTOR = 'motor';
Blockly.Msg.MOTOR_BMD = 'bmd(%1)';
Blockly.Msg.MOTOR_BMD_MOTOR = 'motor';
Blockly.Msg.MOTOR_SETPWM = 'setpwm(%1, %2)';
Blockly.Msg.MOTOR_SETPWM_MOTOR = 'motor';
Blockly.Msg.MOTOR_SETPWM_PWM = 'pwm';
Blockly.Msg.MOTOR_GETPWM = 'getpwm(%1)';
Blockly.Msg.MOTOR_GETPWM_MOTOR = 'motor';
Blockly.Msg.MOTOR_FD = 'fd(%1)';
Blockly.Msg.MOTOR_FD_MOTOR = 'motor';
Blockly.Msg.MOTOR_BK = 'bk(%1)';
Blockly.Msg.MOTOR_BK_MOTOR = 'motor';
Blockly.Msg.MOTOR_MOTOR = 'motor(%1, %2)';
Blockly.Msg.MOTOR_MOTOR_MOTOR = 'motor';
Blockly.Msg.MOTOR_MOTOR_PERCENT = 'percent';
Blockly.Msg.MOTOR_BAASBENNAGUUI = 'baasbennaguui(%1, %2)';
Blockly.Msg.MOTOR_BAASBENNAGUUI_MOTOR = 'motor';
Blockly.Msg.MOTOR_BAASBENNAGUUI_PERCENT = 'percent';
Blockly.Msg.MOTOR_MOTOR_POWER = 'motor_power(%1, %2)';
Blockly.Msg.MOTOR_MOTOR_POWER_MOTOR = 'motor';
Blockly.Msg.MOTOR_MOTOR_POWER_PERCENT = 'percent';
Blockly.Msg.MOTOR_OFF = 'off(%1)';
Blockly.Msg.MOTOR_OFF_MOTOR = 'motor';
Blockly.Msg.MOTOR_ALLOFF = 'alloff()';
Blockly.Msg.MOTOR_AO = 'ao()';
Blockly.Msg.SERVO_ENABLE_SERVO = 'enable_servo(%1)';
Blockly.Msg.SERVO_ENABLE_SERVO_PORT = 'port';
Blockly.Msg.SERVO_DISABLE_SERVO = 'disable_servo(%1)';
Blockly.Msg.SERVO_DISABLE_SERVO_PORT = 'port';
Blockly.Msg.SERVO_ENABLE_SERVOS = 'enable_servos()';
Blockly.Msg.SERVO_DISABLE_SERVOS = 'disable_servos()';
Blockly.Msg.SERVO_SET_SERVO_ENABLED = 'set_servo_enabled(%1, %2)';
Blockly.Msg.SERVO_SET_SERVO_ENABLED_PORT = 'port';
Blockly.Msg.SERVO_SET_SERVO_ENABLED_ENABLED = 'enabled';
Blockly.Msg.SERVO_GET_SERVO_ENABLED = 'get_servo_enabled(%1)';
Blockly.Msg.SERVO_GET_SERVO_ENABLED_PORT = 'port';
Blockly.Msg.SERVO_GET_SERVO_POSITION = 'get_servo_position(%1)';
Blockly.Msg.SERVO_GET_SERVO_POSITION_PORT = 'port';
Blockly.Msg.SERVO_SET_SERVO_POSITION = 'set_servo_position(%1, %2)';
Blockly.Msg.SERVO_SET_SERVO_POSITION_PORT = 'port';
Blockly.Msg.SERVO_SET_SERVO_POSITION_POSITION = 'position';
Blockly.Msg.TIME_MSLEEP = 'msleep(%1)';
Blockly.Msg.TIME_MSLEEP_MSECS = 'msecs';
Blockly.Msg.TIME_SYSTIME = 'systime()';
Blockly.Msg.TIME_SECONDS = 'seconds()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_MILLISECONDS = 'wait_for_milliseconds(%1)';
Blockly.Msg.WAIT_FOR_WAIT_FOR_MILLISECONDS_MSECS = 'msecs';
Blockly.Msg.WAIT_FOR_WAIT_FOR_TOUCH = 'wait_for_touch(%1)';
Blockly.Msg.WAIT_FOR_WAIT_FOR_TOUCH_PORT = 'port';
Blockly.Msg.WAIT_FOR_WAIT_FOR_A_BUTTON = 'wait_for_a_button()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_B_BUTTON = 'wait_for_b_button()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_C_BUTTON = 'wait_for_c_button()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_X_BUTTON = 'wait_for_x_button()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_Y_BUTTON = 'wait_for_y_button()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_Z_BUTTON = 'wait_for_z_button()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_SIDE_BUTTON = 'wait_for_side_button()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_ANY_BUTTON = 'wait_for_any_button()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_A_BUTTON_CLICKED = 'wait_for_a_button_clicked()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_B_BUTTON_CLICKED = 'wait_for_b_button_clicked()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_C_BUTTON_CLICKED = 'wait_for_c_button_clicked()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_X_BUTTON_CLICKED = 'wait_for_x_button_clicked()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_Y_BUTTON_CLICKED = 'wait_for_y_button_clicked()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_Z_BUTTON_CLICKED = 'wait_for_z_button_clicked()';
Blockly.Msg.WAIT_FOR_WAIT_FOR_SIDE_BUTTON_CLICKED = 'wait_for_side_button_clicked()';
Blockly.Msg.CONTROL_RUN = 'when program starts';
