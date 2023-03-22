window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	
const menu_btn = document.querySelector('.nav-toggler');
const mobile_menu = document.querySelector('.mobile');

menu_btn.addEventListener('click', function () {
   menu_btn.classList.toggle('open');
   mobile_menu.classList.toggle('open');
});
}
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.reservation-form span, .img-1, .img-2, .menu-items,.r1-content,.name-title h1',{}); 
sr.reveal(' .menu-img, .r-img,.contact-ip',{delay: 400}); 
sr.reveal('.btn,.order-ip,.nav',{ interval: 200}); 
sr.reveal('.contact-f ',{interval: 200}); 












