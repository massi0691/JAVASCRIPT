const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');


btn.addEventListener('click', () => {
    getData(url);
})

function getData(url){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const {value: text} = JSON.parse(xhr.response);
            content.innerHTML = text;
        } else {
            console.log({
                state: xhr.readyState,
                text: xhr.statusText,
            })
        }
    }
    xhr.send();
}



