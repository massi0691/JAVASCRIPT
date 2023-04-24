const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img =  document.querySelector('.container img');

btn.addEventListener('click', () => {
    getData(url)
        .then((response) => displayData(response))
        .catch((error) => console.log(error));
});

function getData(url) {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            }else {
                reject({
                    state: xhr.readyState,
                    text: xhr.statusText,
                });
            }
        };
    });
}
function displayData(data){
    img.classList.add('shake-img');
    const {value: text} = JSON.parse(data);
    content.innerHTML = text;
    const random = Math.random()*1000;
    setTimeout(()=>{
        img.classList.remove('shake-img');
    },random);
}
