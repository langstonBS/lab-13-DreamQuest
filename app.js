import newUser from './createUser.js';
//imported to create uer object


const myForm = document.getElementById('user-form');
//get form data from inedx.HTML


myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(myForm);

    const user = newUser(formData);
    const stringUser = JSON.stringify(user);
    
    localStorage.setItem('USER', stringUser);
    //puts data in Local storage 
});