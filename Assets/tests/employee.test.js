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



// + tests
    //test constructor functions for different types of employees
    //'Descripe intern manager - should be an object
    //describe functions
    //use one test file for each type of employee
    //node tests all test files ****ONLY IN THE TEST FOLDER****