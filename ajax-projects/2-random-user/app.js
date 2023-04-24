import get from "./modules/getElement.js";
import getUser from "./modules/getUser.js";
import displayUser from "./modules/displayUser.js"

const btn = get('.btn');


const showUser = async () => {
    // get user from api
    const person = await getUser();
    console.log(person);
    // display user
    displayUser(person);

};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);

