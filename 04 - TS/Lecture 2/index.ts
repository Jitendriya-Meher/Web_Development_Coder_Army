let num:number = 10;

let x = 20;
// x = 'abcd';

// any
// let money;
let money:any;
console.log('money: ' , money);

money = "abced";
console.log('money: ' , money);

console.log('money: ' , money.toUpperCase());

// unknown
let unk:unknown;
console.log('unk: ' , unk);

unk = "abcd";
console.log('unk: ' , unk);

// console.log('unk: ' , unk.toUpperCase());

if( typeof(unk) === "string"){
    console.log('unk: ' , unk.toUpperCase());
}

if( typeof(unk) === "number"){
    console.log('unk: ' , unk*100.5);
}

// premitive data types

// array
let arr:number[] = [1, 2, 3, 4, 5];
console.log('arr: ', arr);

let arr2:(string|number|boolean)[] = [1,2,3,'a','b',true,false];
console.log('arr2: ', arr2);

// tuple
let tup:[string,number] = ['a',12];
console.log('tuple: ', tup);

// object

// inline 
let obj1:{
    name:string,
    age:number,
    gender:string
} = {
    name:'Jiten',
    age:23,
    gender:"Male"
}

console.log('object1: ', obj1);

let Person : {
    name:string;
    age:number;
    gender:string
}

let p1:Person = {
    name:'Jit',
    age:23,
    gender:"Male"
}

console.log('person1: ', p1);

// alices
type Customer = {
    name:string,
    age:number,
    id:string,
}

let c1:Customer = {
    name:"Customer1",
    age:23,
    id:"c1",
}

console.log('customer1: ', c1);

// interface
interface Admin {
    name: string;
    age: number;
    pos:string;
};

let a1:Admin = {
    name: 'Admin1',
    age:23,
    pos: "CEO"
};

console.log('admin1: ', a1);