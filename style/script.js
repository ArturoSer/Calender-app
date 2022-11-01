$(document).ready(function () {
    timeCheck();
    var updater = setInterval(timeCheck, 15000);

    var currentDay = moment().format("MMMM D, YYYY, h:mm a");
    var currentHour = moment().format("HH");

    $("time-8 .description").val(localStorage.getItem("time-8"));
    $("time-9 .description").val(localStorage.getItem("time-9"));
    $("time-10 .description").val(localStorage.getItem("time-10"));
    $("time-11 .description").val(localStorage.getItem("time-11"));
    $("time-12 .description").val(localStorage.getItem("time-12"));
    $("time-1 .description").val(localStorage.getItem("time-1"));
    $("time-2 .description").val(localStorage.getItem("time-2"));
    $("time-3 .description").val(localStorage.getItem("time-3"));
    $("time-4 .description").val(localStorage.getItem("time-4"));
    $("time-5 .description").val(localStorage.getItem("time-5"));
    $("time-6 .description").val(localStorage.getItem("time-6"));
   
   
   
    $(".saveBtn").on("click", (function() {
        var time = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();

        localStorage.setItem(time, description);
    }));

    function timeCheck() {
        var currentHour = moment().hours();

        $(".time-block").each(function () {
            var previousHour = parseInt($(this).attr("id").split('-')[1]);
            
            if (currentHour === previousHour) {
                $(this).addClass("present");
            } else if (currentHour > previousHour) {
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            }
        });
    };
})




