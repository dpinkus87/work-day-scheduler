
// COMPLETED the current day is displayed at the top of the calendar
var today = dayjs().format('dddd MMM, YYYY')
$('#currentDay').text("Today is " + today)

//  get current time to note if past / present / future, and display date on header
var timeH = dayjs().format('h');
$('#hour').text(timeH);



// Var to append each time block in function for past / current / future
var checkCurrentH = document.querySelectorAll("set");




// TODO Listener for click even on save button

function saveText(event) {
    event.preventDefault();

    var saveBtn = $(saveBtn)

    saveBtn.on(click, function (event) {
    event.target.parent.child[0].attr("hour-")

    var activityInput = event.target.parent.children().val

})

}
// var saveText = document.querySelector("description").value

    localStorage.setItem("description", saveText)




// TODO each timeblock is color coded to indicate whether it is in the past, present, or future

var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

for (var i = 0; i < 9; i++) {
    if (timeH < hours[i])
    $(textarea(i)).addclass(".past)")
}
