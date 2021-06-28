// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [

{

    type: "input",
    name:"userName",
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

},

{

    type: "input",
    name: "contact",
    message: "Please enter an email so that users may contact you",
    default: "email@123.com"

},

{
    type: "list",
    name: "license",
    message: "License:",
    choices: [
        "Apache license 2.0",
        "GNU General Public License v3.0",
        "MIT",
        "Boost Software License 1.0",
        "GNU Affero General Public License v3.0",
        "GNU Lesser General Public License v3.0",
        "Mozilla Public License 2.0",
       
    ],
},


];

// function retrieveLicense(value) {
//     if (value === "GNU Affero General Public License v3.0") {
//         return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
//     } else if (value === "GNU General Public License v3.0") {
//         return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
//     } else if (value === "GNU Lesser General Public License v3.0") {
//         return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
//     } else if (value === "Apache License 2.0") {
//         return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//     } else if (value === "Boost Software License 1.0") {
//         return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
//     } else if (value === "MIT") {
//         return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//     } else {
//         return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
//     }
// }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, data) => {
		return err ? err : data;
	});
}


// TODO: Create a function to initialize app
async function init() {


    console.log(
		`--------------------------------------------------------
README GENERATOR
Please input information according to the prompts that describes
your project/application so that a professional README file can 
be generated for you!
--------------------------------------------------------`
	);

	try {
		const responses = await inquirer.prompt(questions);
		const readme = generateMarkdown(responses);

		writeToFile("sample-README.md", readme);
		console.log(`
        Your professional README file has been successfully generated!`);
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}



// Function call to initialize app
init();
