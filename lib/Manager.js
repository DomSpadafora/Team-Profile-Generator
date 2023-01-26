//bringing in the Manager class
const Employee = require('./Employee')

//extend the employee consturctors to the engineer
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //calling on employee constructors
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //get method to return office number
    getOfficeNumber() {
        return this.officeNumber
    }
    // get method to replace role
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager