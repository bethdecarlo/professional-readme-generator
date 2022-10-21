

// Creates a function to generate markdown for README


function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License Badge](https://img.shields.io/github/license/${data.github}/${data.repo})
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  * Checkout my [GitHub profile](https://github.com/${data.github})
  
  * Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 
  ## License
  Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved.
  
  Licensed under the ${data.license} license.
  
`;
}

module.exports = generateMarkdown;