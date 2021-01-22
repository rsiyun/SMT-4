let tblmenu =[
    {
        idmenu:1,
        idkategori:1,
        menu:"nasi bakar",
        gambar:"nasibakar.jpg",
        harga:3000
    },
    {
        idmenu:2,
        idkategori:2,
        menu:"Melon",
        gambar:"Melon.jpg",
        harga:12000
    },
    {
        idmenu:3,
        idkategori:3,
        menu:"pisang goreng",
        gambar:"pisanggoreng.jpg",
        harga:1000
    },
    {
        idmenu:4,
        idkategori:3,
        menu:"risoles",
        gambar:"risoles.jpg",
        harga:1000
    },
    {
        idmenu:5,
        idkategori:2,
        menu:"Semangka",
        gambar:"semangk.jpg",
        harga:12000
    }
]
let result = tblmenu.map((a)=>{
    return(
        `<div class="produk-content">
        <div class="image">
          <img src="images/${a.gambar}" alt="ini hp" />
        </div>
        <div class="title">
          <h2>${a.menu}</h2>
        </div>
        <div class="buy">
          <div class="harga">Rp ${a.harga}</div>
        </div>
        <div class="btn-beli">
                <button data-idmenu=${a.idmenu}>Beli</button>
        </div>
      </div>
      
      `
      
    );
});

let isi = document.querySelector(".produk")

isi.innerHTML=result
let cart = [];
let tombol = document.querySelectorAll(".btn-beli > button")
for (let i = 0; i < tombol.length; i++) {
tombol[i].onclick=function () {
        tblmenu.filter(function (a) {
          if (a.idmenu == tombol[i].dataset["idmenu"]) {
            cart.push(a);
            console.log(cart[cart.length-1].menu);
            console.log(cart);
          }
        })
}}

