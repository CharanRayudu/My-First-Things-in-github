let changeB=document.querySelector('#changeB');
let change= document.querySelector('#change');
changeB.addEventListener("click",function(){
    change.innerHTML=96;
});

var text= "<Student>"+
"<firstName>Jon</firstName>"+
"<lastName>Favreau</lastName>"+
"<middleName>Keegan</middleName>"+
"<rollNumber>111</rollNumber>"+
"<subject1>85</subject1>"+
"<subject2>95</subject2>"+
"<subject3>90</subject3>"+
"</Student>"

// the cache for table2
let sub1=document.getElementById("sub1");
let sub2=document.getElementById("sub2");
let sub3=document.getElementById("sub3");
let roll=document.getElementById("roll");
let name=document.getElementById("name");
let last=document.getElementById("last");
let middle=document.getElementById("middle");

var parse = new DOMParser();

var xmlDoc=parse.parseFromString(text,"text/xml");

roll.innerHTML=xmlDoc.getElementsByTagName("rollNumber")[0].firstChild.nodeValue;
sub1.innerHTML=xmlDoc.getElementsByTagName("subject1")[0].firstChild.nodeValue;
sub2.innerHTML=xmlDoc.getElementsByTagName("subject2")[0].firstChild.nodeValue;
sub3.innerHTML=xmlDoc.getElementsByTagName("subject2")[0].firstChild.nodeValue;
name.innerHTML=xmlDoc.getElementsByTagName("firstName")[0].firstChild.nodeValue;
middle.innerHTML=xmlDoc.getElementsByTagName("middleName")[0].firstChild.nodeValue;
last.innerHTML=xmlDoc.getElementsByTagName("lastName")[0].firstChild.nodeValue;
