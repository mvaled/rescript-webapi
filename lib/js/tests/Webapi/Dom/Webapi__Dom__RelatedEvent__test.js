'use strict';

var Webapi__Dom__RelatedEvent = require("../../../src/Webapi/Dom/Webapi__Dom__RelatedEvent.js");

var $$event = new RelatedEvent("my-event");

Webapi__Dom__RelatedEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
