// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [

{

    type: "input",
    name:"username",
    message: "Please enter your GitHub Username",
    default: "GitHub User"

},

{

    type: "input",
    name: "title",
    message: "Please enter the title of your project",
    default: "My Project"

}, 

{

    type: "input",
    name: "repository",
    message: "Please enter the name of your GitHub Repository",
    default: "My Repo"

},

{

    type: "input",
    name: "description",
    message: "Please enter a description of your project",
    default:"My Description"

}, 

{

    type: "input",
    name: "installation",
    message: "Please describe how to install the software/application",
    default:"N/A"


},

{

    type: "input",
    name: "usage",
    message: "Please describe how users can operate your program/application",
    default: "N/A"

},

{

    type:"input",
    name: "testing",
    message: "Please enter testing instructions for users",
    default:"N/A"

},

{

    type: "input",
    name: "contributions",
    message: "Please describe how users can further contribute to your project",
    default: "Contributions Welcome!"

}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
