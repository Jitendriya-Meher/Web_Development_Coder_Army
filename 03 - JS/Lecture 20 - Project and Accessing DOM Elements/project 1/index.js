const timer = document.getElementById('root');

console.log('timer =', timer);

// const now = new Date();
// const indianTime = now.toLocaleTimeString();
// timer.innerHTML = indianTime;

timer.style.fontSize = '200px';
timer.style.display = 'flex';
timer.style.justifyContent = 'center';
timer.style.alignItems = 'center';
timer.style.height = '100vh';

function showTimer(){
    const now = new Date();
    const indianTime = now.toLocaleTimeString();
    timer.innerHTML = indianTime;
}

// showTimer();
setInterval(showTimer, 1000);