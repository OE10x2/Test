//Single documents
const form = document.getElementById('my-form');
console.log(form);
//"querySelector" is based on jQuery
console.log(document.querySelector('.container'));
//jQuery can select any element
console.log(document.querySelector('h1'));
//Since this is for single element, only the first
//appearance of those elements will get chosen.

//Multiple documents
const items = document.querySelectorAll('.item');
console.log(items); //M1; recommended
console.log(document.getElementsByClassName('item')); //M2
items.forEach(i => console.log(i)); //Loop through the elements

//Working with DOM
const ul = document.querySelector('.items');
//ul.remove(); Removes the selected class
ul.lastElementChild.remove(); //Removes the last element in the class
ul.firstElementChild.textContent = 'This is the first line'; //Set content
//To access a specific element, use the "children" array
ul.children[1].innerHTML = '<h1>Bold</h1>'; //Writes HTML code
const button = document.querySelector('.btn');
button.style.background = 'blue';

//Event listener
/*
button.addEventListener('click', event => {
    event.preventDefault();
    //If this line not included, then the program only cl's when hold click.
    console.log('Button clicked');
    document.querySelector("#my-form").style.background = '#ccc';
});
button.addEventListener('mouseover', event => {
    document.querySelector('body').classList.add('bg-dark');
});
button.addEventListener('mouseout', event => {
    document.querySelector('body').classList.remove('bg-dark');
});
*/

//UI Interaction
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', func1); //Method 2;
//Store the event listener into a function
function func1(event){
    event.preventDefault();
    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Missing information';
        setTimeout(() => msg.remove(), 3000);
    }else{
        msg.classList.remove('error');
        console.log('Success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);
        msg.innerHTML = '';
        nameInput.value = '';
        emailInput.value = '';
    }
}
