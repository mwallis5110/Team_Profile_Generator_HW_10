const { expect, it } = require("@jest/globals");
const { describe } = require("yargs");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Get Office Number", () => {
    it("should return the manager's office number");
    const manager = new Manager(1000);
    const manager = manager.officeNumber;

    expect(officeNumber).toEqual(manager.officeNumber);
  });
});
