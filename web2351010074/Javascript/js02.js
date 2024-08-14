function Tinh_ngay(month,year){
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 11:
        case 9:
            return 30;
        case 2:
            if (isNhuan(year))
                return 29;
            return 28;
            default: 
           return 0;
    }
}
document.getElementById("tinhNgay").innerHTML = "Tháng "+ thang + " năm " + nam + " có " + Tinh_ngay(thang, nam) + "<br>";
function isNhuan(year){
    return (year%400==0||(year%4&&year%100!=0))
}
function Tinh_date(){
    var date_now=new Date();
    var y=date_now.getFullYear();
    var m=date_now.getMonth()+1;
    var d=date_now.getDate();
    var thu=date_now.getDay()+1;
    document.getElementById("now").innerHTML="Hôm nay, "+  (thu=1?" Chủ nhật ":"Thứ "+thu) + "ngày " + (d<10?"0"+d:d)+"/"+(m<10?"0"+m:m)+"/"+y;
    setInterval(showTime,1000);
}
function showTime(){
    var date_now=new Date();
    var h=date_now.getHours();
    var m=date_now.getMinutes();
    var s=date_now.getSeconds();
    document.getElementById("time").innerHTML=h+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
}