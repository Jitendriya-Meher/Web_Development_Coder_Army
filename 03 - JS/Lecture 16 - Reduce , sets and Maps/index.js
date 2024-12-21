// reduce
let arr = [10,20,30,40,50,10,20,30,10];

// reduct( callback function, initializer)
let sum = arr.reduce((acc, val) => {
    acc = acc + val;
    return acc;
}, 0);

console.log('sum: ' , sum);

// freq
let freq = arr.reduce((acc, val) => {
    // if( acc[val] === undefined){
    //     acc[val] = 1;
    // }
    if( acc.hasOwnProperty(val) == false ){
        acc[val] = 1;
    }
    else{
        acc[val] += 1;
    }
    return acc;
},{});

console.log('Frequency: ' , freq);