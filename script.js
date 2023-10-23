var startHour = 9;
var endHour = 17;
var currentHour = moment().hour();
var currentDay = moment().format("dddd, MMMM Do YYYY");
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");
var textArea = $(".description");
var timeBlockHour = $(".hour");
var timeBlockText = $(".description");
var timeBlockSave = $(".saveBtn");
var timeBlockRow = $(".row");
var timeBlockContainer = $(".container");

// Display current day
$("#currentDay").text(currentDay);

// Display time blocks

for (var i = startHour; i <= endHour; i++) {
  var row = $("<div>").addClass("row time-block");
  var hour = $("<div>").addClass("hour col-1").text(moment(i, "H").format("hA"));
  var text = $("<textarea>").addClass("description col-10");
  var save = $("<button>").addClass("saveBtn col-1").html("<i class='fas fa-save'></i>");

  row.append(hour, text, save);
  timeBlockContainer.append(row);
}

// Color code time blocks
timeBlock.each(function () {
  var hour = parseInt($(this).find(".hour").text());
  if (hour < currentHour) {
    $(this).find(".description").addClass("past");
  } else if (hour > currentHour) {
    $(this).find(".description").addClass("future");
  } else {
    $(this).find(".description").addClass("present");
  }
});

// Save text to local storage
saveBtn.on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).siblings(".hour").text();
  localStorage.setItem(time, text);
});

// Display text from local storage
timeBlock.each(function () {
  var hour = $(this).find(".hour").text();
  var text = localStorage.getItem(hour);
  $(this).find(".description").val(text);
});

// Clear local storage
$("#clearBtn").on("click", function () {
  localStorage.clear();
  timeBlockText.val("");
});

// Refresh page every hour
setInterval(function () {
  if (moment().minute() === 0) {
    location.reload();
  }
}, 60000);