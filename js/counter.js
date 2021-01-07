let a=0;
naik.onclick=function(){
    a++
    document.querySelector("h1").innerHTML=a;
}
turun.onclick=function(){
    if (a>0) {
        a--;
        document.querySelector("h1").innerHTML=a;
    }
}
hapus.onclick=function(){
    a = 0;
    document.querySelector("h1").innerHTML=a;
}
// asnyc untuk melompati syntax java script dan menjalankan seluruh syntax html terlebih dahulu