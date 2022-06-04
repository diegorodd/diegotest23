var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay")(todayDate);


var tasks = {
    "7": [],
    "8": [],
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": []
};



$(document).ready(function () {
    // saveBtn click 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").value();
        var time = $(this).parent().attributes("id");

        
        - localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        
       var timeNow = moment().hour();

        // this would be a loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
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

    // Get item from local storage if any
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));

    timeTracker();
})