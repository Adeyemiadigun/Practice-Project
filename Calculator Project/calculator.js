const clearBtn= document.getElementById('calcClearBtn')
const dividebtn= document.getElementById('divideBtn')
const mulBtn= document.getElementById('mulBtn')
const btnSeven=document.getElementById('btnSeven')
const btnEight=document.getElementById('btnEight')
const btnNine=document.getElementById('btnNine')
const subtrBtn=document.getElementById('subtrBtn')
const btnFour=document.getElementById('btnFour')
const btnFive=document.getElementById('btnFive')
const btnSix=document.getElementById('btnSix')
const addBtn=document.getElementById('addBtn')
const btnOne=document.getElementById('btnOne')
const btnTwo=document.getElementById('btnTwo')
const btnThree=document.getElementById('btnThree')
const btnZero=document.getElementById('btnZero')
const doubleZero=document.getElementById('doubleZero')
const dotBtn=document.getElementById('dotBtn')
const solveBtn=document.getElementById('solveBtn')

clearBtn.addEventListener('click',()=>deleteCalc()
)
dividebtn.addEventListener('click',()=>{updateCalc(' / ')
  screenEquation(" ÷ ")}
)
mulBtn.addEventListener('click',()=>{updateCalc(' * ')
  screenEquation(" x ")}
)
btnSeven.addEventListener('click',()=>{updateCalc('7')
  screenEquation("7")}
)
btnEight.addEventListener('click',()=>{updateCalc('8')
  screenEquation("8")}
)
btnNine.addEventListener('click',()=>{updateCalc('9')
  screenEquation("9")}
)
subtrBtn.addEventListener('click',()=>{updateCalc(' - ')
  screenEquation(" - ")
}
)
btnFour.addEventListener('click',()=>{updateCalc('4')
  screenEquation("4")
}
)
btnFive.addEventListener('click',()=>{updateCalc('5') 
  screenEquation("5")
}
)
btnSix.addEventListener('click',()=>{updateCalc('6') 
  screenEquation("6")
}
)
addBtn.addEventListener('click',()=>{updateCalc(' + ')
  screenEquation(" + ")
}
)
btnOne.addEventListener('click',()=>{updateCalc('1')
  screenEquation("1")
}
)
btnTwo.addEventListener('click',()=>{updateCalc('2')
  screenEquation("2")
}
)
btnThree.addEventListener('click',()=>{updateCalc('3')
  screenEquation("3")
}
)
btnZero.addEventListener('click',()=>{updateCalc('0')
  screenEquation("0")
}
)
doubleZero.addEventListener('click',()=>{updateCalc('00')
screenEquation("00")}
)
dotBtn.addEventListener('click',()=>{updateCalc('.')
  screenEquation(".")
}
)
solveBtn.addEventListener('click',()=>doCalc()
)

let screenValue=""
let calculation=localStorage.getItem('calculation')||"";
function updateCalc(value){
 calculation+=value;
}
function screenEquation(value){
  screenValue+=value;
  document.querySelector('.screen').innerHTML=screenValue;
}
function doCalc(){
  calculation=eval(calculation);
  document.querySelector('.screen').innerHTML=calculation;
  screenValue=calculation
  saveCalc(calculation)
}
function saveCalc(value){
  localStorage.setItem('calculation',value)
}
function deleteCalc(){
  calculation="";
  screenValue=""
  localStorage.removeItem('calculation')
  document.querySelector('.screen').innerHTML=screenValue;
}


