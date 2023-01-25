//include all packages/classes needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
const manager  = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const employee = require('./lib/Employee');
const { validateHeaderName } = require('http');

//add team members empty array
const teamMembers = [];



//prompting the manager first to begin the team
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        },
    //logout the responses
    ]).then(responses => {
        console.log(responses.name);
        console.log(responses.id);
        console.log(responses.email);
        console.log(responses.officeNumber);
    })

}
promptManager();