let a;
let hour;
let mints;
let sec;
let day;
let monthh;
let year;
//let c;

setInterval(() => {
    a= new Date;
c=a.toISOString().split('T')[0]
hour=a.getHours()
mints=a.getMinutes()
sec = a.getSeconds()
document.getElementById("a").innerHTML = "0";
document.getElementById("b").innerHTML = hour;
document.getElementById("c").innerHTML = mints;
document.getElementById("d").innerHTML = ":";
document.getElementById("e").innerHTML = sec;
document.getElementById("date").innerHTML = "On the Date : "+c+" time is .... ";
}, 1000);





