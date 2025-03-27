const countdown = document.getElementById('countdown');
const listNum = document.getElementById('numbers-list');

let second = 5;
const numbers = [];

countdown.innerText = second;

const clock = setInterval(function(){

    if(second != 0){
        countdown.innerText = second;
    }else{
        clearInterval(clock);
        countdown.innerText = '';
    }

    second--;

}, 1000);

for(let i = 0; i<5; i++){
    let num = Math.floor(Math.random()*50) + 1;
    numbers.push(num); 
}

console.log(numbers);