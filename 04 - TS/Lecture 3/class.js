"use strict";
class PersonCls {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const pc1 = new PersonCls("Jiten", 23);
console.log('person1', pc1);
const pc2 = new PersonCls("Jit", 23);
console.log('person2', pc2);
