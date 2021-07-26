const Employee = require("../lib/Employee");
//require jest in test files, not index (maybe? Look at activities)

describe("Engineer", () => {
    describe("Get ID", () => {
        it("should return the engineer's id number")
        const engineer = new Engineer(001, "Paul", "paul@company.com", "Paul001");
        const id = engineer.id

        expect(id).toEqual(engineer.id)
    });
});