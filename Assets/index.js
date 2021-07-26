const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

//Define constructors in other file and export them
//inquirer prompts

const employeeQuestions = [
    {
        type: 'input',
        message: 'Employee Name: ',
        name: 'employeeName',
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Employee Email: ',
        name: 'email',
    },
];
//run constructor files to create new employees
//push each employee object to an array
    //loop over that array - use template literal, ends up as html string that makes up each card
//have a basic html file to add to
//create dynamic content

//Create employee class
//create manager which extends employee
//create constructor


// + tests
    //test constructor functions for different types of employees
    //'Descripe intern manager - should be an object
    //describe functions
    //use one test file for each type of employee
    //node tests all test files ****ONLY IN THE TEST FOLDER****