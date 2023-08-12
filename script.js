
// SCORE FUNCTION 
var score = 0;
var timer = 60;
var random_hit;
var timerInterval;

const increaseScore = () => {
    score+=10;
    document.querySelector("#scoreVal").textContent = score;
}


// GET NEW HIT 

const getNewHit = () => {
    random_hit = Math.ceil(Math.random() * 10 + 10);
    document.querySelector("#hitVal").textContent = random_hit;
}


// BUBBLE MAKER FUNCTION 
const makeBubble = () => {
    var clutter = '';
    
    for(let i = 0 ; i < 102 ; i++){
        let random = Math.ceil(Math.random() * 10 + 10);
        clutter += `<div class="bubble">${random}</div>`;
    }
    
    document.querySelector('#pbtm').innerHTML = clutter;
}


// TIMER FUNCTION 

const runTimer = () => {
    let val = document.querySelector('#timerValue');
    
    timerInterval = setInterval(() => {
        if(timer > -1){
            val.textContent = timer;
            timer--;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector('#pbtm').innerHTML = `Your score value is ${score} <br> Gamer over!!!`;
        }
    },1000)

}


document.querySelector('#pbtm')
.addEventListener('click',(e) => {
    var clickedNumber = Number(e.target.textContent);
    if(clickedNumber == random_hit){
        increaseScore();
        getNewHit();
        makeBubble();
    }
})


// start button 

// Restart button functionality
document.querySelector('#restartButton button').addEventListener('click', () => {
    clearInterval(timerInterval); // Clear the previous timer interval
    score = 0;
    timer = 60;
    getNewHit();
    runTimer();
    makeBubble();
    document.querySelector("#scoreVal").textContent = score;
});


getNewHit();

runTimer();

makeBubble();