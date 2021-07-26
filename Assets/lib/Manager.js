const Manager = require("./Employee");

//Create manager which extends employee

class Manager extends Employee {
    constructor (employeeName, id, email) {
    super(office);
    this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    };
}

module.exports = Manager;