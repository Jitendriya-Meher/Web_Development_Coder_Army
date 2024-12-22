// by id
const header = document.querySelector("#first");
console.log('header =', header);

const seond = document.querySelector('#seond');
console.log('seond =', seond);

// by class
const headers = document.querySelectorAll(".header");
console.log('headers =', headers);

console.log('typeof headers =', typeof headers);

for( let i = 0; i < headers.length; i++ ){
    console.log('for loop', i+1 ,' = ',headers[i]);
}

for( let ele of headers){
    console.log('for of',ele);
}

headers.forEach((ele,ind) => {
    console.log('forEach',ele);
});

// obj to array
let arrHeaders = Array.from(headers);
console.log('arrHeaders =', arrHeaders);

console.log('type of arrHeaders =', typeof arrHeaders);

// by selector
const li = document.querySelector('li');

console.log('li =', li);

const lis = document.querySelectorAll('li');

console.log('lis =', lis);

// accessing by tag name
const liTag = document.getElementsByTagName('li');

console.log('liTag =', liTag);

for( let i = 0; i < liTag.length; i++ ){
    console.log('for loop litag =', liTag[i]);
}

for( let val of liTag){
    console.log('for of loop litag =', val);
}

let liTagArr = Array.from(liTag);

liTagArr.forEach((val) => {
    console.log('for each litag =', val);
    val.style.color = 'red';
});



// getting children
const ul = document.querySelector('ul');

console.log('ul =', ul);

console.log('ul.childNodes =', ul.childNodes);

console.log('ul.children =',ul.children);

// first child
console.log('ul.firstChild =',ul.firstChild);

console.log('ul.firstElementChild =',ul.firstElementChild);

// last child
console.log('ul.lastChild =',ul.lastChild);

console.log('ul.lastElementChild =',ul.lastElementChild);

// sibling
console.log('ul.nextSibling =',ul.nextSibling);

console.log('ul.previousSibling =',ul.previousSibling);

console.log('ul.nextElementSibling =',ul.nextElementSibling);

console.log('ul.previousElementSibling =',ul.previousElementSibling);

// 
const first = document.getElementById('first');

console.log('first.innerHTML =',first.innerHTML);

console.log('first.innerText =',first.innerText);

console.log('first.textContent =',first.textContent);