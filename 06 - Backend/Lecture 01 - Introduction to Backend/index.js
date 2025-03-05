// require('./second');
// iife 
(
    function(){
        console.log('hello i am second.js file');

        function sum(a,b){
            console.log(`${a} + ${b} = ${a+b}`);
        }
    }
)();

console.log('Hello world');

 
// const {sum,mul} = require('./second');

// sum(10,20);
// mul(10,20);


import {sub,div} from "./first.js";
// import sub from "./first.js";

div(10,20);
sub(10,20);