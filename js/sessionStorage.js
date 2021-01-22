console.log(localStorage.getItem('belajar'));

sessionStorage.setItem('belajar', 'mencoba belajar js')
console.log(sessionStorage.getItem('belajar'));
// sessionStorage.removeItem('belajar')
sessionStorage.setItem('panjang', 500)
// sessionStorage.clear();
console.log(sessionStorage.length);

console.log(sessionStorage.key(0));