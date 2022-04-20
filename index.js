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

    
function settime() {
    let a = document.getElementById("wakup").value;
    let b = document.getElementById("lunch").value;
    let c = document.getElementById("nap").value;
    let d = document.getElementById("night").value;
    let alerts = document.getElementsByClassName("alert");
    let tasks = document.getElementsByClassName("task");
    let imgs = document.getElementsByTagName("image");
    let h = new Date().getHours();
    imgs[5].src = "./morning.png";

    if (a == h) {
        alerts[0].innerText = "GOOD MORNING !! WAKE UP !!";
        tasks[0].innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
    }
    let w = document.getElementById("wakeupTime");
    w.innerText = wakeup.options[wakup.selectedIndex].text;
    if (b == h) {
        alerts[0].innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        tasks[0].innerText = "LET'S HAVE SOME LUNCH !!";
        imgs[5].src = "./lunch_image.png";
    }
    let l = document.getElementById("lunchTime");
    l.innerText = lunch.options[lunch.selectedIndex].text;
    if (c == h) {
        alerts[0].innerText = "GOOD EVENING !!";
        tasks[0].innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING !";
        imgs[5].src = ".morning.png";
    }
    let n = document.getElementById("napTime");
    n.innerText = nap.options[nap.selectedIndex].text;
    if (d == h) {
        alerts[0].innerText = "GOOD NIGHT !! WAKE UP !!";
        tasks[0].innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        imgs[5].src = "./night.png";
    }
    let N = document.getElementById("nightTime");
    N.innerText = night.options[night.selectedIndex].text;
}