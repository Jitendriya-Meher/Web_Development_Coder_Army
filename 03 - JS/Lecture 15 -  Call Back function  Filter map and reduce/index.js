// for of loop

let arr = [10,20,30,40,50,60];

for( let val of arr){
    console.log('for of loop: ',val);
}

let str = "Jitendriya Meher";
for( let ch of str){
    console.log('for of loop: ', ch);
}

// don't use for of loop in object
// as object is not iteratable
// as it has no indexing
let obj = {
    name: "Jitendriya Meher",
    age:20,
    city: "Bhubaneswar"
};

// for( let val of obj){
//     console.log(val);
// }

for( let val of Object.values(obj)){
    console.log(val);
}

// foeEach loop
let arr2 = [100,200,300];

arr2.forEach( function(val) {
    console.log('for each function :',val);
});

arr2.forEach( (val,index, ar) => {
    ar[index] = val*5;
    console.log('for each arrow function :',index,val,ar);
});


//filter
let arr3 = [10,22,12,23,21,33,43,34];

console.log('arr3:',arr3);

const evens = arr3.filter( (val) => {
    return val%2==0;
});

console.log('Evens:',evens);


const odds = arr3.filter( (val, index, ar) => {
    return val%2==1;
});

console.log('Odds:',odds);

const students = [
    {
        name: 'Student1',
        age: 26
    },
    {
        name: 'Student2',
        age: 261
    },
    {
        name: 'Student3',
        age: 216
    },
    {
        name: 'Student4',
        age: 126
    },
];

const res = students.filter((student) => {
    return student.age > 200;
});

console.log('students :', res);


// map
const arr4 = [1,2,3,4,5,6,7,8];

console.log('arr4 :', arr4);

let arrMul2 = arr4.map((val) => {
    return val*2;
});

console.log('arrMul2 :', arrMul2);


let arrMul5 = arr4.map((val) => {
    return val*5;
});

console.log('arrMul5 :', arrMul5);

let arrSqr = arr4.map((val,index, ar) => {
    return {"sqr":val*val,index,ar};
});

console.log('arrSqr :', arrSqr);


// chaining 
let arrEvenSqr = arr4.filter((val) => val%2==0).map((val) => val*val);

console.log('arrEvenSqr :', arrEvenSqr);