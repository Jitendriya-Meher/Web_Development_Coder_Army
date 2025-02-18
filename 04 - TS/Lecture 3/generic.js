"use strict";
function Show(a) {
    return a;
}
console.log(Show(10));
console.log(Show("ABC"));
console.log(Show(true));
console.log(Show([1, 2, 3, 4, 5, 6]));
const a1 = {
    name: "inf1",
    age: 1,
    aadhar: 123,
    salary: "1 Lakh"
};
console.log('Inf1:', a1);
const a2 = {
    name: "inf1",
    age: 1,
    aadhar: 'adh123',
    salary: 123456
};
console.log('Inf2:', a2);
