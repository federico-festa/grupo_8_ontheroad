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

window.addEventListener('load', () => {
    const logo = document.querySelector('img');
    const userIcon = document.querySelector('.fa-user');
    const droplist = document.querySelector('.droplist');
    const userMobile = document.querySelector('#userMobile');
    const mobileDropList = document.querySelector('.mobileDropList');

    logo.addEventListener('click', () => {
        window.location.href = '/';
    });

    userIcon.addEventListener('click', () => {
        droplist.classList.toggle('show');
    });

    userMobile.addEventListener('click', () => {
        mobileDropList.classList.toggle('show');
    });
})

window.addEventListener('load', () => {
    const guestMobile = document.querySelector('#guestMobile');
    const mobileDropListGuest = document.querySelector('.mobileDropListGuest');

    guestMobile.addEventListener('click', () => {
        mobileDropListGuest.style.display = 'block';
    })
})

window.addEventListener('click', (e) => {
    const mobileDropListGuest = document.querySelector('.mobileDropListGuest');

    if (!e.target.matches('.fa-bars')){
        mobileDropListGuest.style.display = 'none';
    };
})

window.onclick = (e) => {
    const droplist = document.querySelector('.droplist');
    const mobileDropList = document.querySelector('.mobileDropList');

    if (!e.target.matches('.fa-user')){
        droplist.classList.remove('show');
    };

    if (!e.target.matches('.fa-user')){
        mobileDropList.classList.remove('show');
    };
}