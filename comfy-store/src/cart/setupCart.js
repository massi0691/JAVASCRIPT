// import
import {
    getStorageItem,
    setStorageItem,
    formatPrice,
    getElement,
} from '../utils.js';
import {openCart} from './toggleCart.js';
import {findProduct} from '../store.js';
import addToCartDOM from './addToCartDOM.js';

// set items
const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);
    if (!item) {
        let product = findProduct(id);
        // add item to the cart
        product = {...product,amount:1};
        cart = [...cart, product];
        // add item to the cart DOM
        addToCartDOM(product);
    } else {
       // update values
       //  item.amount++;
         const amount = increaseDecreaseAmount('increase',id);
         const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
         items.forEach((item)=>{
            if(item.previousElementSibling.dataset.id === id){
                item.textContent = amount;
            }
         });
    }
    // add one the item count
    displayCartItemCount()
    // display cart totals
    displayCartTotal();
    // set cart in local storage
    setStorageItem('cart', cart);
    // more stuff coming up
    openCart();
};

function displayCartItemCount(){
    const amount = cart.reduce((total,cartItem)=>{
        return total += cartItem.amount;
    },0);
    cartItemCountDOM.textContent = amount;
}
function displayCartTotal () {
    let total =  cart.reduce((total, cartItem)=>{
        return total += cartItem.price * cartItem.amount
    },0);
    cartTotalDOM.textContent = `Total: ${formatPrice(total)}`;
}
function displayCartItemsDOM() {
    cart.forEach((cartItem)=>{
        addToCartDOM(cartItem);
    })
}
function removeItem(id){
    cart = cart.filter((item)=> item.id != id);
}
function increaseDecreaseAmount(choice,id){
    let newAmount;
    cart = cart.map((cartItem)=>{
        if (cartItem.id === id){
            if (choice === 'increase'){
                newAmount = cartItem.amount +1 ;
            }else {
                newAmount = cartItem.amount -1 ;
            }

            cartItem = {...cartItem, amount: newAmount }
        }
        return cartItem;
    });
    return newAmount;
}




function setupCartFunctionality(){
    cartItemsDOM.addEventListener('click', (e)=>{
        const element = e.target;
        const parent = element.parentElement;
        const id = element.dataset.id;
        const parentId = parent.dataset.id

        //remove
        if (element.className === 'cart-item-remove-btn'){
            removeItem(id);
            parent.parentElement.remove();
        }
        // increase
        if (parent.className === 'cart-item-increase-btn'){
            const amount = increaseDecreaseAmount('increase',parentId);
            parent.nextElementSibling.textContent = amount;
        }
        // decrease
        if (parent.className === 'cart-item-decrease-btn'){
            const amount = increaseDecreaseAmount('decrease',parentId);
            if (amount === 0) {
                removeItem(parentId);
                parent.parentElement.parentElement.remove();
            }
            parent.previousElementSibling.textContent = amount;
        }
        displayCartItemCount();
        displayCartTotal();
        setStorageItem('cart', cart);


    })

}
const init = () => {
    // display amount of cart items
    displayCartItemCount();
    // display total
    displayCartTotal();
    // add all cart items to the dom
    displayCartItemsDOM()
    // setup cart functionality
    setupCartFunctionality();
}
init();
