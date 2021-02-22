import {link} from './link.js';
export function post(){
    //menyiapkan data 
    //upload menggunakan post
    let data = {
      pelanggan:'pelanggan Axios3',
      alamat:'jl.axios3',
      telp:'4102'
    }
    link.post('/pelanggan',data).then(res=>{
        alert(res.data.pesan)
    });
}