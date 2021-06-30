// Packages required for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for the README file
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
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT",
        "Boost Software License 1.0",
        "GNU Affero General Public License v3.0",
        "GNU Lesser General Public License v3.0",
        "Mozilla Public License 2.0",
       
    ],
},


];

// Function that writes the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, data) => {
		return err ? err : data;
	});
}


// Function to initialize the application
// Waits until all of the questions have been answered
// the generates a README file based on the format in
// the generateMarkdown file
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
        // console.log(readme);
		writeToFile("sample-README.md", readme);
		console.log(`
        Your professional README file has been successfully generated!`);
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}



// Function call to initialize app
init();
