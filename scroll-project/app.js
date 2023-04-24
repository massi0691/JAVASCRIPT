// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');
const year = new Date().getFullYear();
date.textContent = `${year}`;

// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
navToggle.addEventListener('click', function (){
// linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight=  links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    }else if (containerHeight === linksHeight){
        linksContainer.style.height = `0px`
    }

})


// ********** fixed navbar ************
const nav = document.getElementById("nav");
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll',function (){
    const navHeight = nav.getBoundingClientRect().height;
   if (window.pageYOffset >navHeight){
       nav.classList.add('fixed-nav');
   }else{
       nav.classList.remove('fixed-nav');
   }
   if(window.pageYOffset >500 ){
       topLink.classList.add('show-link');
   }else{
       topLink.classList.remove('show-link');

   }
})

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function (link){
    link.addEventListener("click", function (e){
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id =  e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains("fixed-nav");
        let position;
        if (fixedNav === true){
             position =element.offsetTop - navHeight;
        }else {
            position= element.offsetTop -2*navHeight;
        }
        if (navHeight > 82 && fixedNav === true) {
            position = element.offsetTop - navHeight + containerHeight;
        }else {
            position = element.offsetTop - 2*navHeight + containerHeight
        }


        window.scrollTo({
            left:0,
            top: position
        });
        linksContainer.style.height = 0;
    });
})
