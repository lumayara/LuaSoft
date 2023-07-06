const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0){
			// scrolling down
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

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");

}))

sections.forEach(section => {
	observer.observe(section)
});

const secTitles = document.querySelectorAll('.sec-title');
const secContent = [...document.getElementsByClassName('sec-content')];
const secAllElements = [...secTitles];
secContent.forEach(secContentElement => {
	const secContentChildren = [...secContentElement.children];
	secContentChildren.forEach(child => secAllElements.push(child));
});

const secObserver = new IntersectionObserver(entries => {
	entries.forEach(entry=>{
		if(entry.isIntersecting){
			entry.target.classList.remove('notshowing')
			entry.target.classList.add('showing');
		}else {
			entry.target.classList.remove('showing');
			entry.target.classList.add('notshowing');
		}
	})
},{
	threshold: [0.3]
});

secAllElements.forEach(item=>{
	secObserver.observe(item)
});



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

