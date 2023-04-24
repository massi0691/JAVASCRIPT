// set initial count
let count = 0;

// select values an buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){
   btn.addEventListener('click', function (e){
     const change = e.currentTarget.classList;
     if (change.contains('decrease')){
        count--;
     }
     else if (change.contains('increase')){
        count++;
     } else if (change.contains('reset')){
        count=0;
     }
     value.textContent = count;
     if (count === 0){
        value.style.color = 'black'
     }else if (count>0){
        value.style.color = 'green'
     }else {
        value.style.color = 'red'
     }
   })
})
