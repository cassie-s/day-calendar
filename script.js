//load today's date//

const clock = document.getElementById('clock');

function updateTime() {
    const now = moment();
    const humanReadable = now.format('LL');

    clock.textContent = "Today's date is: " + humanReadable; 
};

setInterval(updateTime, 1000);
updateTime();

//make divs editable//

function divClicked() {
    var divHtml = $(this.html)
}

//conditionally format divs based present, past, or future (moment.js)//

//when the save button is clicked, text is saved in local storage//


