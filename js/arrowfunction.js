let fungsi = function (nama) {
    console.log("belajar function"+ nama);
}
fungsi("joni");
let contoh = (nama)=>{
    console.log("nama saya "+ nama);
}
contoh("Siyun")

let tambah = function(a,b){
    return a+b;
}
console.log(tambah(2,3));
let plus = (a,b)=>a+b;
console.log(plus(2,3));
let hasil = a => a * 2;
console.log(hasil(4));
let lagi = () => console.log("coba lagi");
lagi();
let belajar = () =>{
    console.log("baris ke 1");
    console.log("baris ke 2");
    console.log("baris ke 3");
    console.log("baris Selanjutnya");
}
belajar();
let nilai = 4;
let uji = nilai < 7 ?()=>(predikat = "gagal"):()=>(predikat = "Lulus");
console.log(uji());