$(document).ready(function () {
    function showTime() {
        var date = new Date();

        var hours = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        var session = "AM";


        if(hours==0) {
            hours = 12;
        }

        if(hours >= 12) {
            session = "PM";
        }

        if(hours > 12) {
            hours = hours - 12;
        }

        hours = hours < 10 ? "0" + hours : hours;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;

            $("#hours").text(hours);
            $("#minutes").text(min);
            $("#seconds").text(sec);
            $("#period").text(session);

            setTimeout(showTime, 1000);

            if(hours <= 5) {
                $("body").css({"background-color": "#02012E", "color": "#faf8f8"});
            }

            if(hours > 5) {
                $("body").animate({
                    backgroundColor: '#019B8E',
                    color: '#faf8f8'
                }, 'slow' ).css({"background-color": "#019B8E", "color": "#faf8f8"});
            }

            if(hours >= 6, session = "PM") {
                $("body").animate({
                    backgroundColor: "#02012E",
                    color: '#faf8f8'
                }, 'slow' ).$("body").css({"background-color": "#02012E", "color": "#faf8f8"});
            }
    }

    showTime()
})