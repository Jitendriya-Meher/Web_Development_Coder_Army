let obj = {
    0:'12',
    1:'22',
    name: 'Jitendriya',
    age: 23,
    balance:10000000,
    gender:"Male",
    isMarried:false,
    'accound Id': '1234abcd',
    undefined: 30,
    null: "mohan"
};

console.log('object =', obj);

console.log('typeof(obj) =',typeof(obj));

console.log('obj.name =',obj.name);
console.log('obj.age =',obj.age);
// console.log(obj.0);

console.log("obj['gender'] =",obj['gender']);
console.log("obj['accound Id'] =",obj['accound Id']);
console.log("obj['0'] =",obj['0']);
console.log("obj[1] =",obj[1]);

console.log('obj.undefined =',obj.undefined);
console.log("obj.['undefined'] =",obj['undefined']);

console.log('obj.null =',obj.null);
console.log("obj.['null'] =",obj['null']);

// new object
let person = new Object();

// add properties
person.name = 'John';
person.email = 'john@example.com';
person.phone = '123-456-7890';

console.log('person =',person);
console.log('person.name =',person.name);

// delete properties
delete person.phone;
console.log('person =',person);

// update properties
person.name = 'John doe';
console.log('person =',person);

// class object 
class People{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

let p1 = new People("Jitu",21,"male");
console.log('p1 =',p1);

p1.name = 'Jitendriya';
console.log('p1 =',p1);

let p2 = new People("rohan",21,"male");
console.log('p2 =',p2);

// common method
console.log('Object.keys(obj) =',Object.keys(obj));

console.log('Object.values(obj) =',Object.values(obj));

console.log('Object.entries(obj) =',Object.entries(obj));

//assign
let obj2 = Object.assign({},p1,obj);

console.log('obj2 =',obj2);

console.log('obj =',obj);

// spread operator
const obj3 = {...obj,...obj2};

console.log('obj3 =',obj3);