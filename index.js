const inquirer = require("inquirer");
const fs = require("fs");
const { builtinModules } = require("module");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "name",
      validate: function (input) {
          let result = false;
          if (input) {
            result = true;
          } else {
              console.log("this aint valid")
          }
          return result;
      }
    },
    {
      type: "input",
      message: "Describe your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Please enter user story:",
      name: "user",
    },
    {
      type: "input",
      message: "What was your motivation/why you made this project/What problem does this project solve?",
      name: "why",
    },
    {
      type: "input",
      message: "How is this project unique?",
      name: "unique",
    },
    {
      type: "input",
      message: "Please choose a photo to include of your project:",
      name: "photo",
    },
    {
      type: "input",
      message: "How will your client use this project?",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter the github username",
      name: "url",
    },
    {
      type: "input",
      message: "Who is the author?",
      name: "author",
    },
    {
      type: "list",
      message: "What type of license do you have?",
      choices: ["MIT", "ISC"],
      name: "copyright",
    },
    {
      type: "input",
      message: "Enter label for your Badge:",
      name: "label",
    },
    {
      type: "input",
      message: "Enter message for your Badge:",
      name: "message",
    },
    {
      type: "list",
      message: "What type of license do you have?",
      choices: ["brightgreen", "green", "yellowgreen", "yellow", "orange", "red", "blue"],
      name: "color",
    },
  ])
  .then((response) => {
    console.log(response.name);
    fs.writeFile(
      "./readme/readme.md",
      `## ${response.name}\n\n${response.description}\n\n## User Story\n\n${response.user}\n\n## Motivation\n\n${response.why}\n\n## Uniqueness\n\n${response.unique}\n\n## Preview Photo\n\n![img](./${response.photo})\n\n## Usage\n\n${response.usage}\n\n## Git Hub URL\n\nhttps://github.com/${response.url}\n\n## Author\n\n${response.author}\n\n## License\n\nThis project is protected by the ${response.copyright} license. Copyright J Cubed LLC\n\n## Badge\n\n![img](https://img.shields.io/badge/${response.label}-${response.message}-${response.color})`,
      "utf8",
      (err) => {
        if (err) throw err;
        console.log("success");
      }
    );
  });
