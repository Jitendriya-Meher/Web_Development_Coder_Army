function Show<T>(a:T):T{
    return a;
}

console.log(Show(10));
console.log(Show("ABC"));

console.log(Show<boolean>(true));
console.log(Show<number[]>([1,2,3,4,5,6]));


interface Inf<T,S>{
    name:string,
    age:number,
    aadhar:T,
    salary:S
}

const a1: Inf<number,string> = {
    name:"inf1",
    age:1,
    aadhar:123,
    salary: "1 Lakh"
}

console.log('Inf1:', a1);

const a2: Inf<string,number> = {
    name:"inf1",
    age:1,
    aadhar:'adh123',
    salary: 123456
}

console.log('Inf2:', a2);