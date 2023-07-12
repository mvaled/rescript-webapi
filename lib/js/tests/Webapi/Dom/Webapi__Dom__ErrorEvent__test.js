'use strict';

var Webapi__Dom__ErrorEvent = require("../../../src/Webapi/Dom/Webapi__Dom__ErrorEvent.js");

var $$event = new ErrorEvent("my-event");

Webapi__Dom__ErrorEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
