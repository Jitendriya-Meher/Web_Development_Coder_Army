let n1 = 123;
console.log('n1 =', n1);
console.log(typeof(n1));

let n2 = new Number(123);
console.log('n2 =', n2);
console.log(typeof(n2));

let n3 = new Number(123);
console.log('n3 =', n3);
console.log(typeof(n3));

console.log('n1==n2 ->',n1==n2);
console.log('n3==n2 ->',n2==n3);


let num = 123.45678;

console.log('num.toFixed(3) =',num.toFixed(3));

console.log('num.toPrecision(5) =',num.toPrecision(5));

console.log('num.toPrecision(3) =',num.toPrecision(3));

console.log('num.toPrecision(2) =',num.toPrecision(2));

console.log('num.toExponential() =',num.toExponential());

console.log('num.toExponential(2) =',num.toExponential(2));

console.log('num.toString() =',num.toString());

console.log('num.valueOf() =',num.valueOf());

// maths

console.log('Math.E =',Math.E);

console.log('Math.LN10 =',Math.LN10);

console.log('Math.PI =',Math.PI);


// random
let random = Math.random();

console.log('Math.random() =',random);

console.log('Math.random()*10 =',random*10);

console.log('Math.floor(Math.random()*10) =',Math.floor(random*10));

console.log('Math.ceil(Math.random()*10) =',Math.ceil(random*10));

// 1-10
console.log('1-10 = ',1 + Math.floor(Math.random()*10));

// 100-200
console.log('100-200 = ',100 + Math.floor(Math.random()*(200-100+1)));