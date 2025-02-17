function fetchUser( callback ){

    console.log('Fetching the user details...');

    setTimeout(() => {
        console.log('User details Fetched successfully');

        let name = "Jitendriya Meher";

        callback(name);
    }, 2000);

}

function greet(name){
    console.log('Hello EveryOne' , name);
}

function meet(name){
    console.log('Hello EveryOne' , name, "meet me at khariar");
}

fetchUser(greet);
fetchUser(meet);