"use strict";
let p1 = {
    name: "person1",
    age: 1,
    addhar: "123"
};
console.log('person1', p1);
let p2 = {
    name: "person2",
    age: 2,
};
console.log('person2', p2);
let t1 = {
    name: "teacher1",
    age: 1,
    salary: 12,
    id: 12
};
console.log('Teacher', t1);
let c1 = {
    name: "customer1",
};
console.log('customer1', c1);
let c2 = {
    name: "customer2",
    age: 2,
    balance: 123
};
c2.age = 22;
console.log('customer2', c2);
let c3 = {
    name: "customer3",
    age: 3,
    balance: 123
};
// c3.age = 33;
console.log('customer3', c3);
// array of object
let cArr = [
    { name: "customer1", age: 1, balance: 100 },
    { name: "customer2", age: 2, balance: 200 },
];
console.log('customer array :', cArr);
// fuction
function greet() {
    console.log('hii EveryOne!');
}
greet();
function sum(a, b) {
    return a + b;
}
console.log('sum :', sum(10, 22));
function sumOpt(a, b = 10) {
    return a + b;
}
console.log('sumOpt :', sumOpt(100));
console.log('sumOpt :', sumOpt(100, 23));
function Msg(person) {
    console.log("Hii >> ", person || "ABCD");
}
Msg();
Msg("Jiten");
const sumAro = (a, b) => {
    console.log('sum =', a + b);
};
sumAro(10, 20);
function placeOrder(order, callback) {
    const amt = order + 10;
    console.log("Order =", order);
    callback(amt);
}
placeOrder(123, (amount) => {
    console.log("Amount =", amount);
});
// rest parameters
function Total(...arr) {
    let sum = 0;
    arr.forEach((val) => {
        sum += val;
    });
    console.log('Total =', sum);
}
Total(1, 2, 3, 4, 5, 6);
