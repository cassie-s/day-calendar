const clock = document.getElementById('clock');

function updateTime() {
    const now = moment();
    const humanReadable = now.format('ll');

    clock.textContent = "Today's date is: " + humanReadable; 
};

setInterval(updateTime, 1000);
updateTime();
