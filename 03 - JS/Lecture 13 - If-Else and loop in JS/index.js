let age = 20;

if( age >= 18){
    console.log("Eligble for vote ");
}
else{
    console.log(`Not eligible for vote`);
}

age = 19;

if( age < 18){
    console.log(`You are a Kid`);
}
else if( age < 45){
    console.log(`You are a Young Person`);
}
else{
    console.log(`You are old person`);
}

// switch
let day = new Date().getDay();

switch (day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Not a valid date')
}

// for loop
for( let i=0; i<10; i++){
    console.log('i = ' + i);
}

// nested for loop
for( let i=0; i<5; i++){
    // let ch= "";
    for( let j=0; j<=i; j++){
        // ch+="*";
        process.stdout.write("*");
    }
    // console.log(ch);
    console.log();
}

let ob = {
    name:"Rohit",
    age:30,
    amount:1200,
    city:"Odisha"
};

let keys = Object.keys(ob);
console.log("keys: " , keys);

let values = Object.values(ob);
console.log("Values :",values);

for( let i = 0; i < keys.length; i++ ){
    console.log(keys[i]," = ", ob[keys[i]]);
}