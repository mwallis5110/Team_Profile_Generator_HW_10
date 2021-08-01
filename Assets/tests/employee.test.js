const { expect, it } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");
//require jest in test files, not index (maybe? Look at activities)

describe("Employee", () => {
  describe("Get name", () => {
    it("should return the employee's name");
    const employee = new Employee(001, "Paul", "paul@company.com");
    const name = employee.name;

    expect(name).toEqual(employee.name);
  });
});

describe("Employee", () => {
  describe("Get ID", () => {
    it("should return the employee's ID number");
    const employee = new Employee(001, "Paul", "paul@company.com");
    const id = employee.id;

    expect(id).toEqual(employee.id);
  });
});


describe("Employee", () => {
  describe("Get email", () => {
    it("should return the employee's email address");
    const employee = new Employee(001, "Paul", "paul@company.com");
    const email = employee.email;

    expect(email).toEqual(employee.email);
  });
});


// + tests
//test constructor functions for different types of employees
//'Descripe intern manager - should be an object
//describe functions
//use one test file for each type of employee
//node tests all test files ****ONLY IN THE TEST FOLDER****
