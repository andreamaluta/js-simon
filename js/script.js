const countdown = document.getElementById('countdown');
const listNum = document.getElementById('numbers-list');
const instruction = document.getElementById('instructions');

let second = 5;
const numbers = [];

countdown.innerText = second;

const clock = setInterval(function(){

    if(second != 0){
        countdown.innerText = second;
    }else{
        clearInterval(clock);
        countdown.innerText = '0';
        instruction.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)";
    }

    second--;

}, 1000);

for(let i = 0; i<5; i++){
    let num = Math.floor(Math.random()*50) + 1;
    numbers.push(num); 
}

console.log(numbers);

for(let i=0; i<numbers.length; i++){
    const li = document.createElement('li');
    li.append(numbers[i]);
    listNum.appendChild(li);
}