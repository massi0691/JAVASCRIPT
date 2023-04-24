const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const giveAway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadline');
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023,5,26,12,30,0);

let futureDate = new Date(tempYear,tempMonth,tempDay + 10,17,30,0 )
let hours = futureDate.getHours();
if (hours.toString().length === 1) {
    hours = '0' + hours;
}

function getAmPm() {
    let hours = futureDate.getHours();
    if (hours < 12) {
        return 'am'
    } else {
        return 'pm'
    }
}

giveAway.innerHTML = `giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()}, ${hours}:${futureDate.getMinutes()}${getAmPm()}`;

function format(param) {
    if (param < 10) {
        return '0' + param;
    } else {
        return param;
    }
}

function getRemainingTime() {
    let difference = futureDate - new Date();
    let days = Math.floor(difference / 1000 / 60 / 60 / 24);
    let houres = Math.floor((difference / 1000 / 60 / 60 / 24 - days) * 24);
    let minutes = Math.floor(((difference / 1000 / 60 / 60 / 24 - days) * 24 - houres) * 60);
    let seconds = Math.floor(((((difference / 1000 / 60 / 60 / 24 - days) * 24 - houres) * 60) - minutes) * 60)

    items.forEach(function (item) {

        if (item.classList.contains('days')) {
            item.textContent = `${format(days)}`
        } else if (item.classList.contains('hours')) {
            item.textContent = `${format(houres)}`
        } else if (item.classList.contains('minutes')) {
            item.textContent = `${format(minutes)}`
        } else if (item.classList.contains('seconds')) {
            item.textContent = `${format(seconds)}`
        }
    })
    if (difference < 0) {
        // clear interval of countdown
        clearInterval(countdown);
        deadLine.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
    }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);






