const now = new Date()
let info = document.getElementById('infoTab')
let calendar = document.getElementById('calendarTab')
let review = document.getElementById('reviewTab')
let cuotas = document.getElementById('cuotas')
let closePop = document.querySelector('#pop-up i')
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let month = document.getElementById('month-year');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber] + ' ' + currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());



const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days day">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        dates.innerHTML += ` <div class="calendar__date calendar__item day">${i}</div>`;
    }
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber] + ' ' + currentYear.toString(); 
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);

info.onclick = () => {
    document.getElementById('tabMain').style.display = 'flex'
    document.getElementById('tabCalendar').style.display = 'none'
    document.getElementById('tabReview').style.display = 'none'
    info.classList.add('enableTab')
    info.classList.remove('disableTab')
    calendar.classList.add('disableTab')
    calendar.classList.remove('enableTab')
    review.classList.add('disableTab')
    review.classList.remove('enableTab')
}

calendar.onclick = () => {
    document.getElementById('tabMain').style.display = 'none'
    document.getElementById('tabCalendar').style.display = 'flex'
    document.getElementById('tabReview').style.display = 'none'
    info.classList.add('disableTab')
    info.classList.remove('enableTab')
    calendar.classList.add('enableTab')
    calendar.classList.remove('disableTab')
    review.classList.add('disableTab')
    review.classList.remove('enableTab')
}

review.onclick = () => {
    document.getElementById('tabCalendar').style.display = 'none'
    document.getElementById('tabMain').style.display = 'none'
    document.getElementById('tabReview').style.display = 'flex'
    info.classList.add('disableTab')
    info.classList.remove('enableTab')
    calendar.classList.add('disableTab')
    calendar.classList.remove('enableTab')
    review.classList.add('enableTab')
    review.classList.remove('disableTab')
}

cuotas.onclick = () => {
    document.getElementById('pop-up').style.display = 'flex'
}

closePop.onclick = () => {
    document.getElementById('pop-up').style.display = 'none'
}

let primary = document.querySelector('.primary-img')
let second = document.querySelectorAll('.second-img')

// second.onclick = () => {
//     primary.classList.remove('primary-img')
//     primary.classList.add('second-img')
//     second.classList.remove('second-img')
//     second.classList.add('primary-img')
// }

for(let i = 0; i < second.length; i++) {
    second[i].addEventListener('click', function() {
        primary.classList.remove('primary-img')
        primary.classList.add('second-img')
        pick = document.querySelector('.bannerShow').innerHTML += '<img>'
        pick.classList.add('second-img')
    })
}