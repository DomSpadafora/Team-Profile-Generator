//require employee
const Employee = require('../lib/Employee');

//variable for new employee with name, id, & email
const employee = new Employee('John', '45689', 'johndoe@gmail.com');

//write a test to see if you can instantiate an Employee instance via constructor values 
test('Can instantiate Employee instance with constructor values', () => {
    expect(employee.name).toBe('John');
    expect(employee.id).toBe('45689');
    expect(employee.email).toBe('johndoe@gmail.com');
});

test('Can get name via getName method', () => {
    expect(employee.getName()).toBe('John')    
});

test('Can get id via getId method', () => {
    expect(employee.getId()).toBe('45689')    
});

test('Can get email via getEmail method', () => {
    expect(employee.getEmail()).toBe('johndoe@gmail.com')    
});

test('Can get the employee role via getRole method', () => {
    expect(employee.getRole()).toBe('Employee')    
});