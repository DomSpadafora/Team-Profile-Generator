//require engineer 
const Engineer = require('../lib/Engineer');

const engineer = new Engineer('John', '45689', 'johndoe@gmail.com', 'johndoe25');

test('Add new constructor for github user name', () => {
    expect(engineer.github).toBe('johndoe25')    
});


test('Can get GitHub username via getEmail method', () => {
    expect(engineer.getGithub()).toBe('johndoe25')    
});

test('Can get the engineer role via getRole method', () => {
    expect(engineer.getRole()).toBe('Engineer')    
});