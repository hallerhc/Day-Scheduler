$(document).ready(function(){

var timeDisplayEl = $('#time-display');

function displayTime() {
    rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);

  let currentHour = moment() .format("HH");

  $(".time-div").each(function () {
       timeDiv = $(this).attr("id").split("-") [1];

      if(currentHour == timeDiv) {
          $(this).addClass("future");
      } else if (currentHour < timeDiv) {
          $(this).removeClass("present");
          $(this).addClass("past");
      } else if (currentHour > timeDiv) {
          $(this).addClass("past");
      }
  });

  $(".saveBtn").click(function (event) {
      event.preventDefault();
      value = $(this).siblings(".time-block").val();
      time = $(this).parent().attr("id").split("-") [1];
      localStorage.setItem(time, value);
  });

  $("#hour-08 .time-block").val(localStorage.getItem("08"));
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));

});
