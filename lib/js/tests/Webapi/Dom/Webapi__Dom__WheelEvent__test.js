'use strict';

var Webapi__Dom__WheelEvent = require("../../../src/Webapi/Dom/Webapi__Dom__WheelEvent.js");

var $$event = new WheelEvent("my-event");

Webapi__Dom__WheelEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

Webapi__Dom__WheelEvent.deltaMode($$event);

exports.$$event = $$event;
/* event Not a pure module */
