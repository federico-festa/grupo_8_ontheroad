window.onscroll = () => {
    const main = document.querySelector('main');
    if (window.pageYOffset > 144) {
        main.classList.add('scroll');
    } else {
        main.classList.remove('scroll');
    }
};