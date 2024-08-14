
function Tinhtuoi(){
    var names  = document.getElementById("name").value;
    var namSinh = Number(document.getElementById("birth").value);
    var date = new Date();
    if(names ==""){
        console.log("cc");
        alert("Please enter your name!");
        return false;
    }
    if(isNaN(namSinh) || namSinh==""){
       alert("Eroll!");
        return false;
    }
    var tuoi = date.getFullYear() - namSinh;
    document.getElementById("kq").innerHTML = "Chào bạn " + names + "!<br> Tuổi của ban là: " + tuoi;
}

