let hr = 0
let min = 0
let sec = 0

let timer = false

function start() {
    timer = true
    stopwatch()
}

function stop() {
    timer = false

}

function reset() {
    timer = false
    hr = 0
    min = 0
    sec = 0
    document.getElementById("sec").innerHTML ='00'
    document.getElementById("min").innerHTML = '00'
    document.getElementById('hr').innerHTML = '00'

}

function stopwatch() {
    if (timer) {
        sec++
        if (sec == 60) {
            min++;
            sec = 0
            document.getElementById("min").innerHTML = min

        }
        if (min == 60) {
            hr++;
            min = 0
            sec = 0
            document.getElementById('hr').innerHTML = hr
        }
        document.getElementById("sec").innerHTML = sec
        setTimeout("stopwatch()", 1000);
    }
}