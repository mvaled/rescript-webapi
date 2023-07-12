'use strict';

var Webapi__Dom__SvgZoomEvent = require("../../../src/Webapi/Dom/Webapi__Dom__SvgZoomEvent.js");

var $$event = new SVGZoomEvent("my-event");

Webapi__Dom__SvgZoomEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

exports.$$event = $$event;
/* event Not a pure module */
