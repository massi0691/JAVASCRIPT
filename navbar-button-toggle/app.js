// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const links = document.querySelector('.links');
const btnToggle = document.querySelector('.nav-toggle');

btnToggle.addEventListener('click', function () {
 links.classList.toggle('show-links');
})