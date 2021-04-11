const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link-items');
    const navLinks = document.querySelectorAll('.link-items .navbar-nav .nav-item')
    burger.addEventListener('click', () => {
         //Toggle Nav
         nav.classList.toggle('nav-active');
         //Animate Links
         navLinks.forEach((link, index) => {
            if (link.style.animation) {
                 link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
         });
         //Burger Animation
        burger.classList.toggle('cross-burger');
    });
};
navSlide();