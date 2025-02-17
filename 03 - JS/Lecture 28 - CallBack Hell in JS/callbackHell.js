function placeOrder( callback){
    console.log('Talking with Domino"s');

    setTimeout(() => {
        console.log("Order Placed Successfully");

        callback();
    }, 2000);
}


function perparingOrder( callback){
    console.log("Pizza preparation started...");

    setTimeout(() => {
        console.log("Pizza preparation Done");

        callback();
    }, 3000);
}

function pickupOrder( callback ){
    console.log("Reacing location... for picking order...");

    setTimeout(() => {
        console.log("Order Pickup by Delivery boy");

        callback();
    }, 2000);
}

function deliverOrder(){
    console.log("Reacing location... for delivery order...");

    setTimeout(() => {
        console.log("Order Deliver by Delivery boy");
    }, 3000);
}

// placeOrder( perparingOrder);
placeOrder( () => {
    perparingOrder( () => {
        pickupOrder( () => {
            deliverOrder();
        });
    });
})