//include all packages/classes needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
const Manager  = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const writeHTML = require('./src/page-template');

//add team members empty array
const teamMembers = [];



//prompting the manager first to begin the team
const promptManager = () => {
    console.log('Come on in Manager')
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
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        },
    
    ]).then(responses => {
        const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber)
        teamMembers.push(manager);
        console.log(manager)
        addTeamMember()

    })
};

//adding function for 3 choices once a new employee has been added. 
const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add to the team?',
            choices: ['Engineer', 'Intern', 'Finished building my team']
        }])
        .then(managerSelection => {
            switch (managerSelection.role) {
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                case 'Finished building my team':
                    generateTeam()
            }
        })
}
//function for if engineer is selected 
const engineerQuestions = () => {
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
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
    ]).then(responses => {
        const engineer = new Engineer(responses.name, responses.id, responses.email, responses.github)
        teamMembers.push(engineer);
        addTeamMember()

    })
}
//function for if intern is selected 
const internQuestions = () => {
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
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did you attend?'
        },
    ]).then(responses => {
        const intern = new Intern(responses.name, responses.id, responses.email, responses.school)
        teamMembers.push(intern);
        addTeamMember()

    })
}
//function for if finished building team is selected
function generateTeam() {
    fs.writeFileSync('./dist/index.html', writeHTML(teamMembers), 'utf-8');
}
promptManager();