'use strict';

var Webapi__Dom__PointerEvent = require("../../../src/Webapi/Dom/Webapi__Dom__PointerEvent.js");

var $$event = new PointerEvent("my-event");

Webapi__Dom__PointerEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

Webapi__Dom__PointerEvent.getModifierState($$event, "Alt");

Webapi__Dom__PointerEvent.pointerType($$event);

exports.$$event = $$event;
/* event Not a pure module */
