const Intern = require("./Employee");

class Intern extends Employee {
  constructor(employeeName, id, email) {
    super(employeeName, id. email);
    this.role = "Intern";
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
