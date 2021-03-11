var time = new Date().getHours();
var wakeup = 9;
var noon = 12;
var lunch = 12;
var partyTime = 17;
var napTime = 15;
var evening = 18;

var updateClock = function(){
var message;
var image ="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

var timeEventJS = document.getElementById("timeEvent");
var lolcatImage = document.getElementById('lolcat'); 
 
if (time == wakeup)
{ message = "RISE AND SHINE!";
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg"; }

else if (time == lunch)
{ message = "GET SOME GRUB";
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg"; }

else if (time == napTime)
{ message = "DID SOMEONE SAY SIESTA?";
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg"; }

else if (time == partyTime)
{ message = "MISSION: BE THE LIFE OF THE PARTY";
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";}

else if (time < noon)
{ message = "Good morning!";
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"; }

else if (time > evening)
{ message = "Good evening";
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"; }

else
{ message = "Good afternoon";
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"; }
 
timeEventJS.innerText = message;
lolcatImage.src = image;
};

 // CREATING THE CLOCK
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};
showCurrentTime(); 
updateClock();
var oneSecond = 1000;
 
setInterval( updateClock, oneSecond);

// make Party Time button work
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	    partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
     partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   }
};
// Set up for the Dropdown Time selectors
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");

var wakeUp = function()
{wakeUp = wakeUpTimeSelector.value;};
var noon = function()
{noon = lunchTimeSelector.value;};
var napTime = function()
{napTime = napTimeSelector.value;};

wakeUpTimeSelector.addEventListener('change', wakeUp);
lunchTimeSelector.addEventListener('change', noon);
napTimeSelector.addEventListener('change', napTime);

