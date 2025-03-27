const countdown = document.getElementById('countdown');
let second = 5;

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