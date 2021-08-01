const { expect, it } = require("@jest/globals");
const { describe } = require("yargs");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Get school", () => {
    it("should return the intern's school name");
    const intern = new Intern(001, "Paul", "paul@company.com", "University of Texas at Austin");
    const school = intern.school;

    expect(school).toEqual(intern.school);
  });
});
