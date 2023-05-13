const header = document.querySelector('header');
const heroSection = document.querySelector('#hero');
const worksSection = document.querySelector('#works');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contact');

// const heroOptions = {
// 	rootMargin: "75px 0px 0px 0px",
// };

// const viewPortHeightOffSet = document.querySelector("#hero").offsetHeight > 600 ? 
// document.querySelector("#hero").offsetHeight : 600;
// const aboutOptions = {
// 	rootMargin: `0px 0px -${viewPortHeightOffSet}px 0px`,
// };


const intervals = [0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1];

const worksSectionObserver = new IntersectionObserver(entries => {
	entries.forEach(entry=>{

		if(entry.isIntersecting && entry.boundingClientRect.y<0){
			header.classList.add('nav-scrolled-black');
			header.classList.remove('nav-scrolled-white');
		} else {
			header.classList.remove('nav-scrolled-black');
			header.classList.remove('nav-scrolled-white');
		}

		if(entry.intersectionRatio>0.5 && entry.boundingClientRect.y>0){
			worksSection.firstElementChild.classList.add('appear')
		}
		
	})
}, {	
	threshold: intervals,
})

worksSectionObserver.observe(worksSection)

const aboutSectionObserver = new IntersectionObserver(entries => {
	entries.forEach(entry=>{

		if(entry.isIntersecting && entry.boundingClientRect.y<0){
			header.classList.remove('nav-scrolled-black');
			header.classList.add('nav-scrolled-white');
		}

		if(entry.intersectionRatio>0.5 && entry.boundingClientRect.y>0){
			aboutSection.firstElementChild.classList.add('appear')
		}
		
	})
}, {	
	threshold: intervals,
})

aboutSectionObserver.observe(aboutSection)

const contactSectionObserver = new IntersectionObserver(entries => {
	entries.forEach(entry=>{

		if(entry.isIntersecting && entry.boundingClientRect.y<0){
			header.classList.remove('nav-scrolled-white');
			header.classList.add('nav-scrolled-black');
		}

		if(entry.intersectionRatio>0.5 && entry.boundingClientRect.y>0){
			contactSection.firstElementChild.classList.add('appear')
		}
		
	})
}, {	
	threshold: intervals,
})

contactSectionObserver.observe(contactSection)




// const heroSectionObserver = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		if (!entry.isIntersecting) {
// 			header.classList.add('nav-scrolled-black');
// 		} else {
// 			header.classList.remove('nav-scrolled-black');
// 		}
// 	});
// }, heroOptions);

// const aboutSectionObserver = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		if (entry.isIntersecting) {
// 			header.classList.add('nav-scrolled-white');
// 			header.classList.remove('nav-scrolled-black');
			
// 		} else {
// 			if(header.getBoundingClientRect().bottom > entry.boundingClientRect.bottom){
// 				header.classList.add('nav-scrolled-black');
// 				header.classList.remove('nav-scrolled-white');
// 			}
			
// 		}
// 	});
// }, aboutOptions);


// heroSectionObserver.observe(heroSection);
// aboutSectionObserver.observe(aboutSection);
