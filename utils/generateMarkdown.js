// Function to generate a License badge
function renderLicenseBadge(license) {

  if (license === "GNU Affero General Public License v3.0") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)";
} else if (license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
} else if (license === "GNU Lesser General Public License v3.0") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)";
} else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
} else if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
} else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
} else {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
}


}

// Function to generate a link using the badge as an anchor
function renderLicenseLink(license) {

  if (license === "GNU Affero General Public License v3.0") {
    return `${renderLicenseBadge()}](https://www.gnu.org/licenses/agpl-3.0)`;
} else if (license === "GNU General Public License v3.0") {
    return `${renderLicenseBadge()}](https://www.gnu.org/licenses/gpl-3.0)`;
} else if (license === "GNU Lesser General Public License v3.0") {
    return `${renderLicenseBadge()}](https://www.gnu.org/licenses/lgpl-3.0)`;
} else if (license === "Apache License 2.0") {
    return `${renderLicenseBadge()}](https://opensource.org/licenses/Apache-2.0)`;
} else if (license === "Boost Software License 1.0") {
    return `${renderLicenseBadge()}](https://www.boost.org/LICENSE_1_0.txt)`;
} else if (license === "MIT") {
    return `${renderLicenseBadge()}](https://opensource.org/licenses/MIT)`;
} else {
    return `${renderLicenseBadge()}](https://opensource.org/licenses/MPL-2.0)`;
}



}

// Functions that generates the license section
function renderLicenseSection(license) {

  return `

 
  ${renderLicenseLink()}
  `

}

// Generates README
function generateMarkdown(data) {
  return `
  
  # Project Title
  ${data.title}
  
  # Description
  ${data.description}
  
  # Table of Contents 
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#Installation)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#questions--contact-information)
      
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License 
  ${renderLicenseSection()}
  # Contributing 
  ${data.contributions}
  # Tests
  ${data.testing}
  # Questions & Contact Information 
  * GitHub Username: [github.com/${data.userName}](github.com/${data.userName})
  * Contact Email: ${data.contact}

`;
}

module.exports = generateMarkdown;
