const Employee = require("./Employee");

class Intern extends Employee {
  constructor(employeeName, id, email, school) {
    super(employeeName, id, email);
    this.role = "Intern";
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
