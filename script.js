//load today's date//
const clock = document.getElementById('clock');

function updateTime() {
    const now = moment();
    const humanReadable = now.format('LL');

    clock.textContent = "Today's date is: " + humanReadable; 
};

setInterval(updateTime, 1000);
updateTime();

//Change textarea background color based on time
var checkTime = function () {

    //Get Current time
    var currentTime = moment();

    //get all elements with class "textarea"
    var timeBlockElements = $(".textarea");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
};

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);


//when the save button is clicked, text is saved in local storage//
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

$('saveBtn').on('click', function() {
    var tasks = $("textarea").val();
    $("textarea").push();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(localStorage)
});

