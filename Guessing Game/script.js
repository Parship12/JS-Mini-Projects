const userInput = document.querySelector('.input-box');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const guess = document.querySelector('.all-guesses')
const submitBtn = document.querySelector('.submit-btn')
const startGameBtn = document.querySelector('.start-btn')

;(function() {
    const allGuesses = []
    let randomNumber = Math.round(Math.random() * 100);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if(parseInt(userInput.value) < randomNumber){
            result.innerHTML = "Too low!!";
        }
        else if(parseInt(userInput.value) > randomNumber){
            result.innerHTML = "Too high!!";
        }
        else{
            result.innerHTML = "Matched!!";
            allGuesses.length = 0;
            startGameBtn.disabled = false
            submitBtn.disabled = true
        }
        allGuesses.push(userInput.value);
        guess.innerHTML = allGuesses.join(', ');
        form.reset();
    })

    startGameBtn.addEventListener('click', () => {
        result.innerHTML = ''
        guess.innerHTML = ''
        startGameBtn.disabled = true
        submitBtn.disabled = false
        randomNumber = Math.round(Math.random() * 100);
        allGuesses.length = 0;
    })
})()