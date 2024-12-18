const num = 10;
// num = 20;
// constat connot be change
console.log('num =', num);

// non premitive data types
const obj = {
    balance: 10000,
    id: 10 
};

obj.id = 20;

console.log('obj =', obj);

// obj = {
//     balance: 10000,
//     id: 40
// };
// now it cannot be changed
 
console.log('obj =', obj);

let str1 = 'hii i am jitrndriya';
let str2 = "hii i am jitrndriya";
let str3 = `hii i am jitrndriya`;

console.log(str1,str2,str3);

let balance = 102030;
let s = `hii my current balance is ${balance} and yours ${obj.balance}`;

console.log('s =', s);

// string concatination
let s1 = 'Hello, ';
let s2 = 'World';
let s3 = s1+s2;

console.log('s3 =', s3);

// length 
console.log('s1.length =', s1.length);
console.log('s2.length =', s2.length);
console.log('s3.length =', s3.length);

// escape character
console.log('"hello world"');
console.log(`"hello world"`);
console.log("\"hello world\"");

let msg = "hello \n world";
console.log('msg = ',msg);

msg = "hello \\n world";
console.log('msg = ',msg);

let special = "Jitendriya";
console.log('special[4] =',special[4]);
console.log('special.charAt(3) =',special.charAt(3));

// lowercase
console.log('special.toLowerCase() = ',special.toLowerCase());

// upper case
console.log('special.toUpperCase() = ',special.toUpperCase());

// searching in string
let hero = "Hello, world! world!";

console.log('hero.indexOf("world") =',hero.indexOf("world"));

console.log('hero.indexOf("World") =',hero.indexOf("World"));

// last index
console.log('hero.lastIndexOf("world") =',hero.lastIndexOf("world"));

console.log('hero.lastIndexOf("World") =',hero.lastIndexOf("World"));

// includes
console.log('hero.includes("world") =',hero.includes("world"));

console.log('hero.includes("World") =',hero.includes("World"));

// sub string
let newstring = "Hello Don Don";

// slice can take negative index also
console.log('newstring.slice(0,3) =',newstring.slice(0,3));

console.log('newstring.slice(3) =',newstring.slice(3)); 

console.log('newstring.slice(1,3) =',newstring.slice(1,3));

console.log('newstring.slice(-4,-1) =',newstring.slice(-4,-1));


console.log('newstring.slice(-6) =',newstring.slice(-6));

// substring
console.log('newstring.substring(0,3) =',newstring.substring(0,3));

console.log('newstring.substring(1,3) =',newstring.substring(1,3));

// replace
console.log('newstring.replace("Don","Dhoni") =',newstring.replace("Don","Dhoni"));

console.log('newstring.replaceAll("Don","Dhoni") =',newstring.replaceAll("Don","Dhoni"));

// split
let arrStr = "Money, Don, Dhoni, Dhoni, Dhoni, 1, 2, 3, 4, 5, 6, 7, 8, 9";

console.log('arrStr.split(",") =',arrStr.split(","));

console.log('arrStr.split(", ") =',arrStr.split(", "));

// trim
let spaces = "    hello world       ";

console.log('spaces =', spaces);

console.log('spaces.trim() =', spaces.trim());

console.log('spaces.trimEnd() =', spaces.trimEnd());

console.log('spaces.trimStart() =', spaces.trimStart());

// new way to create string
let ns = new String("Hello world");
// new -> create memory in heap

console.log('ns =',ns);

console.log('ns type =',typeof(ns));