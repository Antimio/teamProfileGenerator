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


const questions_team = [{
        name: "role",
        type: "rawlist",
        message: "Would you like to add a team member at this stage? If so, what is the role of the new team member?:",
        choices: ["Add an engineer", "Add an intern", "No, I'm done bulding the team. Exit application!"],
        default: "No, I'm done bulding the team. Exit application!"
    },
    {
        name: "engineer_name",
        type: "input",
        when: function(answers) {
            return answers.role === "Add an engineer";
        },
        message: "What's this engineer's name?:",
    },
    {
        name: "engineer_ID",
        type: "input",
        when: function(answers) {
            return answers.role === "Add an engineer";
        },
        message: "What's this engineer's employee ID?:",
    }, {
        name: "engineer_email",
        type: "input",
        when: function(answers) {
            return answers.role === "Add an engineer";
        },
        message: "What's this engineer's email address?:",
    }, {
        name: "engineer_github",
        type: "input",
        when: function(answers) {
            return answers.role === "Add an engineer";
        },
        message: "What's this engineer's GitHub username?:",
    },
    {
        name: "intern_name",
        type: "input",
        when: function(answers) {
            return answers.role === "Add an intern";
        },
        message: "What's this intern's name?:",
    }, {
        name: "intern_ID",
        type: "input",
        when: function(answers) {
            return answers.role === "Add an intern";
        },
        message: "What's this intern's employee ID?:",
    }, {
        name: "intern_email",
        type: "input",
        when: function(answers) {
            return answers.role === "Add an intern";
        },
        message: "What's this intern's email address?:",
    }, {
        name: "intern_school",
        type: "input",
        when: function(answers) {
            return answers.role === "Add an intern";
        },
        message: "What's this intern's school?:",
    }
]

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations! Your HTML team sytucture file has been created! Check it out in your output folder!");
    });
}