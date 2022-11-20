$(jQuery).ready(function () {


            // COMPLETED the current day is displayed at the top of the calendar
            var today = dayjs().format('dddd MMM D, YYYY')
            $('#currentDay').text("Today is " + today)


            // COMPLETED Listener for click event on save button

            $(".saveBtn").click(function () {
                var parent = $(this).parents().eq(0)
                var clickedHour = parent.attr('id')

                clickedHour = clickedHour.slice(5)
                var slicedHour = clickedHour.slice(0, -2)


                var textDescription = parent.find(".description").val();

                   // get current time to note if past / present / future

                   var currentH = dayjs().format('HH');
                   $('#hour').text(currentH);
   
                   $(".time-block").each(function () {
                
                       if (currentH === slicedHour) {
                           $(this).addclass("present");
                       } else if (currentH < slicedHour) {
                           $(this).addclass("future");
                       } else {
                           $(this).addclass("past");
                       }
                   })

                function saveText(event) {
                    event.preventDefault();
                }

                // COMPLETED save to local storage
                localStorage.setItem("textDescription", textDescription)

            })

})
