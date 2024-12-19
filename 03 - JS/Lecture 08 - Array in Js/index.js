let arr = [1,2,3,'amit',false,3];

console.log('arr =',arr);

console.log('arr.length =',arr.length);

console.log('arr[3] =',arr[3]);

console.log('arr.at(2) =',arr.at(2));

// at is latest
// also take negative index
console.log('arr.at(-2) =',arr.at(-2));

// let newArr = arr;
let newArr = structuredClone(arr);

console.log('newArr =',newArr);
console.log('arr =',arr);

// push
newArr.push(123);
newArr.push('hii');

console.log('newArr =',newArr);
console.log('arr =',arr);

// pop
newArr.pop();
console.log('newArr =',newArr);

newArr.pop();
console.log('newArr =',newArr);

// unshift
newArr.unshift(123);
console.log('newArr =',newArr);

newArr.unshift('hii');
console.log('newArr =',newArr);

// shift
newArr.shift();
console.log('newArr =',newArr);

// delte
delete newArr[0];

console.log('newArr =',newArr);

newArr.shift();
console.log('newArr =',newArr);


// searching

console.log('arr.indexOf(3) =',arr.indexOf(3));

console.log('arr.lastIndexOf(3) =',arr.lastIndexOf(3));

console.log("arr.includes('amit') =",arr.includes('amit'));

console.log("arr.includes('Amit') =",arr.includes('Amit'));

// slice and splice

console.log('arr =',arr);

// slice
console.log('arr.slice(0,3) =',arr.slice(0,3));

console.log('arr.slice(1,3) =',arr.slice(1,3));

// splice 
console.log('arr =',arr);

console.log('arr.splice(1,3) =',arr.splice(1,3));

console.log('arr =',arr);

console.log("arr.splice(1,0,2,3,'amit') =",arr.splice(1,0,2,3,'amit'));

console.log('arr =',arr);

// to string and  join
console.log('arr.toString() =',arr.toString());

console.log('arr.join() =',arr.join());

console.log('arr.join(" ") =',arr.join(" "));

console.log('arr.join(" * ") =',arr.join(" * "));

// concatination
let arr1 = [1,2,3,4,5];
let arr2 = ['1', '2', '3', '4', '5'];

let arr3 = arr1.concat(arr2);

console.log('arr1.concat(arr2) =',arr3);

let arr4 = arr1.concat(arr2,arr3);

console.log('arr1.concat(arr2,arr3) =',arr1.concat(arr2,arr3));

// 2d array
let arr2d = [[1,2,3],[4,5,6],[7,8,9]];

console.log('arr2d =',arr2d);

console.log('arr2d[1] =',arr2d[1]);

console.log('arr2d[1][1] =',arr2d[1][1]);

// conver 2d array to 1d array
let arr1d = arr2d.flat();

console.log('arr2d.flat() =',arr1d);

let arrd = [[1,2,3],[4,[11,22,[111,222,[1111,2222],333],44],6],[7,8,9]];

console.log('arrd =',arrd);

console.log('arrd.flat() =',arrd.flat());

console.log('arrd.flat(2) =',arrd.flat(2));

console.log('arrd.flat(Infinity) =',arrd.flat(Infinity));


// type of
let abc = [1,2,3];

console.log('typeof(abc) =',typeof(abc));

console.log('Array.isArray(abc) =',Array.isArray(abc));

//new array
let na= new Array(10);

console.log('new array =',na);

na = new Array(1,2,3,4,5);

console.log('new array =',na);
