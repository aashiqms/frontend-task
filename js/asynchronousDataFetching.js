/**
 * This is a function fetches user data from jsonplaceholder api and logs users to console
 *
 * @return {array} A array of users from jsonplaceholder api
 *
 */
const getUsers = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    console.log('users', users);
    return users;
}

getUsers()

