//DOM  Document Object Model
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

//We change the text content of the h1 element
//h1.textContent = "New One"

//console.log(h1);

//We are changing the style of the HTML element (h1, in this case)
//h1.style = "color: green; text-align: center; background-color: darkgrey; ";


//more into styling
/* h1.style.color = "black";
h1.style.backgroundColor = "green";
h1.style.textAlign = "center"; */

//h2.style.color = "purple" ;

const h3 = document.querySelector('#description-line')
//h3.style = 'text-align: center; color: blue; ' ;

// querySelector()
const descText = document.querySelector(".description-text"); // . for class and # for id selector
//descText.textContent = "This is change description text"

// DIfference between innerHTML and textContent
//descText.innerHTML = '<a href= "#">Click here</a>' 
//descText.textContent = '<a href= "#">Click here</a>';


//descText.style = 'color:white; text-align: center; background-color: grey;'
//console.log(descText);


// querySelectorAll()

const paraList = document.querySelectorAll('.para') //selecting all class para in HTML body.
// to select first class para we do this:
//paraList[0].style.color = 'red' // selecting first para. 
//paraList[2].style = 'color: blue; background-color: grey;' ; //selecting third para

// tips: creating same multyple ID in HTML is not recomended.


//console.log(paraList);

let descLine = document.getElementById('description-line');

descLine.textContent = '<h1> changed by ID selector </h1>' ;

descLine.style = ' color: white; background-color: grey; text-align: center; '


// selecting using class name
const detailsContainer =  document.querySelector('.details-container');

//adding ID
detailsContainer.id = 'added-id'

//adding class
//detailsContainer.className = 'new-class'

const list = detailsContainer.classList;

console.log(detailsContainer.classList);

//console.log(list[0]);
//console.log(list[1]);

//adding class to an element
list.add('new-added-className');

// removing class to an element.
list.remove('details-c');



// selecting demo-para
const demoPara = document.querySelector('.demo-para');

// parent Element
console.log(demoPara.parentElement);

//parent>parent element
console.log(demoPara.parentElement.parentElement.parentElement.parentElement);

const textContainer = document.querySelector('.text-container');

let childrens = textContainer.children;
console.log(childrens[0].style.color = 'red');