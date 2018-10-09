"use strict";

const d3 = require("d3-dsv")
  , data = [
    {
      name: "caue"
      , age: 23
    }
    , {
      name: "daniel"
      , age: 28
    }
    , {
      name: "paulo"
      , age: 24
    }
    , {
      name: "bruno"
      , age: 1
    }
  ];

console.log(d3.csvFormat(data));
console.log(d3.tsvFormat(data));