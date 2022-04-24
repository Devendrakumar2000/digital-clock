const clock = () =>{
const date =new Date();
let ampm ="AM";
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
    let hs = document.getElementsByClassName("H");
    let ms = document.getElementsByClassName("M");
    let ss = document.getElementsByClassName("S");
    let amorpm = document.getElementsByClassName("AMPM");
if(hours>12)
 {
     hours=hours-12;
     ampm ="PM";
 }
 if(hours==00)
  {
      hours=12;
      ampm ="AM";
  }
   if(hours<10)
   {
       hours = "0" + hours;
   }
   if(minutes<10)
    {
      minutes = "0" + minutes;
    }
    if(seconds<10)
    {
        seconds = "0" + seconds;
    }
      hs[0].innerText = hours;
      ms[0].innerText = minutes;
      ss[0].innerText = seconds;
      amorpm[0].innerText = ampm;
}
setInterval(clock,1000);

function hover(){
    let e = document.getElementById("dev");
    e.innerText = "Party Time !!";
    e.style.backgroundColor = "blue";
    e.style.backgroundImage= " linear-gradient( to left, blue 30%,pink 70%)";
    e.style.color ="white";
    }
    function hoverout(){
        let e1 = document.getElementById("dev");
        e1.innerText = "Set Time";
        e1.style.backgroundColor = "red";
        e1.style.backgroundImage= " linear-gradient( to right, blue 30%,pink 70%)";
        e1.style.color ="white";
    }
    
function settime() {
    let alerts = document.getElementsByClassName("alert");
    let tasks = document.getElementsByClassName("task");
    let imgs = document.getElementsByTagName("img");
    let h = new Date().getHours();
    imgs[5].src = "./morning.png";

    let w = document.getElementById("wakeup");
     let w1=w.value;

    if (w1 == h) {
        alerts[0].innerText = "GOOD MORNING !! WAKE UP !!";
        tasks[0].innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
        imgs[5].src="./morning.png"
    }
    
    let l = document.getElementById("lunch");
    let l1 = l.value;

    if (l1 == h) {
        alerts[0].innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        tasks[0].innerText = "LET'S HAVE SOME LUNCH !!";
        imgs[5].src = "./lunch.png";
    }
    
    let n = document.getElementById("nap");
     let n1 = n.value;


    if (n1 == h) {
        alerts[0].innerText = "GOOD EVENING !!";
        tasks[0].innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING !";
        imgs[5].src = "./lunch_image.png";
    }
    
    let N = document.getElementById("night");
    let N1 = N.value;

    if (N1 == h) {
        alerts[0].innerText = "GOOD NIGHT !! WAKE UP !!";
        tasks[0].innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        imgs[5].src = "./night.png";
    }
   
}
