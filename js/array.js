let coba = function () {
    return "coba menggunakan function";
}

let buah = ['apel','mangga','jeruk', 10, coba(), (tes = () => "Hasil Return dari arrow function" ), function nama() {
    return "Saya siswa SMK";
}];

console.log(buah);

console.log(buah[1]);

for (let i in buah) {
    console.log(buah[i]);
}
console.log(buah[5]());
console.log(buah[6]());