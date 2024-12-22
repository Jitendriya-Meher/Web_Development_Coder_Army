// 'use strict';

function greet(){
    console.log('this =',this);
}

greet();

a = 10;
console.log('a =',a);

const obj = {
    name: 'foo',
    age:20,
    greet: function(){
        console.log('object this =',this);
    },
    changeName: function(name){
        this.name = name;
    }
}

obj.greet();

obj.changeName("Amit");

obj.greet();


const obj2 = {
    name: 'Amit',
    age:20,
    greet: () => {
        console.log('arrow function this =',this);
    }
}

obj2.greet();

const obj3 = {
    name: 'Amit',
    age:20,
    greet: function () {
        let fun = () => {
            console.log('arrow function this =',this);
        }
        fun();
    }
}

obj3.greet();


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person("Amit",21);
console.log('p1 = ', p1);