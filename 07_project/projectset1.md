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
   ``` const form = document.querySelector('form');

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
   