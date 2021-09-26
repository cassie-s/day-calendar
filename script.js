//___ object
let currentTasks = {

}


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

    $(".description").each(function() {
        var currentTime = parseInt(moment().hour());
        var timeBlockElements = parseInt($(this).attr("id").replace("div", ""))
        if (currentTime > timeBlockElements) {
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime === timeBlockElements) {
            $(this).removeClass("future");
            $(this).addClass("present");
        } else if (currentTime < timeBlockElements) {
            $(this).addClass("future");
        }
    })
}

checkTime();


setInterval(function() {
    checkTime();
}, 60000);

var displayTasks = function() {
    currentTasks = JSON.parse(localStorage.getItem("tasks"));
    if (!currentTasks) {
        currentTasks = {
            9:"",
            10:"",
            11:"",
            12:"",
            13:"",
            14:"",
            15:"",
            16:"",
            17:"",
        };
    } else {
        $.each(currentTasks, function(id, text){
            $("#div" + id).text(text);
        })
    }
}

//when the save button is clicked, text is saved in local storage/
let saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(currentTasks));
};

var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

$(".time-block").on('click', ".saveBtn", function() {
    let id = $(this).attr("id").replace("btn", "")
    let text = $("#div" + id)
    let tasktext = text
        .val()
        .trim()
    let divId = $("<div>")
        .attr("id", "div" + id)
        .addClass(text.attr("class"))
        .text(tasktext)
    text.replaceWith(divId)
    currentTasks[id] = tasktext

saveTasks();
    
});

displayTasks();


