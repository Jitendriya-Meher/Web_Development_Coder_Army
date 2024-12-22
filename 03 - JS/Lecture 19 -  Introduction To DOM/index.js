// getElementById

const header = window.document.getElementById('first');

console.log('header =', header);
console.log('typeof header = ', typeof header);

console.log('header.__proto__ =', header.__proto__);

header.innerHTML = "Hii I am Jitendriya Meher";

console.log('header.id =', header.id);
console.log('header.className =', header.className);
console.log('header.classList =', header.classList);
console.log('header.tagName =', header.tagName);
console.log('header.style =', header.style);

header.style.background = "cyan";
header.style.color = "red";

// getElementsByClassName
const classheader = document.getElementsByClassName('header');

console.log('classheader =', classheader);

console.log('classheader[1] =', classheader[1]);

classheader[1].style.background = 'pink';
classheader[1].style.color = 'blue'; 
classheader[1].style.padding = '10px';
classheader[1].style.fontSize = '50px';