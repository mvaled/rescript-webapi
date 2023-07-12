'use strict';

var Webapi__Dom__TransitionEvent = require("../../../src/Webapi/Dom/Webapi__Dom__TransitionEvent.js");

var $$event = new TransitionEvent("my-event");

Webapi__Dom__TransitionEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
