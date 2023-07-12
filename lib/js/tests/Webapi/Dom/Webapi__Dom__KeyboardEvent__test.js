'use strict';

var Webapi__Dom__KeyboardEvent = require("../../../src/Webapi/Dom/Webapi__Dom__KeyboardEvent.js");

var $$event = new KeyboardEvent("my-event");

Webapi__Dom__KeyboardEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

Webapi__Dom__KeyboardEvent.getModifierState($$event, "Alt");

exports.$$event = $$event;
/* event Not a pure module */
