const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img =  document.querySelector('.container img');

btn.addEventListener('click', () => {
    fetch(url)
        .then(data => data.json()
            .then(response => displayData(response)))
        .catch(err=> console.log(err));
});

function displayData({value: text}){
    img.classList.add('shake-img');
    // const {value: text} = data;
    content.innerHTML = text;
    const random = Math.random()*1000;
    setTimeout(()=>{
        img.classList.remove('shake-img');
    },random);
}
