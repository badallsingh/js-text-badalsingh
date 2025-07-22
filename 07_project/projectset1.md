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

   