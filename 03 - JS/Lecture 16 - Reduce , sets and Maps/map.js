// key value pairs : key should be anything but unique

const mpp = new Map();

// type
console.log('type of map =', typeof(mpp));

// insert
mpp.set(2,20),
mpp.set('amit',120);
mpp.set(5,'hii');

mpp.set(2,40);

console.log('map : ' , mpp);

// delete
mpp.delete(2);

console.log('map : ' , mpp);

// searching
console.log('mpp.has(2) =', mpp.has(2));

// size
console.log('size = ' , mpp.size);

// traversal
mpp.forEach((value,key) => {
    console.log(key, " = " ,value);
});

// clear
mpp.clear();
console.log('map : ' , mpp);


// method 2
const map1 = new Map([
    [2,20],
    ['amit',2],
    [3,200],
    ['www',"world"],
    [[1,2,3],[4,5,6]]
]);

for( let value of map1){
    console.log(value)
}

for( let [key,value] of map1){
    console.log(key,' = ' , value);
}