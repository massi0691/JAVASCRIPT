const btnMenu = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

btnMenu.addEventListener('click', function (){
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function (){
    sidebar.classList.remove('show-sidebar');
})


