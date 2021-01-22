document.querySelector("#klik").addEventListener("click",tampil);

function tampil() {
    let url = "js/tblmenu.json";
    fetch(url).then(function (res) {
      return res.json();
  }).then(function (data) {
      let output = `<h1>Data Menu</h1><table><tr>
      <th>
        Menu
      </th>
      <th>
        Harga
      </th>
      <th>
        bumbu
      </th>
      `;
      data.forEach(element => {
          output += `
            <tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.bumbu[0]}</td>
            <tr>
          `;
      });
      output += "</tr></table>"
      document.querySelector("#isi").innerHTML= output;
  })
}

// let tblmenu = [{
//     "idmenu":1,
//     "idkategori":1,
//     "menu":"nasi goreng",
//     "bumbu": ["bawang putih", "bawang merah", "saos"],
//     "harga": 10000,
//     "stok": true,
//     "keterangan": null
// },
// {
//     "idmenu":2,
//     "idkategori":1,
//     "menu":"nasi bakar",
//     "harga": 7000,
//     "bumbu": ["bawang putih", "bawang merah", "kemangi"],
//     "stok": true,
//     "keterangan": null
// }
// ]
// console.log(tblmenu);