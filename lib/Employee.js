class Employee {
    //constructor that takes in name, id, email
    constructor (name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    //get method that returns this.name
    getName() {
        return this.name;
    }
    
    //get method that returns this.id
    getId() {
        return this.id;
    }

    //get method that returns this.email
    getEmail() {
        return this.email;
    }

    //get method that returns this.employee
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee