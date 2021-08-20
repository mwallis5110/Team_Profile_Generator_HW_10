const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(employeeName, id, email, githubUserName) {
    super(employeeName, id, email);
    this.role = "Engineer";
    this.githubUserName = githubUserName;
  }

  getGithub() {
    return this.githubUserName;
  }
}

module.exports = Engineer;
