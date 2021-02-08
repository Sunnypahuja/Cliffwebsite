//Create a time data function
function currentTime() {
  //Declare variables
  var d = new Date(); //get Current date
  var hr = d.getHours(); //get current hours
  var min = d.getMinutes(); // get current minute
  var sec = d.getSeconds(); // get current second
  var ampm; //declare empty variable to store AM or PM
  var utchr = d.getUTCHours(); //get current Greenwich Mean Time GMT
  var timeDiff; //To store time difference between GMT hour and local Hour
  var adjTimeDiff; //To store time diffrence converted to positive number
  var timeZone; //To store the 4 time zones (PT,MT,CT,ET)

  //add 0 to single digit for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }
  //Add 0 to single digit for minuets
  if (min < 10) {
    min = "0" + min;
  }

  // determine AM or PM setting
  if (hr == 12) {
    ampm = "PM"; //Set to PM
  } else if (hr > 12) {
    hr -= 12; //deduct 12 from hours greater than 12 (military time)
    ampm = "PM"; //set to PM
  } else {
    ampm = "AM"; //Set to AM
  }
  adjTimeDiff = utchr - hr;

  if (utchr > 12) {
    utchr -= 12;
  }
  if (adjTimeDiff < 0) {
    timeDiff = adjTimeDiff * -1;
  } else {
    timeDiff = adjTimeDiff;
  }

  if (timeDiff = 8) {
    timeZone = "PT";
  } else if (timeDiff = 7) {
    timeZone = "MT";
  } else if (timeDiff = 6) {
    timeZone = "CT";
  } else if (timeDiff = 5) {
    timeZone = "ET";
  } else {
    timeZone = "GMT";
  }
  //Assemble time format to display
  var time = hr + ":" + min + ":" + sec + " " + ampm;
  //display current local time and time zone on HTML elements
  document.getElementById("clock").innerText = time; //adding time
  document.getElementById("zone").innerText = timeZone;
}
//Initial run of time data function

currentTime();
//Run time data function every 1 second
setInterval(currentTime, 1000); //second timer

