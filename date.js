function digicl(){
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    var am_pm="AM"
    // console.log(hh,mm,ss,dt,mo,yy,day)


    if(hh>12){
        am_pm="PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0){
        hh=12;
    }
    if(mo==0){
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="Jul"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="OCt"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else 
    {
        mo="Dec"
    }
    switch(day)
    {
        case 0: day="Sunday"
        document.body.style.backgroundImage="url(../digitalclock/gif2harry.gif)"
        break;
        case 1: day="Monday"
        document.body.style.backgroundImage="url(../digitalclock/gif2harry.gif)"
        break;
        case 2: day="Tuesday"
        document.body.style.backgroundImage="url(../digitalclock/gif2harry.gif)"
        break;
        case 3: day="Wednesday"
        document.body.style.backgroundImage="url(../digitalclock/gif2harry.gif)"
        break;
        case 4: day="Thursday"
        document.body.style.backgroundImage="url(../digitalclock/gif2harry.gif)"
        break;
        case 5: day="Friday"
        document.body.style.backgroundImage="url(../digitalclock/gif2harry.gif)"
        break;
        case 6: day="Saturday"
        document.body.style.backgroundImage="url(../digitalclock/gif2harry.gif)"
        break;
    }
    if(mm>=0&&mm<10){
        mm=`0${mm}`
    }
    if(ss>=0&&ss<10){
        ss=`0${ss}`
    }
    document.getElementById("Date").innerHTML=`${dt}/${mo}/${yy}`
    document.getElementById("Time").innerHTML=`${hh}:${mm} ${am_pm}`
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;
    setTimeout(digicl,1000)
}
digicl()
