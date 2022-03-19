const inquirer = require("inquirer");
// const jest = require("jest");
const fs = require("fs");
const generateHtml = require("./utils/generateHTML.js");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const employeeArray = [];

//inquirer prompts - Basic employee questions

function askFirstQuestions() {
  return inquirer.prompt([
    {
      type: "rawlist",
      message:
        'What is this employee\'s role within the company? Use up/down arrows and "enter" key to select. Select "Exit Program" to compile cards.',
      name: "role",
      choices: ["Engineer", "Intern", "Manager", "Exit Program"],
    },
  ]);
}

function askEmployeeQuestions() {
  return inquirer.prompt([
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
  ]);
}

function askEngineerQuestions() {
  askEmployeeQuestions().then((employeeAnswers) => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "GitHub Username: ",
          name: "githubUserName",
        },
      ])
      .then((engineerAnswers) => {
        const newEngineer = new Engineer(
          employeeAnswers.employeeName,
          employeeAnswers.id,
          employeeAnswers.email,
          engineerAnswers.githubUserName
        );
        employeeArray.push(generateHtml.generateEngineerHtml(newEngineer));
        initialPrompt();
      });
  });
}

function askInternQuestions() {
  askEmployeeQuestions().then((employeeAnswers) => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "School Name: ",
          name: "school",
        },
      ])
      .then((internAnswers) => {
        const newIntern = new Intern(
          employeeAnswers.employeeName,
          employeeAnswers.id,
          employeeAnswers.email,
          internAnswers.school
        );
        employeeArray.push(generateHtml.generateInternHtml(newIntern));
        initialPrompt();
      });
  });
}

function askManagerQuestions() {
  askEmployeeQuestions().then((employeeAnswers) => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Office Number: ",
          name: "officeNumber",
        },
      ])
      .then((managerAnswers) => {
        const newManager = new Manager(
          employeeAnswers.employeeName,
          employeeAnswers.id,
          employeeAnswers.email,
          managerAnswers.officeNumber
        );
        employeeArray.push(generateHtml.generateManagerHtml(newManager));
        initialPrompt();
      });
  });
}

function generateFinalHtml() {
  fs.writeFile(
    "./dist/index.html",
    generateHtml.generatePageHtml(employeeArray),
    (err) => {
      err ? console.log(err) : console.log("Success!");
    }
  );
}

function initialPrompt() {
  askFirstQuestions().then((initialPrompt) => {
    if (initialPrompt.role == "Engineer") {
      askEngineerQuestions();
    } else if (initialPrompt.role == "Intern") {
      askInternQuestions();
    } else if (initialPrompt.role == "Manager") {
      askManagerQuestions();
    } else {
      generateFinalHtml();
    }
  });
}

initialPrompt();
