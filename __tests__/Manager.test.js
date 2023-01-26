//require engineer 
const Manager = require('../lib/Manager');

//create new manager object to be used through whole page with office number
const manager = new Manager('John', '45689', 'johndoe@gmail.com', '1234');

 
test('Add new constructor for office number to the Manager', () => {
    expect(manager.officeNumber).toBe('1234');
});

test('Can get office number via getOfficeNumber method', () => {
    expect(manager.getOfficeNumber()).toBe('1234');  
});

test('Can get the manager role via getRole method', () => {
    expect(manager.getRole()).toBe('Manager')    
});