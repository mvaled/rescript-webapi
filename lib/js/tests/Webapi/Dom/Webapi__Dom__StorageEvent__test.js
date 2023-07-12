'use strict';

var Webapi__Dom__StorageEvent = require("../../../src/Webapi/Dom/Webapi__Dom__StorageEvent.js");

var $$event = new StorageEvent("my-event");

Webapi__Dom__StorageEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
