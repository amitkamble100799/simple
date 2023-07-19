function buttuon(){
    let morning = document.querySelector("#morning");
    let wake=morning.options[document.getElementById("morning").selectedIndex];
    document.getElementById("wat").innerHTML=wake.innerHTML;
    let after=document.querySelector("#lunch");
    let lunchs=after.options[document.getElementById("lunch").selectedIndex]
    document.getElementById("lut").innerHTML=lunchs.innerHTML;
 let naps=document.querySelector("#nap");
 let napss=nap.options[document.getElementById("nap").selectedIndex]
 document.getElementById("nat").innerHTML=napss.innerHTML;
 let night=document.querySelector("#nap");
 let nights=nap.options[document.getElementById("night1").selectedIndex]
 document.getElementById("slt").innerHTML=nights.innerHTML;

 let Dateobj=new Date();
 let hours=Dateobj.getHours();
 let  cgPhoto = document.getElementById("img");
 if(hours===parseInt(morning.value)){
    document.getElementById("gnn").innerHTML="GOOD MORNING!! WAKE UP!!";
    document.getElementById("displaytext").innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
    cgPhoto.src ="./goodmorning 30 – 1.svg";
  
      
 } else if(hours === parseInt(lunch.value)){
    document.getElementById("gnn").innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
    document.getElementById("displaytext").innerHTML="LET'S HAVE SOME LUNCH !!";
    cgPhoto.src ="./afternoonimage.svg";
 }else if(hours=== parseInt(nap.value)){
    console.log("GOOD EVENING !!");
    document.getElementById("gnn").innerHTML="GOOD EVENING !!";
    document.getElementById("displaytext").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    cgPhoto.src ="./lunch-image.png";
   }else if(hours === parseInt(night1.value))
  {
    document.getElementById("gnn").innerHTML="GOOD NIGHT!!";
    document.getElementById("displaytext").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
    cgPhoto.src ="./goodnight_image.svg";
   
 }else{
   document.getElementById("gnn").innerHTML="Enter Valid Time!!";
   document.getElementById("displaytext").innerHTML="Default";
 }

}
 
setInterval(myfunction,1000);
function myfunction(){
var Dateobj= new Date();
var hour=Dateobj.getHours();
var minute=Dateobj.getMinutes();
var second=Dateobj.getSeconds();
var PMAM="am";
if(hour>=13){
hour-=12;
PMAM="pm";
}
document.getElementById("hr").innerHTML = hour;
document.getElementById("min").innerHTML = minute;
document.getElementById('sec').innerHTML = second;
 document.getElementById("at").innerHTML = PMAM;
}
myfunction();