import {link} from './link.js';
export function update(){
    let id = 5;
    let data = {
       pelanggan: 'dirubah',
       alamat:'jl.ubahpelanggan',
       telp:'(974) 204-6869' 
    }
    link.put(`/pelanggan/${id}`,data).then(res=>{
        alert(res.data.pesan)
    })
}