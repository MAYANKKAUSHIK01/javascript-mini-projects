const display = document.getElementById("display");
let timer = null;
let startTimer = 0;
let elapsedTime = 0;
let isRuning = false;

function start(){

    if(!isRuning){
        startTimer = Date.now()-elapsedTime
        timer = setInterval(update,10);
        isRuning = true;
    }
}
function stop(){
   clearInterval(timer);
   elapsedTime = Date.now() - startTimer;
   isRuning = false;

}
function reset(){

clearInterval(timer);
startTimer = 0;
elapsedTime = 0;
isRuning = false;
display.textContent = "00:00:00:00";
}
function update(){

   const currentTime = Date.now();
   elapsedTime = currentTime - startTimer;
   let hours = Math.floor(elapsedTime/(1000*60*60));
   let minutes = Math.floor(elapsedTime/(1000*60)%60) ;
   let seconds = Math.floor(elapsedTime/1000%60);
   let milisecond = Math.floor(elapsedTime%1000/10);

   hours = String(hours).padStart(2,'0');
   minutes = String(minutes).padStart(2,'0');
   seconds = String(seconds).padStart(2,'0');
   milisecond = String(milisecond).padStart(2,'0');

   display.textContent = `${hours}:${minutes}:${seconds}:${milisecond}`;
}