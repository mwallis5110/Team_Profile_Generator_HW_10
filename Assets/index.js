const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const employeeArray = [];

//inquirer prompts - Basic employee questions

function askFirstQuestions() {
  return inquirer.prompt([
    {
      type: "rawlist",
      message:
        'What is this employee\'s role within the company? (Use up/down arrows and "enter" key to select) ',
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
        employeeArray.push(newEngineer);
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
        const newIntern = new Engineer(
          employeeAnswers.employeeName,
          employeeAnswers.id,
          employeeAnswers.email,
          internAnswers.school
        );
        employeeArray.push(newIntern);
        initialPrompt();
      });
  });
}

function askManagerQuestions() {
  askEmployeeQuestions.then((employeeAnswers) => {
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
        employeeArray.push(newManager);
        initialPrompt();
      });
  });
}

function generateHTML() {
  fs.writeFile("./dist/index.html", generateHTML(employeeArray), (err) => {
    err ? console.log(err) : console.log("Success!");
  });
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
      generateHTML();
    }
  });
}
//   employeeObj = res;

//   if (res.role== "Exit Program") {
//     break;
//     console.log("Done")
//   }

// if (res.role == "Engineer") {
//   inquirer.prompt(engineerQuestions).then((res) => {
//     employeeObj.githubUserName = res.githubUserName;
//     fs.writeFile(
//       "./dist/index.html",
//       generateEngineerHtml(employeeObj),
//       (err) => {
//         err ? console.log(err) : console.log("Success!");
//       }
//     );
//   });
// }

//   if (res.role == "Intern") {
//     inquirer.prompt(internQuestions).then((res) => {
//       employeeObj.school = res.school;
//       fs.writeFile(
//         "./dist/index.html",
//         generateInternHtml(employeeObj),
//         (err) => {
//           err ? console.log(err) : console.log("Success!");
//         }
//       );
//     });
//   }

//   if (res.role == "Manager") {
//     inquirer.prompt(managerQuestions).then((res) => {
//       employeeObj.officeNumber = res.officeNumber;
//       fs.writeFile(
//         "./dist/index.html",
//         generateManagerHtml(employeeObj),
//         (err) => {
//           err ? console.log(err) : console.log("Success!");
//         }
//       );
//     });
//   }
// });
initialPrompt();
