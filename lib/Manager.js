const Employee = require("./Employee");

class Manager extends Employee {
  constructor(employeeName, id, email, officeNumber) {
    super(employeeName, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
