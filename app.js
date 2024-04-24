let time = document.getElementById("current-time");
setInterval(() =>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000)
let curDate = document.getElementById("date");
let date = new Date();
    curDate.innerHTML = date.toDateString();