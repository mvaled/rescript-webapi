'use strict';

var Webapi__Dom__PageTransitionEvent = require("../../../src/Webapi/Dom/Webapi__Dom__PageTransitionEvent.js");

var $$event = new PageTransitionEvent("my-event");

Webapi__Dom__PageTransitionEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
