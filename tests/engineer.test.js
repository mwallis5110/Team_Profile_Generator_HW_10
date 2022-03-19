const { expect, it } = require("@jest/globals");
const { describe } = require("yargs");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Get Github username", () => {
        it("should return the engineer's github username")
        const engineer = new Engineer(001, "Paul", "paul@company.com", "Paul001");
        const githubUserName = engineer.githubUserName

        expect(githubUserName).toEqual(engineer.getGithub())
    });
});