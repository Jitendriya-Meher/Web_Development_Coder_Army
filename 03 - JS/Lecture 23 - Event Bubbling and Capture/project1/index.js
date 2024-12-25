const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const orange = document.getElementById('orange');
const purple = document.getElementById('purple');

const body = document.body;

function changeBgColor( col){
    body.style.backgroundColor = col;
}

// red.addEventListener('click', () =>{
//     console.log('red clicked');
//     changeBgColor('red');
// });

// green.addEventListener('click', () =>{
//     changeBgColor('green');
// });

// blue.addEventListener('click', () =>{
//     changeBgColor('blue');
// });

// orange.addEventListener('click', () =>{
//     changeBgColor('orange');
// });

// purple.addEventListener('click', () =>{
//     changeBgColor('purple');
// });



// const btns = document.querySelectorAll('button');

// console.log('btns =', btns);

// btns.forEach((btn) => {

//     btn.addEventListener('click',() => {
//         changeBgColor(btn.id);
//     });

// });



const root = document.getElementById('root');

root.addEventListener('click',(e) => {
    
    console.log('root clicked');

    console.log('e.target =', e.target);
    console.log('e.target.tagName =',e.target.tagName);

    if( e.target.tagName === 'BUTTON' ){
        changeBgColor(e.target.id);
    }
    else{
        changeBgColor('black');
    }

});