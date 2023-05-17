const header = document.querySelector('header');
const heroSection = document.querySelector('#hero');
const worksSection = document.querySelector('#works');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contact');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const heroOptions = {
  rootMargin: "75px 0px 0px 0px",
};

const viewPortHeightOffSet = document.querySelector("#hero").offsetHeight > 600 ? 
                                document.querySelector("#hero").offsetHeight : 600;
const aboutOptions = {
    rootMargin: `0px 0px -${viewPortHeightOffSet}px 0px`,
};


const heroSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('nav-scrolled-black');
      } else {
        header.classList.remove('nav-scrolled-black');
      }
    });
  }, heroOptions);
  
const aboutSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log(entry)
        header.classList.add('nav-scrolled-white');
        header.classList.remove('nav-scrolled-black');
      } else {
        header.classList.add('nav-scrolled-black');
        header.classList.remove('nav-scrolled-white');
      }
    });
}, aboutOptions);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

heroSectionObserver.observe(heroSection);
aboutSectionObserver.observe(aboutSection);
  