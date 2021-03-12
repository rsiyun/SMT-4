import { useState } from 'react';
import {link} from '../Axios/link'

const useDelete = (url) => {
    const [pesan,setPesan] = useState([]);
    async function hapus(id){
        if(window.confirm('yakin anda ingin menghapus data ini ?')){
            const res = await link.delete(`/${url}/${id}`)
            setPesan(res.data.pesan);
        }
    }
    return [hapus,pesan,setPesan];
}

export default useDelete;

