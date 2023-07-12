'use strict';

var Webapi__Dom__UiEvent = require("../../../src/Webapi/Dom/Webapi__Dom__UiEvent.js");

var $$event = new UIEvent("my-event");

Webapi__Dom__UiEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
