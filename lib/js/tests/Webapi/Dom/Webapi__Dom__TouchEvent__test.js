'use strict';

var Webapi__Dom__TouchEvent = require("../../../src/Webapi/Dom/Webapi__Dom__TouchEvent.js");

var $$event = new TouchEvent("my-event");

Webapi__Dom__TouchEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
