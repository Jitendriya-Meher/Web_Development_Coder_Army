// for in loop
// array is an object

const arr = [10,20,30,40,50,60,70,80,90];

for( let key in arr ){
    console.log(key, arr[key]);
}
console.log('array length : ' , arr.length);

// as array is a object
arr.name = 'array';
arr.age = 20;

console.log('array length : ' , arr.length);
console.log(arr);
for( let key in arr ){
    console.log(key, arr[key]);
}

console.log(arr);
for( let key=0; key<arr.length; key++){
    console.log(key, arr[key]);
}