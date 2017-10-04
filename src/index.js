const starWarNames = require('./star-wars-names.json');

const getRandomItem = () =>
  starWarNames[Math.floor(Math.random() * starWarNames.length)];

const all = function all() {
  return starWarNames;
};

const random = function random(number) {
  if (number === undefined) {
    return getRandomItem();
  }
  const randomItems = [];
  for (let i = 0; i < number; i += 1) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
};

module.exports = {
  all,
  random,
};
