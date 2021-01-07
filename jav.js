//Moment.js used for the date. https://www.youtube.com/watch?v=n80RRNS1k64
var todayIs = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDate").html(todayIs);

    $(document).ready(function () {
    // saveBtn
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //Local storage
        localStorage.setItem(time, text);
    })


    function timeTracker() {
        //get current number of hours.
        var currentTime = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local browser storage. https://www.youtube.com/watch?v=Al3AuQQCxVs
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour1"));
    $("#hour13 .description").val(localStorage.getItem("hour2"));
    $("#hour14 .description").val(localStorage.getItem("hour3"));
    $("#hour15 .description").val(localStorage.getItem("hour4"));
    $("#hour16 .description").val(localStorage.getItem("hour5"));
    $("#hour17 .description").val(localStorage.getItem("hour6"));
    $("#hour18 .description").val(localStorage.getItem("hour7"));

    timeTracker();

    })
    