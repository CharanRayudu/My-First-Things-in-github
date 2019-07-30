function dateSet(){
    let date=new Date();
let today=date.getDate();
let day=date.getDay();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let hours=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
let dispSec;
let dispMin
if(sec<10){
    dispSec="0"+sec;
}else{
    dispSec=sec;
}

if(min<10){
    dispMin="0"+min;
}else{
    dispMin=min;
}

let disph1=document.querySelector(".date-and-time");
disph1.innerHTML=`${today},${days[day]},${hours}:${min}:${dispSec}`;

let disph=document.querySelector(".date");
disph.innerHTML=`${today},${days[day]},${hours}:${min}:${dispSec}`;

setTimeout(dateSet,1000);
}
dateSet();


// Cache the DOM
let changeTextButton=document.querySelector("#change-text");
changeTextButton.addEventListener('click',function(){
    let changeText=document.querySelector(".change-text-span h1");
    changeText.innerHTML="I am Changed";
},false);
