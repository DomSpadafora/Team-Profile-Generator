//require employee
const Employee = require('../lib/Employee');

//write a test to see if you can instantiate an Employee instance 
test('Can instantiate Employee instance', () => {
//variable for new employee with name, id, & email
    const employee = new Employee('John', '45689', 'johndoe@gmail.com');
    expect(employee.name).toBe('John');
    expect(employee.id).toBe('45689');
    expect(employee.email).toBe('johndoe@gmail.com');
});


test('Can set name via constructor arguments', () => {
    
})