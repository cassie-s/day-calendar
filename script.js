//conditional colors

// var auditTask = function(taskEl) {
//     // get date from task element
//     var date = $(taskEl)
//       .find("span")
//       .text()
//       .trim();
  
//     // convert to moment object at 5:00pm
//     var time = moment(date, "L").set("hour", 17);
  
//     // remove any old classes from element
//     $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
  
//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//       $(taskEl).addClass("list-group-item-danger");
//     } else if (Math.abs(moment().diff(time, "days")) <= 2) {
//       $(taskEl).addClass("list-group-item-warning");
//     }
//   };

var day = document.getElementById('currentDay');
day.setAttribute(moment().day());