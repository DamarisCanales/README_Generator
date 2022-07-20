// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.Description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [License](#License)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contributors
  ${data.Contributing}

  ## License
  ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.License)}

  ## Tests
  To run this test please use:
  ${data.Tests}
  
  ## Questions
  
  If you have any questions/issues, please contact:
  
  GitHub: http://github.com/${data.GitHub}
  Email: ${data.Email}
  
`;
}

module.exports = generateMarkdown;
