let a =10;
let b = a;
b = 30;

console.log('b = ' , b);
console.log('a = ' , a);

// primitive data type : immutable (cannot be changed)
// nonprimitive data type : mutable

let obj1 = {
    id: 2,
    name: "amit"
}

let obj2 = obj1;

console.log('obj1 = ' , obj1);
console.log('obj2 = ' , obj2);

obj2.id = 3;

console.log('obj1 = ' , obj1);
console.log('obj2 = ' , obj2);

