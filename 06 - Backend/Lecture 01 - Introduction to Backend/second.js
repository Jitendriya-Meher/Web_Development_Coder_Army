console.log('hello i am second.js file');

function sum(a,b){
    console.log(`${a} + ${b} = ${a+b}`);
}

function mul(a,b){
    console.log(`${a} X ${b} = ${a*b}`);
}

module.exports = {sum,mul};