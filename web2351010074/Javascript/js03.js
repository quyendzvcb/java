function Giai(){
    var a=Number(document.getElementById("a").value);
    var b=Number(document.getElementById("b").value);
    var c=Number(document.getElementById("c").value);
    var kq, x;
    if (a==0){
        if (b=0){
            if (c=0)
                kq=" Phương trình vô số nghiệm";
        else 
            kq="Phương trình vô nghiệm";
        }
        else{
            x=-c/b;
            kq=x.toFixed(2);
        }
    }else{
        var delta=b*b-4*a*c;
        if (delta==0){
            x=-b/(2*a);
            kq="Phương trình có nghiệm kép" + x.toFixed(2);
        }else if (delta<0) kq="Phương trình vô nghiệm"
        else{
        var x1=((-b + Math.sqrt(delta)) / (2*a));
        var x2=((-b - Math.sqrt(delta))/ (2*a));
        kq="Phương trình có 2 nghiệm: <br>x1 = "+x1.toFixed(2)+"<br> x2 = " + x2.toFixed(2);
    }
    }
    document.getElementById("kq").innerHTML=kq;
}
function Xoa(){
    document.getElementById("a").value="";
    document.getElementById("b").value="";
    document.getElementById("c").value="";
    document.getElementById("kq").innerText="";

}