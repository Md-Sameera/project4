function clock(){
    var hour=document.getElementById("hr");
    var minute=document.getElementById("min");
    var second=document.getElementById("sec");
    var ampm=document.getElementById("ap");

    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var apm="AM";

    if (hrs==0) {
        hrs=12;
    }
    if (hrs>12) {
        hrs=hrs-12;
        apm="PM";
    }
    if (hrs<10) {
        hrs="0"+hrs;
    }
    if (mins<10) {
        mins="0"+mins;
    }
    if (secs<10) {
        secs="0"+secs;
    }
    hour.innerText = hrs;
    minute.innerText=mins;
    second.innerText=secs;
    ampm.innerText=apm;
}
setInterval(clock,1000)


function settime(){
    var ab=document.getElementById("wu").value;
    // var c1=ab;
    // document.getElementById("out").innerText=c1;
    var cd=document.getElementById("lun").value;
    // var c2=cd;
    // document.getElementById("outp").innerText=c2;
    var ef=document.getElementById("np").value;
    // var c3=ef;
    // document.getElementById("outpu").innerText=c3;
    var gh=document.getElementById("n8").value;
    // var c4=gh;
    // document.getElementById("output").innerText=c4;
        
    let hr=new Date().getHours();
    if(ab==hr){
        // document.getElementById("image").src="morning.svg";
        document.getElementById("box7").innerText='GRAB SOME HEALTHY BREAKFAST!!.';
        document.getElementById("box3").innerText="Good Morning !! Wake Up  !!";
        
    }
    if(cd==hr){
        // document.getElementById("image").src="lunch.svg";
        document.getElementById("box7").innerText='LETS HAVE SOME LUNCH  !!.';
        document.getElementById("box3").innerText="Good Afternoon Take some sleep";
       
    }
    if(ef==hr){
        // document.getElementById("image").src="nap.png";
        document.getElementById("box7").innerText='STOP YAWNING , ITS JUST AFTERNOON ,GET SOME TEA  !!.';
        document.getElementById("box3").innerText="Good Evening";
        
    }
    if(gh==hr){
        // document.getElementById("image").src="n8time.jpg";
        document.getElementById("box7").innerText='CLOSE YOUR EYES AND GO TO SLEEP !!.';
        document.getElementById("box3").innerText="Good Night";
        
    }

}
