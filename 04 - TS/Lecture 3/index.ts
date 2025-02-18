interface Person {
    name: string,
    age: number,
    addhar?: string
}

let p1:Person = {
    name: "person1",
    age: 1,
    addhar:"123"
}

console.log('person1', p1);

let p2:Person = {
    name: "person2",
    age: 2,
}

console.log('person2', p2);

interface Teacher extends Person{
    salary: number,
    id: number
}

let t1:Teacher = {
    name: "teacher1",
    age: 1,
    salary: 12,
    id: 12
}

console.log('Teacher', t1);

interface Customer {
    name: string,
    age: number,
    balance: number
}

let c1: Partial<Customer> = {
    name: "customer1",
}

console.log('customer1', c1);

let c2: Required<Customer> = {
    name: "customer2",
    age: 2,
    balance:123
}

c2.age = 22;

console.log('customer2', c2);

let c3: Readonly<Customer> = {
    name: "customer3",
    age: 3,
    balance:123
}

// c3.age = 33;

console.log('customer3', c3);

// array of object
let cArr: Customer[] = [
    {name: "customer1", age: 1, balance: 100},
    {name: "customer2", age: 2, balance: 200},
];

console.log('customer array :',cArr);

// fuction
function greet():void{
    console.log('hii EveryOne!');
}

greet();

function sum( a:number, b:number ):number {
    return a + b;
}

console.log('sum :',sum(10,22));

function sumOpt( a:number, b:number=10):number{
    return a + b;
}

console.log('sumOpt :',sumOpt(100));

console.log('sumOpt :',sumOpt(100,23));

function Msg( person?:string):void{
    console.log("Hii >> ",person || "ABCD");
}

Msg();
Msg("Jiten");

const sumAro = (a:number,b:number):void => {
    console.log('sum =',a+b);
}

sumAro(10,20);


function placeOrder( order:number, callback:(amount:number) => void):void {

    const amt:number = order + 10;
    console.log("Order =", order);

    callback(amt);
}

placeOrder(123, (amount:number):void => {
    console.log("Amount =",amount)
});

// rest parameters
function Total( ...arr: number[]):void{
    let sum:number = 0;
    arr.forEach((val:number):void => {
        sum += val;
    });
    console.log('Total =',sum)
}

Total(1,2,3,4,5,6);