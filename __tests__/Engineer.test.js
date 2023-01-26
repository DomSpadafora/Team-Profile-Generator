//require engineer 
const Engineer = require('../lib/Engineer');



//write a test to see if you can instantiate an engineer instance via constructor values 
test('Can instantiate engineer instance with constructor values', () => {
//variable for new employee with name, id, email, & github username
    const engineer = new Engineer('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('45689');
    expect(engineer.email).toBe('johndoe@gmail.com');;
    expect(engineer.github).toBe('johndoe25');
});


test('Can get name via getName method', () => {
    const engineer = new Engineer('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(engineer.getName()).toBe('John')    
});

test('Can get id via getId method', () => {
    const engineer = new Engineer('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(engineer.getId()).toBe('45689')    
});

test('Can get email via getEmail method', () => {
    const engineer = new Engineer('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(engineer.getEmail()).toBe('johndoe@gmail.com')    
});

test('Can get GitHub username via getEmail method', () => {
    const engineer = new Engineer('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(engineer.getGithub()).toBe('johndoe25')    
});

test('Can get the engineer role via getRole method', () => {
    const engineer = new Engineer('John', '45689', 'johndoe@gmail.com', 'johndoe25');
    expect(engineer.getRole()).toBe('Engineer')    
});