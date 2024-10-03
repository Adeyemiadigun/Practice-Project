let btn= document.getElementById("actionButton")
let screen= document.getElementById("screen")
let stopBtn= document.getElementById("stop")

let intervalId;
const input=document.querySelector(".input");
let isPause=false;
let result;
 screen.textContent = `Time Left: 0`

btn.addEventListener('click',()=>{
  if(!isPause){
    start()
  }
  else{
    resume()
  }
})
function start(){
screen.style.color='blue'
result = parseInt(input.value);
intervalDuration= result;
input.value="";
screen.textContent = `Time Left: ${intervalDuration}`;
intervalId= setInterval(()=>{
screen.textContent = `Time Left: ${intervalDuration}`;
intervalDuration--;
if(intervalDuration<=0){
 screen.innerHTML = "Countdown finished";
 clearInterval(intervalId)
 screen.style.color='red'
}
},1000)
}

function resume(){
    btn.innerHTML="Start"
  intervalId = setInterval(()=>{
    screen.textContent = `Time Left: ${intervalDuration}`;
  intervalDuration--;
  if(intervalDuration<=0){
    screen.innerHTML = "Countdown finished";
    clearInterval(intervalId)
    screen.style.color='red'
  }
 },1000)
 isPause=true;
  }

  
stopBtn.addEventListener('click',()=>{
  clearInterval(intervalId)
   screen.textContent = `Time Left:`
})


let pauseButton= document.getElementById("pause");

pauseButton.addEventListener('click',()=>{
  clearInterval(intervalId)
  btn.innerHTML="Continue"
  screen.textContent = `Time Left: Paused`;
  isPause=true;
})
  
 