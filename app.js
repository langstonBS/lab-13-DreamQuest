

const myForm = document.getElementById('user-form');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(myForm);
    console.log(formData.get('class'), formData.get('name'));
});