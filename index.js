// get elements from HTML Page
// document is used to access html 
// with querySelector u can grab the element and store it inside variable
const text = document.querySelector('.title');
const changeColor = document.querySelector('.changeColor');

//manipulate
// classList will access all the classes that a text has
// add - to add class
// remove - to remove class
// text.classList.add("change");



// eventListener is a function that gonna execute depending on wat the event is
// (can be click event, scroll event)

// addEventListener is a function tht takes two parameters
// one is a event ('click') or scroll event
// two is a function
// wen u click this (callback) function  is gonna be executed
changeColor.addEventListener('click', function(){
//    text.classList.add('change');
   text.classList.toggle("change");
})


