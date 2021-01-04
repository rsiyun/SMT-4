if (true) {
    console.log("Di jalankan jika benar");
}else{
    console.log("Di jalankan jika salah");
}
let nilai = 110;
let standar = 60;
let baik = "LULUS";
let gagal =  "Coba lagi ya gaes";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "Nilai anda salah";

if (nilai<=batasatas && nilai >= batasbawah) {
    if (nilai >= standar) {
        console.log(baik);
    }else{
        console.log(gagal);
    }
}else{
    console.log(peringatan);
}