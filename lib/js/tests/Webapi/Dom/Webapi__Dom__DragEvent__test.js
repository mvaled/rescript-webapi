'use strict';

var Webapi__Dom__DragEvent = require("../../../src/Webapi/Dom/Webapi__Dom__DragEvent.js");

var $$event = new DragEvent("my-event");

Webapi__Dom__DragEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

Webapi__Dom__DragEvent.getModifierState($$event, "Alt");

exports.$$event = $$event;
/* event Not a pure module */
