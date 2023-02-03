'use strict';

const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thank-you');

const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again');

const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

submitButton.addEventListener('click', () => {
    thanksContainer.classList.remove('hidden');
    mainContainer.style.display = 'none'
})

rateAgain.addEventListener('click', () => {
    mainContainer.style.display = 'block';
    thanksContainer.classList.add('hidden')
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})

thanksContainer.addEventListener('click', function () {
    mainContainer.style.display = 'block';
    thanksContainer.classList.add('hidden')
})