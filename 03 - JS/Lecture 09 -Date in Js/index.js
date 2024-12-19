const d = new Date();
// get date from system clock

console.log('date =',d);

console.log('date type =',typeof(d));

console.log('d.toString() =',d.toString());

console.log('d.toDateString() =',d.toDateString());

console.log('d.toISOString() =',d.toISOString());

let nd = new Date(2000);
console.log('date =',d);

nd = new Date(200020002000);
console.log('date =',d);

// function
console.log('d.getFullYear() =',d.getFullYear());

console.log('d.getMonth() =',d.getMonth());

console.log('d.getDate() =',d.getDate());

console.log('d.getDay() =',d.getDay());

console.log('d.getHours() =',d.getHours());

console.log('d.getMinutes() =',d.getMinutes());

console.log('d.getSeconds() =',d.getSeconds());

console.log('d.getMilliseconds() =',d.getMilliseconds());

console.log('d.getTime() =',d.getTime());

// Date.now()
let now = Date.now();
console.log('Date.now() =',now);

let date = new Date(2001,10,20);
console.log('date =',date.toString());

// date calculation
let date1 = new Date();
let date2 = new Date("2028-07-14");

console.log('date1 =',date1);
console.log('date2 =',date2);

let diff = date2 - date1;

console.log('date2 - date1 =',diff);

// days
let days = Math.floor(diff/(1000*60*60*24));
console.log('days =',days);

// hours
let hrs = Math.floor((diff/(1000*60*60)) % 24);

console.log('hours =',hrs);

// minutes
let min = Math.floor((diff/(1000*60)) % 60);

console.log('minutes =',min);

// seconds
let sec = Math.floor((diff/(1000)) % 60);

console.log('seconds =',hrs);