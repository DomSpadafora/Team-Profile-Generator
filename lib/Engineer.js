//bringing in the Employee class
const Employee = require('./Employee')

//extend the employee consturctors to the engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //calling on employee constructors
        super(name, id, email);
        this.github = github;
    }
    //get method to return github username
    getGithub() {
        return this.github
    }
    // get method to replace role
    getEmployee() {
        return this.employee
    }
}

module.exports = Engineer
