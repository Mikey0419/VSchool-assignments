$(document).ready(function() {
    var ipAddress;
    var todayDate;
    const cookiesEnabled = navigator.cookieEnabled;

    //object declaration
    let projData = {
        cookies: cookiesEnabled,
        language: navigator.language,
        user: "Michael Hardin",
        projName: "Capstone Project",
    };

    //array declaration
    let screenData = new Array("Width: "+screen.width, "Height: "+screen.height, "Color depth: "+screen.colorDepth, "Pixel depth: "+screen.pixelDepth);

    var myEvent = document.getElementById('initiate');
    myEvent.addEventListener("click", function () {

        $.getJSON("https://api.ipify.org?format=json", function (data) {
        ipAddress = data.ip;
        var d = new Date();
        todayDate = d.toDateString();
        console.clear();
        console.log("ipAddress: "+data.ip+", Date: "+todayDate);

        //populate the cols with info
        $("#col1").html("<h1><code>Random Info</code></h1><br><span class=text>IP address: </span>"+ipAddress+"<br><span class=text>Date: </span>"+todayDate+"<br>");
        $("#col2").html("<h1><code>Array data</code></h1>");
        $("#col3").html("<h1><code>Project Info</code></h1>");
        
        for (i=0; i<screenData.length; i++) {
            //$("#col2").html("<h1><code>IP address: </code>"+ipAddress+"<br><code>Date: </code>"+todayDate+"</h1>");
            document.getElementById('col2').innerHTML += "<span class=text>screenData[<span class=indices>"+i+"</span>] = </span>" + screenData[i] + "<br>";
        } 

        for (const prop in projData) {
            document.getElementById('col3').innerHTML += "<span class=text>projData.<span class=indices>" + prop + "</span> = </span>" + `${projData[prop]}` + "<br>";//navigatorData.<span class=indices>user</span> = </span>" + navigatorData.user + "<br>");
        }
    })

        function iconSwitch(a, b) {
            var x = document.getElementById(a);
            var y = document.getElementById(b);
            x.style.class = 'noshow';
            y.style.class = 'show';

            alert(x);
        }

        if ( $("#mainDIV").css("visibility") == "visible" ) {
            $("#mainDIV").attr("class", "noshow");
            $("#btnIcon").attr("name", "eye");
            document.getElementById('spanText').innerHTML = "&nbsp;&nbsp;Show";
        }
        else {
            $("#mainDIV").attr("class", "container-fluid text-left show");
            $("#btnIcon").attr("name", "eye-off");
            document.getElementById('spanText').innerHTML = "&nbsp;&nbsp;Hide";
        }
    });
});