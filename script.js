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
