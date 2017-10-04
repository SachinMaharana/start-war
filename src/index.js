"use strict";

const starWarNames = require("./star-wars-names.json");

let getRandomItem = () =>
  starWarNames[Math.floor(Math.random() * starWarNames.length)];

const all = function() {
  return starWarNames;
};

const random = function(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
};

module.exports = {
  all,
  random
};
