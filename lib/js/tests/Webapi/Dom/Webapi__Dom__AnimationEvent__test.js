'use strict';

var Webapi__Dom__AnimationEvent = require("../../../src/Webapi/Dom/Webapi__Dom__AnimationEvent.js");

var $$event = new AnimationEvent("my-event");

Webapi__Dom__AnimationEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
