'use strict';

var Webapi__Dom__ClipboardEvent = require("../../../src/Webapi/Dom/Webapi__Dom__ClipboardEvent.js");

var $$event = new ClipboardEvent("my-event");

Webapi__Dom__ClipboardEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
