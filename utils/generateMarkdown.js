// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${data.license} license. 

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions,
-Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
-Email me: ${data.email}

`;
}

module.exports = generateMarkdown;
