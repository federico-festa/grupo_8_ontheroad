const beach = document.querySelector('#beach');
const mountain = document.querySelector('#mountain');
const city = document.querySelector('#city');
const main = document.querySelector('main');

beach.addEventListener('click', () => {
    main.classList.remove('mountain');
    main.classList.remove('city');
    main.classList.add('beach');
})

mountain.addEventListener('click', () => {
    main.classList.remove('beach');
    main.classList.remove('city');
    main.classList.add('mountain');
})

city.addEventListener('click', () => {
    main.classList.remove('mountain');
    main.classList.remove('beach');
    main.classList.add('city');
})
