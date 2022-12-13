// Displays current day and date
var currentDate = moment(currentDate).format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);

// Checks current time
var displayTime = $("#currentTime").text(currentTime);
var currentTime = moment(currentTime).format("h:mm a");

// While loop that starts at 9am and breaks at 5pm
var startTime = moment(09, "HH");
var rowEl = $(".container");

while (startTime.hour() < 18) {
  rowEl.append("<row class='time-row'>" + startTime.format("ha") + "</row>");
  var timeRow = $(".time-row");

  startTime.add(1, "hours");
}

// appends to each div
timeRow.append("<textarea class=text-area></textarea>");
timeRow.append("<button class=saveBtn></button>");

//html elements
var textArea = $(".textarea");
var saveBtn = $(".saveBtn");

// function to loop textarea

var idEl = timeRow;
var storeId = [];

$("textarea").each(function () {
  var idText = $(this).attr("id");

  storeId.push(idText);
});

for (i = 0; i < storeId.length; i++) {
  var idText = $(`#${storeId[i]}`);

  if (storeId[i] == currentTime) {
    idText.addClass("present");
  } else if (storeId[i] < currentTime) {
    idText.addClass("past");
  } else if (storeId > currentTime) {
    idText.addClass("future");
  }
}

// function to save to local storage
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("text-area", JSON.stringify(""));
});
