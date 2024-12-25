const grandParent = document.getElementById('grandParent');

const parent = document.getElementById('parent');

const child = document.getElementById('child');

// event bubbling and event capturing

child.addEventListener(
    // event type
    'click',
    // callback function
    (e) => {
        console.log('child click');
        console.log('e.target =',e.target);
        console.log('e.currentTarget =',e.currentTarget);

        // stop bubbling
        e.stopPropagation();
    },
    // event bubbling and event capturing
    // false / by default -> event bubbling
    // true -> event capturing
    true
);

parent.addEventListener(
    // event type
    'click',
    // callback function
    (e) => {
        console.log('parent click');
        console.log('e.target =',e.target);
        console.log('e.currentTarget =',e.currentTarget);

        // stop bubbling
        e.stopPropagation();
    },
    // event bubbling and event capturing
    // false / by default -> event bubbling
    // true -> event capturing
    true
);

grandParent.addEventListener(
    // event type
    'click',
    // callback function
    (e) => {
        console.log('grandParent click');
        console.log('e.target =',e.target);
        console.log('e.currentTarget =',e.currentTarget);

        // stop bubbling
        e.stopPropagation();
    },
    // event bubbling and event capturing
    // false / by default -> event bubbling
    // true -> event capturing
    true
);