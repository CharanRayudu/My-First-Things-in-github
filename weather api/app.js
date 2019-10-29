var table=document.getElementById("table");

var parser= new DOMParser();

var xhttp=new XMLHttpRequest();
var strign;
var url="https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=73be60b17ef66f2977f6fe67f489d223";
var dispText="<tr><td>"

xhttp.onreadystatechange=()=>{
    if(this.readyState==4 && this.status==200){
        strign=xhttp.response;
    }
    // else{
    //     console.log("fetching failed");
    // }
}
xhttp.open("GET","https://api.openweathermap.org/data/2.5/forecast?id=1253184&APPID=73be60b17ef66f2977f6fe67f489d223",true);
xhttp.send();


console.log(strign)
