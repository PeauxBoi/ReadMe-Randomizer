// populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">❤️${answers.projectTitle}❤️</h1>
  
## Description
🔍 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## License
This application is covered by the ${answers.license} license. 

## Contributing
👪 ${answers.contributing}

## Tests
✏️ ${answers.tests}

## Questions
✋ ${answers.questions}<br />
<br />
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
<br />
✉️ Email me with any questions: ${answers.email}<br />

_🔥🔥🔥 This README was generated with by [README-generator]❤️[${answers.username}]❤️ 🔥🔥🔥_
    `;
  }
  
  module.exports = generateReadme;