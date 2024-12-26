const form = document.querySelector('form');

// console.log('form: ' , form);

// form.addEventListener('click' , (event) => {

//     console.log('form :',event);
//     console.log('form.target :',event.target);

//     console.log(' click : form.target.value :',event.target.value);

// });

// form.addEventListener('input' , (event) => {

//     console.log('input : form.target.value :',event.target.value);

// });

// form.addEventListener('change' , (event) => {
    
//     console.log('change :form.target.value :',event.target.value);

// });

// // focusout
// form.addEventListener('focusin' , (event) => {
    
//     console.log('focusin :form.target.value :',event.target.value);

// });

// form.addEventListener('dbclick' , (event) => {
    
//     console.log('dbcick :form.target.value :',event.target.value);

// });

// form.addEventListener('submit' , (event) => {
    
//     event.preventDefault();

//     console.log('dbcick :form.target.value :',event);

// });

// form.addEventListener('reset' , (event) => {
    
//     console.log('rest :form.target.value :',event.target.value);

// });



const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const result = document.getElementById('result');

form.addEventListener('submit' , (event) => {

    event.preventDefault();

    // console.log('fisrt: ' , first.value);
    // console.log('second: ' , second.value);
    // console.log('third: ' , third.value);

    const data = new FormData(form);
    console.log('data: ' , data);

    console.log('daat.keys():', data.keys());

    console.log('Array.from(data.keys()):', Array.from(data.keys()));
    console.log('Array.from(data.values()):', Array.from(data.values()));

    for (let key of data.keys()){
        console.log('key: ' , key);
    }

    for (let [key,value] of data.entries()){
        console.log( key , value);
    }

    result.innerHTML = `name = ${first.value} ${second.value}, age = ${third.value}`;

});