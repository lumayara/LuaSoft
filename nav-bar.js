const header = document.querySelector('header');
const heroSection = document.querySelector('#hero');
const worksSection = document.querySelector('#works');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contact');
const sections = document.querySelectorAll('section');


const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0){
			// scrolling down
			console.log(entry.target.id)
			switch(entry.target.id){
				case 'hero':
					header.classList.add('nav-scrolled-black');
					document.querySelector('#logo').classList.toggle('logo-svg');
					break;
				case 'works':
					header.classList.remove('nav-scrolled-black');
					header.classList.add('nav-scrolled-white');
					break;
				case 'about':
					header.classList.remove('nav-scrolled-white');
					header.classList.add('nav-scrolled-black');
					break;
			}

		}
		if(entry.isIntersecting && entry.boundingClientRect.y < 0){
			// scrolling up
			console.log(entry.target)
			switch(entry.target.id){
				case 'hero':
					header.classList.remove('nav-scrolled-black');
					document.querySelector('#logo').classList.toggle('logo-svg');
					break;
				case 'works':
					header.classList.remove('nav-scrolled-white');
					header.classList.add('nav-scrolled-black');
					break;
				case 'about':
					header.classList.remove('nav-scrolled-black');
					header.classList.add('nav-scrolled-white');
					break;
			}
		}
	})
}, {})

sections.forEach(section => {
	observer.observe(section)
});



// const intervals = [0,0.001,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.93,0.94,0.95,0.999,1];

// const worksSectionObserver = new IntersectionObserver(entries => {
// 	entries.forEach(entry=>{


// 		if(entry.isIntersecting && entry.boundingClientRect.top <= 0 && entry.boundingClientRect.bottom >= 0){
// 			header.classList.add('nav-scrolled-black');
// 			header.classList.remove('nav-scrolled-white');
// 		} else {
// 			header.classList.remove('nav-scrolled-black');
// 		}

// 		if(entry.intersectionRatio>0.5){
// 			worksSection.firstElementChild.classList.add('appear-works-h1')
// 			worksSection.querySelector('.works-content').classList.add('appear-works-content')

// 		} else if(entry.intersectionRatio<0.2){
// 			worksSection.firstElementChild.classList.remove('appear-works-h1')
// 			worksSection.querySelector('.works-content').classList.remove('appear-works-content')

// 		}
		
// 	})
// }, {	
// 	threshold: intervals,
// 	// rootMargin: '25px 0px -7px 0px'

// })

// worksSectionObserver.observe(worksSection)




// Attach a click event listener to each navbar link + hero 'get a free consultation' button
const navbarLinks = document.querySelectorAll('header a');
const freeConsultationLink = document.querySelectorAll('#hero a');
const scrollLinks = [...navbarLinks, ...freeConsultationLink];

scrollLinks.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault(); // Prevent default link behavior

		const targetId = link.getAttribute('href'); // Get the target section's ID

		// Use smooth scrolling to scroll to the target section
		if(targetId==='#top'){
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		} else {
			document.querySelector(targetId).scrollIntoView({
				behavior: 'smooth',
			});
		};
	});
});

