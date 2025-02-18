"use strict";
let num = 10;
let x = 20;
// x = 'abcd';
// any
// let money;
let money;
console.log('money: ', money);
money = "abced";
console.log('money: ', money);
console.log('money: ', money.toUpperCase());
// unknown
let unk;
console.log('unk: ', unk);
unk = "abcd";
console.log('unk: ', unk);
// console.log('unk: ' , unk.toUpperCase());
if (typeof (unk) === "string") {
    console.log('unk: ', unk.toUpperCase());
}
if (typeof (unk) === "number") {
    console.log('unk: ', unk * 100.5);
}
// premitive data types
// array
let arr = [1, 2, 3, 4, 5];
console.log('arr: ', arr);
let arr2 = [1, 2, 3, 'a', 'b', true, false];
console.log('arr2: ', arr2);
// tuple
let tup = ['a', 12];
console.log('tuple: ', tup);
// object
// inline 
let obj1 = {
    name: 'Jiten',
    age: 23,
    gender: "Male"
};
console.log('object1: ', obj1);
let Person;
let p1 = {
    name: 'Jit',
    age: 23,
    gender: "Male"
};
console.log('person1: ', p1);
let c1 = {
    name: "Customer1",
    age: 23,
    id: "c1",
};
console.log('customer1: ', c1);
;
let a1 = {
    name: 'Admin1',
    age: 23,
    pos: "CEO"
};
console.log('admin1: ', a1);
