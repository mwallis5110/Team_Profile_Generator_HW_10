const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const {
  generateEngineerHtml,
  generateInternHtml,
  generateManagerHtml,
} = require("./utils/generateHTML");

//inquirer prompts - Basic employee questions

const employeeQuestions = [
  {
    type: "input",
    message: "Employee Name: ",
    name: "employeeName",
  },
  {
    type: "input",
    message: "Employee ID: ",
    name: "id",
  },
  {
    type: "input",
    message: "Employee Email: ",
    name: "email",
  },
  {
    type: "rawlist",
    message:
      'What is this employee\'s role within the company? (Use up/down arrows and "enter" key to select) ',
    name: "role",
    choices: ["Engineer", "Intern", "Manager"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "GitHub Username: ",
    name: "githubUserName",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "School Name: ",
    name: "school",
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "Office Number: ",
    name: "officeNumber",
  },
];

inquirer.prompt(employeeQuestions).then((res) => {
  employeeObj = res;
  if (res.role == "Engineer") {
    inquirer.prompt(engineerQuestions).then((res) => {
      employeeObj.githubUserName = res.githubUserName;
      fs.writeFile(
        "./dist/index.html",
        generateEngineerHtml(employeeObj),
        (err) => {
          err ? console.log(err) : console.log("Success!");
        }
      );
    });
  }
  if (res.role == "Intern") {
    inquirer.prompt(internQuestions).then((res) => {
      employeeObj.school = res.school;
      fs.writeFile(
        "./dist/index.html",
        generateInternHtml(employeeObj),
        (err) => {
          err ? console.log(err) : console.log("Success!");
        }
      );
    });
  }
  if (res.role == "Manager") {
    inquirer.prompt(managerQuestions).then((res) => {
      employeeObj.officeNumber = res.officeNumber;
      fs.writeFile(
        "./dist/index.html",
        generateManagerHtml(employeeObj),
        (err) => {
          err ? console.log(err) : console.log("Success!");
        }
      );
    });
  }
});
