// function
function greet(){
    console.log("Hello, World!");
    console.log('Hello There');
    console.log('--------------------------------');
}

greet();
greet();
greet();
greet();

// function defination : parameters
function sum( n1, n2){
    console.log(`${n1} + ${n2} = ${n1+n2}`);
}

// function call : arguments
sum(10,20);
sum(101,25);

const sub = function(n1, n2){
    console.log(`${n1} - ${n2} = ${n1-n2}`);
}

sub(10,20);

// arrow function
const mul = (n1, n2) => {
    console.log(`${n1} * ${n2} = ${n1*n2}`);
}

mul(10,20);

const pow = (n1, n2) => n1**n2;

console.log(`3^4 = ${pow(3,4)}`);


const sumAll = function(...arr){

    let sum = 0;

    for( let i=0; i<arr.length; i++){
        sum += Number(arr[i]);
    }

    console.log(`sum of ${arr} = `,sum);
} 

sumAll(1,2,3,4,5);
sumAll(1,2,3,4,5,6,7,8);

let obj = {
    name:"test",
    age:30,
    amount:100
}

function ObjDet(obj){
    console.log(`name: ${obj.name}, age: ${obj.age}, amount: ${obj.amount}`);
    obj.name = "test2";
}

function ObjDet1({name,age}){
    console.log(`name: ${name}, age: ${age}`);
}

ObjDet(obj);
ObjDet1(obj);