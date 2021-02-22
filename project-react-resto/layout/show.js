import {link} from './link.js';
export function show(){
    let id = 1;
    link.get(`/pelanggan/${id}`).then(res=>{
        let tampil = `<table class="table table-bordered">
            <tr>
                <th>Idpelanggan</th>
                <th>Pelanggan</th>
                <th>Alamat</th>
                <th>Telp</th>
            </tr>
            `;
        res.data.forEach(element => {
            tampil+= 
            `<tr>
                <td>${element.idpelanggan}</td>
                <td>${element.pelanggan}</td>
                <td>${element.alamat}</td>
                <td>${element.telp}</td>
            </tr>`;
        });
        tampil+=`</table>`
        document.getElementById('out').innerHTML=tampil
    })

}