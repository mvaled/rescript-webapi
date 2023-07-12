'use strict';

var Webapi__Dom__PopStateEvent = require("../../../src/Webapi/Dom/Webapi__Dom__PopStateEvent.js");

var $$event = new PopStateEvent("my-event");

Webapi__Dom__PopStateEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
