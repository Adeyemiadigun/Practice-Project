const myArray=JSON.parse(localStorage.getItem('myArray'))||[];
const addButton=document.getElementById('addButton');
addButton.addEventListener('click',todoListAdder)

function updateTodo(){
let todoListHtml='';

myArray.forEach((todoObj,index) => {
  const {name,dueDate}=todoObj
  const html=`<div class="innerList"><div class= "innerContent"><p>${todoObj.name}</p>
  <div class="listDate">${dueDate}</div> 
  <button class="deleteButton">Delete</button></div></div>`
  todoListHtml+=html
});
  document.querySelector('.list').innerHTML=todoListHtml
  document.getElementsByClassName('deleteButton').forEach((deleteBtn,index)=>{
   deleteBtn.addEventListener('click',()=>{
    myArray.splice(index,1)
    updateTodo()
   })
  })
}

function todoListAdder(){
  const screen=document.querySelector('.todoInput');
  const dateValue=document.querySelector('.date');
  
 myArray.push({name:screen.value,
  dueDate:dateValue.value}
  );
  saveTostorage()
  screen.value='';
  dateValue.value=''
  updateTodo()
}
function saveTostorage(){
  localStorage.setItem('myArray',JSON.stringify(myArray));
}

