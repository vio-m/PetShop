window.addEventListener('DOMContentLoaded', event => {

	// Navbar shrink function
	var navbarShrink = function () {
	const navbarCollapsible = document.body.querySelector('#mainNav');
	if (!navbarCollapsible) {
	    return;
	}
	if (window.scrollY === 0) {
	    navbarCollapsible.classList.remove('navbar-shrink')
	} else {
	    navbarCollapsible.classList.add('navbar-shrink')
	}

	};

	// Shrink the navbar 
	navbarShrink();

	// Shrink the navbar when page is scrolled
	document.addEventListener('scroll', navbarShrink);

	//  Activate Bootstrap scrollspy on the main nav element
	const mainNav = document.body.querySelector('#mainNav');
	if (mainNav) {
	new bootstrap.ScrollSpy(document.body, {
	    target: '#mainNav',
	    rootMargin: '0px 0px -40%',
	});
	};

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(
	document.querySelectorAll('#navbarResponsive .nav-link')
	);
	responsiveNavItems.map(function (responsiveNavItem) {
	responsiveNavItem.addEventListener('click', () => {
	    if (window.getComputedStyle(navbarToggler).display !== 'none') {
		navbarToggler.click();
	    }
	});
	});
	
	
    	// Back to top button
	window.addEventListener('scroll', function() {
	    var backToTopButton = document.querySelector('.back-to-top');
	    if (window.pageYOffset > 100) {
		backToTopButton.style.display = 'block';
	    } else {
		backToTopButton.style.display = 'none';
	    }
	});

	document.querySelector('.back-to-top').addEventListener('click', function() {
	    var scrollToTop = function() {
		var position = document.body.scrollTop || document.documentElement.scrollTop;
		if (position > 0) {
		    window.requestAnimationFrame(scrollToTop);
		    window.scrollTo(0, position - position / 8);
		}
	    };
	    scrollToTop();
	});
	
	
    // Product carousel
	const carousel = document.querySelector('.carousel-images');
	const prevButton = document.querySelector('.prev-button');
	const nextButton = document.querySelector('.next-button');
	const images = document.querySelectorAll('.carousel-images .image');

	let currentIndex = 0;
	const totalImages = images.length;
	let numVisibleImages = calculateNumVisibleImages();

	window.addEventListener('resize', () => {
	    numVisibleImages = calculateNumVisibleImages();
	    showHideImages();
	});

	function calculateNumVisibleImages() {
	    const screenWidth = window.innerWidth;
	    if (screenWidth < 600) {
		return 2;
	    } else if (screenWidth < 992) {
		return 3;
	    } else if (screenWidth < 1200) {
		return 4;
	    } else {
		return 6;
	    }
	}

	const showHideImages = () => {
	    carousel.style.transition = 'all 0.5s ease'; 
	    const endIndex = Math.min(currentIndex + numVisibleImages, totalImages);
	    for (let i = 0; i < totalImages; i++) {
		if (i >= currentIndex && i < endIndex) {
		    images[i].style.display = 'block';
		} else {
		    images[i].style.display = 'none';
		}
	    }
	};

	nextButton.addEventListener('click', () => {
	    if (currentIndex < totalImages - numVisibleImages) {
            currentIndex++;
            showHideImages();
	    } else if (currentIndex = totalImages) {
            currentIndex=0;
            showHideImages();
        }
	});

	prevButton.addEventListener('click', () => {
	    if (currentIndex > 0) {
            currentIndex--;
            showHideImages();
	    } else {
            currentIndex = totalImages-numVisibleImages;
            showHideImages();
        }
	});

	window.addEventListener('load', showHideImages);


});
