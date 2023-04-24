import {getElement} from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
    // const priceText = getElement('.price-value');
    // const inputFilter = getElement('.price-filter');
    //
    // inputFilter.addEventListener('input',(e)=>{
    //     const priceValue = e.target.value
    //     priceText.textContent = priceValue+' €';
    //     const newStore = store.filter((product)=>{
    //         if ( product.price / 100 <= priceValue){
    //             return product;
    //         }
    //
    //     });
    //     if (newStore.length<1){
    //         const products = getElement('.products-container');
    //         products.innerHTML = `<h3 class="filter-error">
    //                                 sorry, no products matched your search
    //                              </h3>`
    //     }else{
    //         display(newStore,getElement('.products-container'));
    //     }
    // })
    const priceInput = getElement('.price-filter');
    const priceValue = getElement('.price-value');

    // setup filter
    let maxPrice = store.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice / 100);
    priceInput.value = maxPrice;
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceValue.textContent = `Value : ${maxPrice} €`;
    priceInput.addEventListener('input', function () {
        const value = parseInt(priceInput.value);
        priceValue.textContent = `Value : ${value} €`;
        let newStore = store.filter((product) => product.price / 100 <= value);
        display(newStore, getElement('.products-container'), true);
        if (newStore.length < 1) {
            const products = getElement('.products-container');
            products.innerHTML = `<h3 class="filter-error">
                                            sorry, no products matched your search
                                  </h3>`
        }
    });
};

export default setupPrice;
