console.log(10);

const timer = Date.now();

while( Date.now() - timer < 2000){
    // wait for 2 seconds
}

setTimeout(() => {
    console.log(20);
}, 2000);

console.log(30);