'use strict';

const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thank-you');

const submitButton = document.getElementById('submit');

const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

// submitButton.addEventListener('click', () => {
//     thanksContainer.classList.remove('hidden');
//     mainContainer.style.display = 'none'
// })

thanksContainer.addEventListener('click', function () {
    mainContainer.style.display = 'block';
    thanksContainer.classList.add('hidden');
    rating.innerHTML = '';
    document.querySelector('.gray').textContent = 'Please Select Number'
})

rates.forEach(rate => {
    rate.addEventListener('click', () => {
        rating.innerHTML = (rate.innerHTML)
    })
    console.log(rate.innerHTML, rate);
})

rates.forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener('click', function () {
        console.log('A button with ID ' + id + ' was clicked!')

        submitButton.addEventListener('click', () => {
            thanksContainer.classList.remove('hidden');
            mainContainer.style.display = 'none'
        })
    });
});