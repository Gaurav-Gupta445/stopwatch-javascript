window.onload = () => {
    let secs = 00, min = 00, start = document.getElementById('start'), stop = document.getElementById('stop'), reset = document.getElementById('reset'), seconds = document.getElementById("seconds"), minute = document.getElementById('minute');
    var interval;

    start.onclick = () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 100);
    }

    reset.onclick = () => {
        clearInterval(interval);
        min = "00";
        secs = "00";
        seconds.innerHTML = secs;
        minute.innerHTML = min;
    }

    stop.onclick = () => {
        clearInterval(interval);
    }

    startTimer = () => {
        secs++;
        if (secs < 9) {
            seconds.innerHTML = "0" + secs;
        }

        if (secs > 9) {
            seconds.innerHTML = secs;
        }

        if (secs > 99) {
            console.log('seconds');
            min++;
            minute.innerHTML = "0" + min;
            secs = 0;
            seconds.innerHTML = "0" + 0;
        }

        if (min > 9) {
            minute.innerHTML = min;
        }
    }
}


