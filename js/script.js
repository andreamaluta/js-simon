const countdown = document.getElementById('countdown');
const listNum = document.getElementById('numbers-list');
const instruction = document.getElementById('instructions');
const answer = document.getElementById('answers-form');
const inputNum = document.querySelectorAll('form-control')
const btn = document.querySelector('.btn');
const message = document.getElementById('message');

let second = 10;
let timeout = second*1000;
const numbers = [];


countdown.innerText = second;

const clock = setInterval(function(){

    if(second != 0){
        countdown.innerText = second;
    }else{
        clearInterval(clock);
        countdown.innerText = '0';
        instruction.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)";
        listNum.classList.add('d-none');
        answer.classList.remove('d-none');
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

btn.addEventListener('click', function(event){
    event.preventDefault();

    const ans = [];

    for(let i=0; i<5; i++){
        ans.push(document.querySelector(`input:nth-child(${i+1})`).value);
    }
    console.log(ans);

    let right = 0;
    let check = "";

    for(let i=0; i<ans.length; i++){
        for(j=0; j<numbers.length; j++){
            if(ans[i]==numbers[j]){
                right++;
                check+=ans[i] + ", ";
                break;
            }
        }
    }

    message.innerText = `Hai indovinato ${right} numeri che sono ${check}`;

})



