const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const resetBtn = document.querySelector('.reset-btn')
const count = document.querySelector('.count')
const changeBy = document.querySelector('.changeBy')

plusBtn.addEventListener('click', () => {
    const countVal = parseInt(count.innerText);
    count.innerText = countVal + parseInt(changeBy.value);
})

minusBtn.addEventListener('click', () => {
    const countVal = parseInt(count.innerText);
    count.innerText = countVal - parseInt(changeBy.value);
})

resetBtn.addEventListener('click', () => {
    count.innerText = 0;
})