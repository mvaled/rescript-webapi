'use strict';

var Webapi__Dom__BeforeUnloadEvent = require("../../../src/Webapi/Dom/Webapi__Dom__BeforeUnloadEvent.js");

var $$event = new BeforeUnloadEvent("my-event");

Webapi__Dom__BeforeUnloadEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
