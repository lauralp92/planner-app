// Displays current day and date
var currentDate = moment(currentDate).format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);

// While loop that starts at 9am and breaks at 5pm
var startTime = moment(09, "HH");
var rowEl = $(".container");

while (startTime.hour() < 18) {
  rowEl.append("<row class='time-row'>" + startTime.format("ha") + "</row>");
  var timeRow = $(".time-row");

  startTime.add(1, "hours");
}

timeRow.append("<textarea class=text-area></textarea>");
timeRow.append("<button class=saveBtn></button>");
