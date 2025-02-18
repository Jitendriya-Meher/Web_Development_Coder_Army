class PersonCls {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const pc1:PersonCls = new PersonCls("Jiten",23);
console.log('person1', pc1);

const pc2:PersonCls = new PersonCls("Jit",23);
console.log('person2', pc2);