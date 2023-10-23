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