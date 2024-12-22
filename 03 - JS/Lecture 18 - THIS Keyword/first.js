// global object : object 

console.log('hello world');
console.log('Math.random() =',Math.random());

// console.log(window);
// console.log(window.Math.random());

console.log('global =',global);
console.log('global.Math.random() =',global.Math.random());

console.log('globalThis =',globalThis);
console.log('globalThis.Math.random() =',globalThis.Math.random());

let a = 10;
const b = 20;

console.log('this =',this);
console.log('this==globalThis ->',this==globalThis)

function greet(){
    console.log(' hiiiiiiii')
}