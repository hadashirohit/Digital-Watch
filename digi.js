function updateTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var am_or_pm = document.getElementById("session")

    if(hours >=12) //session for AM OR PM
    {
        am_or_pm.innerHTML = "PM";
    }
    else{
        am_or_pm.innerHTML = "AM";
    }

    if(hours > 12) //THIS IS FOR 12 HOURS FORMAT
    {
        hours=hours-12;
    }

    if(hours<10)  // THIS IS FOR ZERO BEFORE SINGLE DIGIT
    {
        hours="0"+hours;
    }

    if(minutes<10)
    {
        minutes="0"+minutes;
    }

    if(seconds<10)
    {
        seconds="0"+seconds;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateTime,1000);