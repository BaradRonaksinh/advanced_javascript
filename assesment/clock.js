
function clock() {
    // day
    let dateFun = new Date();

    // lets find days
    let day = dateFun.getDay();
    let month = dateFun.getMonth();

    // days like sunday , monday..etc
    // and Months
    let Wday = ["sunday", "Monday", "Tuesday", "Wenesday", "Thusday", "Friday", "Saturday"];
    let months = ["January", "Fabuary", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"]
    // get week day...
    let weekDay = Wday[day];
    document.getElementById("Iday").innerHTML = weekDay;

    // get a month
    let mnth = months[month];
    document.getElementById("month").innerHTML = mnth;

    // get date
    let today = dateFun.getDate();
    document.getElementById("date").innerHTML = today;

    // get year
    let yrs = dateFun.getFullYear();
    document.getElementById("yr").innerHTML = yrs;

    // ***************************************************************

    // time
    let hr = dateFun.getHours();
    document.getElementById("hour").innerHTML = hr;

    let min = dateFun.getMinutes();

    if (min < 10) {
        document.getElementById("min").innerHTML = "0" + min;
    } else {
        document.getElementById("min").innerHTML = min;
    }

    let sec = dateFun.getSeconds();
    if (sec < 10) {
        document.getElementById("sec").innerHTML = "0" + sec;
    } else {
        document.getElementById("sec").innerHTML = sec;
    }

    // AMPM
    let ampm = hr >= 12 ? "PM" : "AM";

    hr = hr % 12;
    hr = hr ? hr : 12

    document.getElementById("ampm").innerHTML = ampm;
}


setInterval(clock, 1000);
