'use strict';

var Webapi__Dom__ProgressEvent = require("../../../src/Webapi/Dom/Webapi__Dom__ProgressEvent.js");

var $$event = new ProgressEvent("my-event");

Webapi__Dom__ProgressEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
