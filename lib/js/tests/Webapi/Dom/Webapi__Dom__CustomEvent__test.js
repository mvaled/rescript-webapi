'use strict';

var Webapi__Dom__CustomEvent = require("../../../src/Webapi/Dom/Webapi__Dom__CustomEvent.js");

var $$event = new CustomEvent("my-event");

Webapi__Dom__CustomEvent.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

var Detail = {};

var EventWithDetail = Webapi__Dom__CustomEvent.Make(Detail);

var eventWithDetail = new CustomEvent("event-with-detail");

var eventWithOptions = new CustomEvent("event-with-detail", {
      detail: {
        component: "test-component"
      }
    });

EventWithDetail.eventPhase(eventWithDetail);

EventWithDetail.eventPhase(eventWithOptions);

eventWithDetail.preventDefault();

eventWithDetail.stopImmediatePropagation();

eventWithDetail.stopPropagation();

eventWithOptions.preventDefault();

eventWithOptions.stopImmediatePropagation();

eventWithOptions.stopPropagation();

exports.$$event = $$event;
exports.Detail = Detail;
exports.EventWithDetail = EventWithDetail;
exports.eventWithDetail = eventWithDetail;
exports.eventWithOptions = eventWithOptions;
/* event Not a pure module */
