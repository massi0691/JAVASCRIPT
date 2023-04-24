import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    const container= getElement('.companies');
    let companies =['all',...new Set (store.map((product)=>{
        return product.company;
    }))];
   container.innerHTML =companies.map((item)=>{
        return `<button class="company-btn"> ${item} </button>`
    }).join('');
   const companyBtns = [...document.querySelectorAll('.company-btn')];
   companyBtns.map((btn)=>{

       btn.addEventListener('click',(e)=>{
           const valueBtn = e.target.textContent.trim();
           if (valueBtn === 'all'){
               display(store,getElement('.products-container'), true);
           }else{
               const newStore = store.filter(product=> product.company === valueBtn);
               display(newStore, getElement('.products-container'),true);
           }
       });
   })

};

export default setupCompanies;
