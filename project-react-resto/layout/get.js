import {link} from './link.js'

export function get() { 
    link.get('/pelanggan').then(res=>{
        let tampil = `<table class="table table-bordered">
            <tr>
                <th>Idpelanggan</th>
                <th>Pelanggan</th>
                <th>telp</th>
            </tr>
            `;
        res.data.forEach(element => {
            tampil+= 
            `<tr>
                <td>${element.idpelanggan}</td>
                <td>${element.pelanggan}</td>
                <td>${element.telp}</td>
            </tr>`;
        });
        tampil+=`</table>`
        document.getElementById('out').innerHTML=tampil
    })
}