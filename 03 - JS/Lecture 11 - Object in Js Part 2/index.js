let obj = {
    a:10,
    b:20
}

// shallow copy 
// copy by reference
let obj2 = obj;

console.log('obj: ' , obj);
console.log('obj2: ' , obj2);

obj2.a = 11;

console.log('obj: ' , obj);
console.log('obj2: ' , obj2);

// deep copy
// copy by value
obj = {
    a:10,
    b:20
}

console.log('obj: ' , obj);
console.log('obj2: ' , obj2);

// obj2 = structuredClone(obj);
obj2 = {...obj}
obj2.a = 12;

console.log('obj: ' , obj);
console.log('obj2: ' , obj2);


// nested objects
const user = {
    name: 'John',
    age: 34,
    address:{
        city: 'San Francisco',
        state: 'California',
        country: 'USA'
    }
}

console.log('nested objects: ' ,user);

console.log('user.name =',user.name);
console.log('user.address =',user.address);
console.log('user.address.city =',user.address.city);

// Object.assign -> nested object - shallow copy, rest deep copy
let user2 = Object.assign({}, user);

console.log('user2 =' ,user2);

user2.address.city = 'Los Angeles';
user2.name = 'John Doe';

console.log('user1 =' ,user);
console.log('user2 =' ,user2);

// destructuring a object

let object = {
    name: 'John Doe',
    age: 34,
    address:{
        city: 'Los Angeles',
        state: 'california',
    },
    address2:{
        city: 'Los Angeles',
        state: 'california',
    },
    greet:function(){
        console.log("Hello, John Doe");
    }
}

console.log('object =' ,object);

const {name:full_name, age, address:{city}, ...adrr} = object;

console.log('name =' ,full_name, ' , age =' ,age);

console.log('city =' ,city);

console.log('address =' ,adrr);

object.greet();

// array destruction
const array = [1,2,3,4,5];

const [first, second, ...rest] = array;

console.log('first =' ,first);
console.log('second =' ,second);
console.log('rest =' ,rest);

// prototype chain
let o = {
    name: 'first',
    amount: 12,
    getAmt: function(){
        return 1000;
    }
};

console.log('object =',o);
console.log(o.name);
console.log(o.amount);
console.log(o.getAmt());

console.log(o.toString());

console.log(o.__proto__);

let o2 = {
    name2: 'second',
    amount2: 122,
    getAmt2: function(){
        return 10002;
    }
};

console.log('o2 =' ,o2);

// console.log('o.prototype =',o.prototype.__proto__);

o2.__proto__ = o ;

console.log(o2);

let ar = [1,2,3];

console.log(array.__proto__);

console.log(array.__proto__ == Array.prototype);

console.log(array.__proto__.__proto__ == Object.prototype);

console.log(array.__proto__.__proto__.__proto__ == null);