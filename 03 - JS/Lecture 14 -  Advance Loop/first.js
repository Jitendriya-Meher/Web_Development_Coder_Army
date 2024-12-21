let obj = {};

obj.name = 'jitu';
obj.age = 23;

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// writable properties
// can change
obj.name = "Jitendriya";

console.log("obj = ",obj);

// configurable properties
let objC = {};

Object.defineProperty(objC, "name", {
    value: "Jitendriya",
    writable: false,
    // configurable properties
    // false = you cannot change writable properties, enumerable properties
    // true = you can change enumerable properties, writable properties
    configurable: false,
    enumerable: true
});

console.log('objC = ',objC); 

// writable = false , value cant be changed
objC.name = "Jiten";

console.log('objC = ',objC); 


const customer = {
    name: "Customer",
    age:21,
    id:123,
    amount:100
}

for( key in customer){
    console.log(key, customer[key]);
}

Object.defineProperty(customer, "name",{
    enumerable: false
});

for( key in customer){
    console.log(key, customer[key]);
}