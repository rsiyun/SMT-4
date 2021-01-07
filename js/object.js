const objek = {
    nama: "Saya siswa Smk",
    telp: 081235265829,
    buah: ['apel', 'jeruk', 'semangka'],
    coba: function () {
        return "coba function dalam objek"
    },
    bolean: true,
    "angka": 123,
}
console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[0]);
console.log(objek.bolean);
console.log(objek.coba());
console.log(objek["angka"]);