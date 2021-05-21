const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link-items');
    const navLinks = document.querySelectorAll('.nav-item');
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
    /**
    //  * Nav Active Class
     */
    navLinks.forEach(n => {
        n.addEventListener('click', () => {
            navLinks.forEach(btn => {
                btn.classList.remove('active');
                n.classList.add('active');
            });
        })
    })
};
navSlide();