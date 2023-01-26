//require engineer 
const Intern = require('../lib/Intern');

//create new intern object to be used through whole page
const intern = new Intern('John', '45689', 'johndoe@gmail.com', 'OSU');

 
test('Add new constructor for school to the Intern', () => {
    expect(intern.school).toBe('OSU');
});

test('Can get school via getSchool method', () => {
    expect(intern.getSchool()).toBe('OSU');  
});

test('Can get the Intern role via getRole method', () => {
    expect(intern.getRole()).toBe('Intern')    
});