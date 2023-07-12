'use strict';

var Webapi__Dom__CompositionEvent = require("../../../src/Webapi/Dom/Webapi__Dom__CompositionEvent.js");

var $$event = new CompositionEvent("my-event");

Webapi__Dom__CompositionEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
