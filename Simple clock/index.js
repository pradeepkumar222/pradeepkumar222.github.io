let a;
let hour;
let mints;
let sec;
let date;
setInterval(() => {
    a= new Date;

hour=a.getHours()
mints=a.getMinutes()
sec = a.getSeconds()
document.getElementById("a").innerHTML = "0";
document.getElementById("b").innerHTML = hour;
document.getElementById("c").innerHTML = mints;
document.getElementById("d").innerHTML = ":";
document.getElementById("e").innerHTML = sec;
}, 1000);
c=a.toISOString().split('T')[0]
document.getElementById("date").innerHTML = "On the Date : "+c+" time is .... ";





