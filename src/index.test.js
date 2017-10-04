/* eslint-disable */

const { expect } = require("chai");
const starWars = require("./index");

describe("starWarNames", () => {
  it("should work", () => {
    expect(false).to.be.false;
  });
  it("should return array of names", () => {
    expect(starWars.all()).to.be.an("array");
  });
  it("should return one random name", () => {
    expect(starWars.random()).to.be.an("string");
  });
  it("should return two random names", () => {
    expect(starWars.random(2)).to.be.an("array");
    expect(starWars.random(2)).to.have.lengthOf(2);
  });
});
