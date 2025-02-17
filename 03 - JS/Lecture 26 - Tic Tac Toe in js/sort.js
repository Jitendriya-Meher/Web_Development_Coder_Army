let arr = [1,2,3,10,20,30,100,200,300];

console.log('arr: ' + arr);

// sort as string
arr.sort();

console.log('arr: ' + arr);

// sort assendingly as numbers
arr.sort((a,b) => {
    return a-b;
});

console.log('arr: ' + arr);

// sort decendingly as numbers
arr.sort((a,b) => {
    return b-a;
});

console.log('arr: ' + arr);

// sort randomly
arr.sort((a,b) => {
    return Math.random() - 0.5;
});

console.log('arr: ' + arr);

// sort randomly - O(n)
let len = arr.length;
for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random()*len);
    // swap the random index with last index
    // let n = arr[j];
    // arr[j] = arr[len-1];
    // arr[len-1] = n;
    // swap 2
    [arr[j], arr[len-1]] = [arr[len-1],arr[j]];
    // decrease the length
    len--;
}

console.log('arr: ' + arr);