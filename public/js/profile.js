const beach = document.querySelector('#beach');
const mountain = document.querySelector('#mountain');
const city = document.querySelector('#city');
const main = document.querySelector('main');

beach.addEventListener('click', () => {
    main.classList.remove('mountain');
    main.classList.remove('city');
    main.classList.add('beach');
    localStorage.setItem('back', 'beach');
})

mountain.addEventListener('click', () => {
    main.classList.remove('beach');
    main.classList.remove('city');
    main.classList.add('mountain');
    localStorage.setItem('back', 'mountain');
})

city.addEventListener('click', () => {
    main.classList.remove('mountain');
    main.classList.remove('beach');
    main.classList.add('city');
    localStorage.setItem('back', 'city');
})

window.addEventListener('load', () => {
    if (localStorage.getItem('back') == 'beach') {
        main.classList.remove('mountain');
        main.classList.remove('city');
        main.classList.add('beach');
    } else if (localStorage.getItem('back') == 'mountain') {
        main.classList.remove('beach');
        main.classList.remove('city');
        main.classList.add('mountain');
    } else if (localStorage.getItem('back') == 'city') {
        main.classList.remove('mountain');
        main.classList.remove('beach');
        main.classList.add('city');
    }
})

