# Projects related to DOM

 ## project link

[Click here] (https://stackblitz.
com/edit/dom-project-chaiaurcode?
file=index.html)

# Solution code

 
## project 1
  ``` javascript
  document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button');
  const body = document.querySelector('body');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
       }
       if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id;
       }
       if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
       }
       if(e.target.id === 'yellow '){
        body.style.backgroundColor = e.target.id;
       }
        
    });
  });
});
   ```

   ## project 2 
   ``` javascript  
   const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `This is not valid height : ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `This is not valid weight : ${weight}`;
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

  if (bmi >= 24.9) {
    results.innerHTML = `this is overweight : ${bmi}`
      }
     else if (bmi <= 18.6) {
    results.innerHTML = `this is underweight: ${bmi}`
      }
      else if (bmi > 18.6 && bmi < 24.9){
        results.innerHTML = `this is normalrange : ${bmi}`
      } }
});  ```

## project 3 

```javascript
// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')

setInterval(function ( ){
 let date = new Date ();

 clock.innerHTML = date.toLocaleTimeString ();
},1000) ; 
```

## project 4
   ``` javascript
  const randomnumber = parseInt( Math.random()* 100 +1)


const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi =document.querySelector('.lowOrHi')
const startover =document.querySelector('.resultParas')


const p = document.createElement('p')

let prevguess = [];
let numguess = 1 ;

let playgame = true ; 

if (playgame){
  submit.addEventListener('click',function(e) {
    e.preventDefault()
    const guess = parseInt (userinput.value);
    validateguess(guess);

  })
}

function validateguess(guess){
 if (isNaN(guess)){
   alert('please inter a valid number ')
 }else if (guess < 1 ){
   alert('please inter  greater then 1 digit')
 }else if (guess > 100 ){
  alert('please inter  less  then 100 digit')
}else{
  prevguess.push (guess);
  if(numguess === 11){
    displayguess(guess)
    displaymassage (`game is over , random number is ${randomnumber}`)
    endGame()
  } else{
    displayguess(guess)
    checkguess(guess)

  }
}
};
function checkguess(guess){
if (guess === randomnumber){
displaymassage('congratulations you are win this match ')
endGame()
}else if(guess < randomnumber){
  displaymassage ( ' number is too high')
}else if(guess > randomnumber){
  displaymassage ( ' number is too low')
}
};
function displayguess(guess){
  userinput.value = ''
guessSlot.innerHTML += `${guess}`
numguess ++
remaining.innerHTML = `${11 - numguess}` 

}
function  displaymassage(massage){
  lowOrHi.innerHTML = `<h2>${massage}</h2>`;
}

function endGame() {
  userinput.value = ''
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startover.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelect('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess} `;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);

    playGame = true;
  })
}    ```