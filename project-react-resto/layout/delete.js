import {link} from './link.js';
export function hapus(){
    let id = 110;
    link.delete(`/pelanggan/${id}`).then(res=>{
        alert(res.data.pesan)
    });
}