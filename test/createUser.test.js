
// IMPORT MODULES under test here:
import makeUser from '../createUser.js';

const test = QUnit.test;

test('create a user,', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    
    formData.set('name', 'langston');
    formData.set('class', 'me');

    const expected = {
        name: 'langston',
        class: 'me',
        taskComplet: {},
        hp: 50,
        time:100,
    };

    const user = makeUser(formData);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, user);
});
