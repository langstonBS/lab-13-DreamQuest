
//creates the user object 


export default function createUser(formData){
    const name = formData.get('name');
    const userClass = formData.get('class');

    const userObject = {
        name: name,
        class: userClass,
        taskComplet: {},
        hp: 50,
        time:100
    };
    return userObject;
}