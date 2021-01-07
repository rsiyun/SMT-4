let btn = document.querySelectorAll(".btn-angka > button");
let math = document.querySelectorAll(".btn-mat > button");
let tampil = document.querySelector("#tampil");
let pilihan = null;
let x;
let y;
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () { 
        if (tampil.value == "0") {
            tampil.value = btn[i].innerHTML;
        }else{
            tampil.value += btn[i].innerHTML;
        }
    }
}
math[0].onclick = function(){
    tampil.value ="0";
}
math[1].onclick = function(){
    pilihan = "tambah";
    x=tampil.value;
    tampil.value = "0";
    
}
math[2].onclick = function(){
    pilihan = "kurang";
    x=tampil.value;
    tampil.value = "0"; 
}
math[3].onclick = function(){
    pilihan = "kali";
    x=tampil.value;
    tampil.value=0;
    
}
math[4].onclick = function(){
    pilihan = "bagi";
    x=tampil.value;
    tampil.value=0;
    
}
math[5].onclick=function(){
    y=tampil.value;
    tampil.value = kalkulator(pilihan);
}
function kalkulator(pilihan) {
    if (pilihan != null) {
        switch (pilihan) {
            case "tambah":
                hasil = parseFloat(x)  + parseFloat(y);
                break;
            case "kurang":
                hasil = parseFloat(x)  - parseFloat(y);
                break;
            case "kali":
                hasil = parseFloat(x)  * parseFloat(y);
                break;
            case "bagi":
                hasil = parseFloat(x)  / parseFloat(y);
                break;
        
            default:
                break;
        }
        return hasil;
    }
}