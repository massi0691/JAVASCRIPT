const btnsTab = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = about.querySelectorAll('.content');


about.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if (id) {
      btnsTab.forEach(function (btn){
          btn.classList.remove('active');
          if (btn.getAttribute('data-id') === id){
              btn.classList.add('active');
          }
          articles.forEach(function (article){
              article.classList.remove('active');
              if (article.getAttribute('id') === id){
                  article.classList.add('active');
              }
          })
      })
    }
})