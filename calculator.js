let calculation=localStorage.getItem('calculation')||"";
function updateCalc(value){
  calculation+=value;
  document.querySelector('.screen').innerHTML=calculation;
  
}
function doCalc(){
  calculation=eval(calculation);
  document.querySelector('.screen').innerHTML=calculation;
  saveCalc()
}
function saveCalc(){
  localStorage.setItem('calculation',calculation)
}
function deleteCalc(){
  calculation="";
  localStorage.removeItem('calculation')
  document.querySelector('.screen').innerHTML=calculation;
}