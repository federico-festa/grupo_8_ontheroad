<<<<<<< HEAD
// window.onscroll = () => {
//     const topNav = document.querySelector('nav');
//     const links = document.querySelectorAll('nav a');
//     const sticky = topNav.offsetTop;
//     const droplist = document.querySelector('.droplist');
//     if (window.pageYOffset > sticky) {
//         topNav.classList.add('sticky');
//         links.forEach(link => {
//             link.style.color = 'white';
//         });
//     } else {
//         topNav.classList.remove('sticky');
//         links.forEach(link => {
//             link.style.color = 'black';
//         });
//         droplist.classList.remove('show');
//     };
// };

// window.onload = () => {
//     const logo = document.querySelector('img');
//     const userIcon = document.querySelector('.fa-user');
//     const droplist = document.querySelector('.droplist');

//     logo.addEventListener('click', () => {
//         window.location.href = '/';
//     });

//     userIcon.addEventListener('click', () => {
//         droplist.classList.toggle('show');
//     });
// };

// window.onclick = (e) => {
//     const droplist = document.querySelector('.droplist');
//     if (!e.target.matches('.fa-user')){
//         droplist.classList.remove('show');
//     };
// };
=======
const logo = document.querySelector('img');
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
>>>>>>> 53b53690efaa6618aa5bcf6782a3a8d3214c7c0b
