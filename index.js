const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");



// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions_manager = [{
        name: "manager_name",
        type: "input",
        message: "What's the team manager's name?:"
    },
    {
        name: "manager_ID",
        type: "input",
        message: "What's the team manager's employee ID?:"
    },
    {
        name: "manager_email",
        type: "input",
        message: "What's the team manager's email address?:"
    },
    {
        name: "manager_officeNumber",
        type: "input",
        message: "What's the team manager's office number?:"
    }
]