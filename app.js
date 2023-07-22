// var dayjs = require('dayjs');
// var utc = require('dayjs/plugin/utc');
// var timezone = require('dayjs/plugin/timezone');
// var customParseFormat = require('dayjs/plugin/customParseFormat')


// const display = document.getElementById('clock-display');

// dayjs.extend(customParseFormat)
// dayjs.extend(utc);
// dayjs.extend(timezone);

// // Extend Day.js with the necessary plugins
// const DefaultZone = dayjs.tz.guess();
// const time = new Date();


// function defaultTime(){
//     const Hours = time.getHours().toString().padStart(2, '0');
//     const minutes = time.getMinutes().toString().padStart(2, '0');
//     const seconds = time.getSeconds().toString().padStart(2, '0');
//     const timeString = `${Hours}:${minutes}:${seconds}`;
//     display.textContent = timeString;

// }
// defaultTime();




// // console.log(dayjs(time).format('HH:mm:ss'))

// const AmericaDate = dayjs.tz(time, 'HH:mm:ss', "America/New_York");
// console.log(AmericaDate)

// app.js
var dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');
var customParseFormat = require('dayjs/plugin/customParseFormat');

const display = document.getElementById('clock-display');

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('clock-display');
    const defaultButton = document.querySelector('#default');
    const refresh = document.querySelector('#refresh');
    const change = document.querySelector('#change');
    const container = document.querySelector('.container'); // Use querySelector to get the first element with the class
    const overlay = document.querySelector('.overlay'); // Use querySelector to get the first element with the class
    const changeContainer = document.querySelector('.TimeZone');

    const Zone = document.querySelector('#Zone-Area');
    const applyButton = document.querySelector('#apply');
    const cross = document.querySelector('#close');


    function displayTime(hours, minutes, seconds) {
        const timeString = `${hours}:${minutes}:${seconds}`;
        if (display) {
            display.textContent = timeString;
        }
    }
    function defaultTime() {
        const time = new Date();
        const Hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        // Ensure the 'display' element exists before setting its textContent
        displayTime(Hours, minutes, seconds);
    }
    defaultTime();


    function setTime(data) {
        const Hours = data.$H;
        const minutes = data.$m;
        const seconds = data.$s;
        displayTime(Hours, minutes, seconds);
    }

    defaultButton.addEventListener('click', function () {

        defaultTime();

    });

    change.addEventListener('click', function () {
        container.style.zIndex = '-1';
        overlay.style.opacity = 0.5;
        changeContainer.style.top = '50%';
        changeContainer.style.zIndex = '1';



        applyButton.addEventListener('click', function (e) {
            e.preventDefault();
            const time = new Date();
            const data = dayjs.tz(time, 'HH.mm.ss', `${Zone.value}`);
            displayTime(data.$H, data.$m, data.$s);


            container.style.zIndex = '1';
            overlay.style.opacity = 0;
            changeContainer.style.top = '-50%';
            changeContainer.style.zIndex = '-1';

        })

        cross.addEventListener('click', function () {

            container.style.zIndex = '1';
            overlay.style.opacity = 0;
            changeContainer.style.top = '-50%';
            changeContainer.style.zIndex = '-1';
        })


    })

});

