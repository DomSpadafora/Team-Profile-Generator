//bringing in the Intern class
const Employee = require('./Employee')

//extend the employee consturctors to the engineer
class Intern extends Employee {
    constructor(name, id, email, school) {
        //calling on employee constructors
        super(name, id, email);
        this.school = school;
    }
    //get method to return github username
    getSchool() {
        return this.school
    }
    // get method to replace role
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern