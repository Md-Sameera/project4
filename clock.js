function clock()
{
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");

    var time=new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
setInterval(clock,1000)

function setAlarm()
{

    var x=document.getElementById('wu').value;
    var y = document.getElementById("lun").value;
    var z = document.getElementById("np").value;
    var j = document.getElementById("n8").value;

    var hour=new Date().getHours();

    if(x==hour){
        document.getElementById("image").style.backgroundImage="url(./morning.svg)"
        document.getElementById("textb").innerText="GRAB SOME HEALTHY BREAKFAST!!."
        document.getElementById("texta").innerText="Good Morning !! Wake Up  !!"
        
    }
    if(hour==y){
        document.getElementById("image").style.backgroundImage="url(./lunch.svg)"
        document.getElementById("textb").innerText="LETS HAVE SOME LUNCH  !!."
        document.getElementById("texta").innerText="Good Afternoon !! Take some sleep"
       
    }
    if(z==hour){
        document.getElementById("image").style.backgroundImage="url(./cup.png)"
        document.getElementById("textb").innerText="STOP YAWNING , ITS JUST AFTERNOON ,GET SOME TEA  !!."
        document.getElementById("texta").innerText="Good Evening !!"
        
    }
    if(j==hour){
        document.getElementById("image").style.backgroundImage="url(./gdn8.svg)"
        document.getElementById("textb").innerText="CLOSE YOUR EYES AND GO TO SLEEP !!."
        document.getElementById("texta").innerText="Good Night"
        
    }
    getOption()
}
setAlarm()

function getOption() {

    var e = document.getElementById("wu");
    var text1 = e.options[e.selectedIndex].text;
    
    var f = document.getElementById("lun");
    var text2 = f.options[f.selectedIndex].text;
    
    var g = document.getElementById("np");
    var text3 = g.options[g.selectedIndex].text;

    var h = document.getElementById("n8");
    var text4 = h.options[h.selectedIndex].text;

    var idExist = document.getElementById("helo");
    if(idExist){
        idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3} <br> Night Time:${text4}`;
    }
}
