const logo = document.querySelector('.logo');
const userIcon = document.querySelector('.fa-user');
const droplist = document.querySelector('.droplist');

logo.addEventListener('click', () => {
    window.location.href = '/';
});

userIcon.addEventListener('click', () => {
    droplist.classList.toggle('show');
});


window.onscroll = () => {
    const topNav = document.querySelector('nav');
    const links = document.querySelectorAll('nav a');
    const sticky = topNav.offsetTop;
    const droplist = document.querySelector('.droplist');
    if (window.pageYOffset > sticky) {
        topNav.classList.add('sticky');
        links.forEach(link => {
            link.style.color = 'white';
        });
    } else {
        topNav.classList.remove('sticky');
        links.forEach(link => {
            link.style.color = 'black';
        });
        droplist.classList.remove('show');
    };
}

window.onclick = (e) => {
    const droplist = document.querySelector('.droplist');
    if (!e.target.matches('.fa-user')){
        droplist.classList.remove('show');
    };
}
