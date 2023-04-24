import fetchDrinks from "./src/fetchDrinks.js";
import displaySingleDrink from "./src/displaySingleDrink.js";

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const id = localStorage.getItem('drink');

const presentDrink = async () => {
    if (!id) {
        window.location.href = 'index.html';
    } else {
        const url = baseURL + id;
        const drink = await fetchDrinks(url);
        displaySingleDrink(drink.drinks[0]);
    }


}
window.addEventListener('DOMContentLoaded', presentDrink);
