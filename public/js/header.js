window.onscroll = () => {
    const topNav = document.querySelector('nav');
    const links = document.querySelectorAll('nav a');
    const sticky = topNav.offsetTop;
    if (window.pageYOffset > sticky) {
        console.log(links);
        topNav.classList.add('sticky');
        links.forEach(link => {
            link.style.color = 'white';
        })
    } else {
        topNav.classList.remove('sticky');
        links.forEach(link => {
            link.style.color = 'black';
        })
    };
};