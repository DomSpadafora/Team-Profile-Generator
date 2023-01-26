//require engineer 
const Engineer = require('./lib/Engineer');



//write a test to see if you can instantiate an Employee instance via constructor values 
test('Can instantiate Employee instance with constructor values', () => {
//variable for new employee with name, id, email, & github username
    const employee = new Employee('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(employee.name).toBe('John');
    expect(employee.id).toBe('45689');
    expect(employee.email).toBe('johndoe@gmail.com');;
    expect(employee.github).toBe('johndoe25');
});


test('Can get name via getName method', () => {
    const employee = new Employee('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(employee.getName()).toBe('John')    
});

test('Can get id via getId method', () => {
    const employee = new Employee('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(employee.getId()).toBe('45689')    
});

test('Can get email via getEmail method', () => {
    const employee = new Employee('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(employee.getEmail()).toBe('johndoe@gmail.com')    
});

test('Can get GitHub username via getEmail method', () => {
    const employee = new Employee('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(employee.getGithub()).toBe('johndoe25')    
});

test('Can get the employee role via getEmployee method', () => {
    const employee = new Employee('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(employee.getEmployee()).toBe('Employee')    
});