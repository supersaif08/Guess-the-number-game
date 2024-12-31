'use strict';

let SecNumber = Math.trunc( Math.random()*20)+1;

let score =20;


document.querySelector('.check').addEventListener('click', function OnClick (){
    const guess =Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess){
        document.querySelector('.message').textContent = '⛔️ No number!';

    }else if (guess === SecNumber) {
        document.querySelector('.number').textContent = SecNumber
        document.querySelector('.message').textContent = 'correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width ='30';
        document.querySelector('.highscore').textContent=score;

    }else if (guess > SecNumber){
        if (score > 0){
        document.querySelector('.message').textContent = 'too high';
        score--;
        document.querySelector('.score').textContent=score
        }else{
            document.querySelector('.message').textContent = 'you lost';
        }
    }else if (guess < SecNumber){
        document.querySelector('.message').textContent= 'too low';
        score--;
        document.querySelector('.score').textContent=score
    }
});
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent='Start guessing';
    SecNumber = Math.trunc( Math.random()*20)+1;
    score='20';
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.number').style.width='15';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=' ';
})

    

