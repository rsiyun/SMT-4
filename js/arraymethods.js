// push digunakan untuk menambah array di bagian akhir
// unshift digunakan untuk menambah array di bagian awal
// pop digunakan untuk mengekstrasi array di bagian akhir
// shift digunakan untuk mengekstrasi array di bagian awal
//  splice digunakan untuk menghapus array
// slice digunakan untuk mengcopy array 
// concat digunakan untuk menggabungkan array
// forEach digunakan untuk melooping array
let nilai = [
    {nama: "eren",ipa: 90,bahasa: 70,matematika: 80},
    {nama: "reiner",ipa: 80,bahasa: 90,matematika: 85},
    {nama: "bertholdt",ipa: 75,bahasa: 70,matematika: 60},
    {nama: "anie",ipa: 90,bahasa: 80,matematika: 90}
];

let nama = ["eren", "reiner", "bertholdt", "anie"]

let mapel = ["ipa", "bahasa", "matematika"]
// console.log(nama.concat(mapel));

let halo = nama.concat(['ips', 'pkn', 'sejarah']);

// nama.push("grisha","kruger")

// nama.unshift("uri","dina");

// console.log(nilai[2].nama);

// console.log(nama.pop());

// console.log(nama.shift());

// console.log(nama.splice(6,2));

// console.log(nama.slice(4,8));
// nama.forEach(function(a){
//     console.log(a);
// })
// halo.forEach(a => {console.log(a);});

// nilai.filter(function (item) {
//     if (item.ipa > 80) {
//         console.log(item.ipa, item.nama);
//     }
// })
nilai.filter((item)=>(item.ipa > 80 && item.matematika > 80? console.log(item.nama,item.ipa): null));

console.log(nilai);