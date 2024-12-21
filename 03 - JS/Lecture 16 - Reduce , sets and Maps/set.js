const set1 = new Set([1,2,3,4,5,6,7,8,9,10,1]);
console.log('set1', set1);

const set2 = new Set();

// insert
set2.add(1);
set2.add(2);
set2.add(3);
set2.add("Amit");
set2.add(2);

console.log('set2', set2);
console.log('set2 length :', set2.size);

// delete
set2.delete(2);

console.log('set2', set2);
console.log('set2 length :', set2.size);

// search
console.log('set2.hash(1) =', set2.has(1));

// clear the set
set2.clear();

console.log('set2', set2);
console.log('set2 length :', set2.size);


// operation
let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5,6,7];

// array to set
const s1 = new Set(arr1);
const s2 = new Set(arr2);

// set to array
let arr = [...s1];
console.log('arr =', arr);

console.log('set1 =', s1);
console.log('set2 =', s2);

// union
let union = new Set([...s1, ...s2]);

console.log('union =', union);

// intersection
let intersection = [...s1].filter((num) => {
    return s2.has(num);
});
intersection = new Set(intersection);

console.log('intersection =', intersection);

// iterate
for( let val of s1){
    console.log('for of', val);
}

s2.forEach((val) => {
    console.log('forEach', val);
});