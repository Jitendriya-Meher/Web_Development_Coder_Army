let obj = {
    name:"Jitu",
    age:23,
    gender:"Male",
    city:"Odisha"
};

// for in loop
for ( let key in obj ) {
    console.log(key, " = " ,obj[key]);
}

let obj2 = Object.create( obj );
obj2.id = 12;
obj2.money = 10;

console.log('obj2 = ' ,obj2);

console.log("Keys of obj2 = ",Object.keys(obj2));

for( let key in obj2 ){
    console.log(key, " = " ,obj2[key]);
}