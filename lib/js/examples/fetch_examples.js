'use strict';

var Js_json = require("rescript/lib/js/js_json.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Js_promise2 = require("rescript/lib/js/js_promise2.js");
var Webapi__Fetch = require("../src/Webapi/Webapi__Fetch.js");

Js_promise2.then(Js_promise2.then(fetch("/api/hellos/1"), (function (prim) {
            return prim.text();
          })), (function (text) {
        return Promise.resolve((console.log(text), undefined));
      }));

Js_promise2.then(Js_promise2.then(fetch("/api/hello", Webapi__Fetch.RequestInit.make("Post", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)), (function (prim) {
            return prim.text();
          })), (function (text) {
        return Promise.resolve((console.log(text), undefined));
      }));

Js_promise2.then(Js_promise2.then(Js_promise2.then(Js_promise2.then(fetch("/api/fruit"), (function (prim) {
                    return prim.json();
                  })), (function (json) {
                return Promise.resolve(Js_json.decodeArray(json));
              })), (function (opt) {
            return Promise.resolve(Belt_Option.getExn(opt));
          })), (function (items) {
        return Promise.resolve(items.map(function (item) {
                        return Belt_Option.getExn(Js_json.decodeString(item));
                      }));
      }));

var payload = {};

payload["hello"] = "world";

Js_promise2.then(fetch("/api/hello", Webapi__Fetch.RequestInit.make("Post", {
              "Content-Type": "application/json"
            }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)), (function (prim) {
        return prim.json();
      }));

var formData = new FormData();

formData.append("image0", {
      type: "image/jpg",
      uri: "path/to/it",
      name: "image0.jpg"
    }, undefined);

Js_promise2.then(fetch("/api/upload", Webapi__Fetch.RequestInit.make("Post", {
              Accept: "*"
            }, Caml_option.some(formData), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)), (function (prim) {
        return prim.json();
      }));

var controller = new AbortController();

fetch("/api/fruit", Webapi__Fetch.RequestInit.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Caml_option.some(controller.signal), undefined));

controller.abort();

/*  Not a pure module */
