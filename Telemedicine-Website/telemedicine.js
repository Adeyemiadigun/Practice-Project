let navButton=document.querySelector('.navButton')
let navList=document.querySelector('.nav')
function showMenu(){
 if(window.getComputedStyle(navList).display==='none') {
    navList.style.display='block'
  } else {
    navList.style.display='none'
  }
}