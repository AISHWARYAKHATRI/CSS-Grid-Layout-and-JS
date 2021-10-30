const music1 = new Audio('./assets/music1.mp3');
const music2 = new Audio('./assets/music2.mp3');

// console.log(document.getElementsByTagName('div'));
const items1 = document.getElementsByClassName('item1');
const items2 = document.getElementsByClassName('item2');



window.addEventListener('DOMContentLoaded', ()=>{
console.log("DOM fully loaded and parsed");
var i;
for(i=0;i<items1.length; i++){
    items1[i].addEventListener('click', ()=>{music1.play()});
}

for(i=0;i<items2.length; i++){
    items2[i].addEventListener('click', ()=>{music2.play()});
}
})



