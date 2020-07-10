// var count = 0;
// var interval;
// function timer(){
//     count++
    // console.log(count)
// }

// interval = setInterval(timer, 1000)

// function timeOut(){
//     console.log("running ...")
// }
// setTimeout(timeOut, 3000)
var min = 0;
var sec = 0;
var msec = 0;
minHeading = document.getElementById("min");
secHeading = document.getElementById("sec");
msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }
}

interval = setInterval(timer, 10)