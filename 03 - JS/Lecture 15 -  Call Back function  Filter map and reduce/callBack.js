// call back function
function names(greet){
    console.log("Hello I am names");
    greet();
    greet();
    console.log('----------------');
}

function greet(){
    console.log('I am call back function');
}

greet();
names(greet);

names(function greet(){
    console.log('I am call back function');
});

names(() => {
    console.log('I am call back function');
});

setInterval(greet, 1000);