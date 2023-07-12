'use strict';

var Webapi__Dom__IdbVersionChangeEvent = require("../../../src/Webapi/Dom/Webapi__Dom__IdbVersionChangeEvent.js");

var $$event = new IDBVersionChangeEvent("my-event");

Webapi__Dom__IdbVersionChangeEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
