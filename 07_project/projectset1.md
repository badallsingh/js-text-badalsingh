# Projects related to DOM

 ## project link

[Click here] (https://stackblitz.
com/edit/dom-project-chaiaurcode?
file=index.html)

# Solution code

 
## project 1
  ``` javascript
  const buttons = document.querySelectorAll(".button")
 const body = document.querySelector('.body')

 buttons.forEach((buttons) =>{
   buttons.addEventListener("click" , (e) =>{
    console.log(e)
    console.log(e.target)
    switch ( e ) {
      case 1:
           e.target.id === 'grey'
          body.style.backgroundColor = e.target.id;
          break;
      case 2:
           e.target.id === 'white'
           body.style.backgroundColor = e.target.id;
          break;
      case 3:
      e.target.id === 'blue'
      body.style.backgroundColor = e.target.id;
          
          break;
      case 4:
      e.target.id === 'yellow'
      body.style.backgroundColor = e.target.id;          
          break;
  
     
  }
   })
 })
   ```