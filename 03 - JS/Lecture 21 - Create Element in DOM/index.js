const ul = document.querySelector('ul');
console.log('ul =', ul);

// crating a new element
const element = document.createElement('li');
console.log('element =', element);

element.innerHTML = 'Adding New Element 1';
console.log('element =', element);

// insert the element at the end of the ul
ul.appendChild(element);

function attachToUL( content ) {

    // crating a new element
    const element = document.createElement('li');
    console.log('element =', element);

    element.innerHTML = content;
    console.log('element =', element);

    // insert the element at the end of the ul
    ul.appendChild(element);

}

attachToUL("React JS");
attachToUL("Next JS");
attachToUL("Node JS");

// adding multiple elements
// ul.append(element,element);

// text node
const textNode = document.createTextNode("Hello, world!");
console.log('textNode =', textNode);

ul.appendChild(textNode);

// attributes node
const attrNode = document.createAttribute("class");
console.log('attrNode =', attrNode);

attrNode.value = 'id1';
console.log('attrNode = ',attrNode);

const firstLi = document.querySelector('li');
console.log('firstLi =', firstLi);

firstLi.setAttributeNode(attrNode);
console.log('firstLi =', firstLi)

// ul.children[2].setAttributeNode(attrNode);
// console.log('ul.children =', ul.children);

// get attribte
console.log("ul.getAttribute('id') =",ul.getAttribute('id'));

// set attribte
ul.setAttribute('id','ul-list');
console.log("ul.getAttribute('id') =",ul.getAttribute('id'));

// remove attribte
ul.removeAttribute('id');
console.log("ul.getAttribute('id') =",ul.getAttribute('id'));


// add node to the DOM
const ele = document.createElement('li');
ele.innerHTML = 'First child';

// inset at the begining of the parent element
ul.prepend(ele);

// insert at the end of the parent element
ele.innerHTML = 'Last child';
ul.append(ele);

// insert before an element
ele.innerHTML = 'Insert before element 3';
ul.insertBefore(ele, ul.children[3]);

// replace child
// ele.innerHTML = 'Replace child 5';
// ul.replaceChild(ele, ul.children[1]);

// insrt at end
ul.innerHTML += '-----';

// adjacent elements
function divEle(content){
    const div = document.createElement('div');
    div.style.fontSize = '30px';
    div.innerHTML = `Hello , i am a div, ${content}`;

    return div;
}

// beforebegin
ul.insertAdjacentElement('beforebegin', divEle('beforebegin'));

// afterbegin
ul.insertAdjacentElement('afterbegin', divEle('afterbegin'));

// before end
ul.insertAdjacentElement('beforeend', divEle('beforeend'));

// after end
ul.insertAdjacentElement('afterend', divEle('afterend'));


// delete elements
ul.children[2].remove();

ul.removeChild(ul.children[1]);