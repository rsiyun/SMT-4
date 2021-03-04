import React, { useState,useEffect } from 'react';
import {link} from '../Axios/link'
import {useForm} from 'react-hook-form';

const Kategori = () => {
    const [State, setState] = useState([]);
    const {register,handleSubmit,reset,errors,setValue} = useForm();
    const [pesan,setPesan] = useState([]);
    const [idkategori,setIdkategori] = useState('');
    const [Pilihan,setPilihan] = useState(true);
    async function fetchData() {
        const result = await link.get('/kategori')
        // console.log(result);
        setState(result.data)
    }
    function simpan(data) {
        console.log(data)
        if (Pilihan) {
            link.post("/kategori",data).then((res) => setPesan(res.data.pesan))
        }else{
            link.put(`/kategori/${idkategori}`,data).then((res)=>setPesan(res.data.pesan))
            setPilihan(true);
        }
        reset();
    }
   async function hapus(id){
        if(window.confirm('yakin anda ingin menghapus data ini ?')){
            const res = await link.delete(`/kategori/${id}`)
            setPesan(res.data.pesan);
        }
    }
    async function show(id){
        const res  = await link.get(`/kategori/${id}`)
        console.log(res.data[0].kategori);
        setValue('kategori',res.data[0].kategori)
        setValue('keterangan',res.data[0].keterangan)
        setIdkategori(res.data[0].idkategori)
        setPilihan(false);
    }
    fetchData()
    useEffect(() => {
        fetchData()
    },[State])
    let no = 1;
    return (
    <div>
        <div className="row">
            <h2>Data Kategori</h2>
        </div>
        <div className="row">
            <p>{pesan}</p>
        </div>
        <div className="row">
            <div className="col-4">
                <form onSubmit={handleSubmit(simpan)}>
                    <div className="mb-3">
                            {errors.kategori && "Kategori harus diisi!"}
                        <label htmlFor="exampleFormControlInput1" className="form-label">Kategori</label>
                        <input type="text" className="form-control" name="kategori" placeholder="kategori" ref={register({required:true})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Keterangan</label>
                        <input type="text" className="form-control" name="keterangan" placeholder="keterangan" ref={register} />
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-primary" name="tombol"  />
                    </div>
                </form>
            </div>
        </div>
        <div className="row">
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>No</th>
                <th scope="col">Kategori</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Aksi</th>    
            </tr>
            </thead>
            <tbody>
            {
                State.map((val,index)=>(
                <tr key={index}>
                    <td>{no++}</td>
                    <td>{val.kategori}</td>
                    <td>{val.keterangan}</td>
                    <td className="text-center">
                        <button onClick={()=>hapus(val.idkategori)} className="btn btn-danger">Hapus</button>
                        <button onClick={()=>show(val.idkategori)} className="btn btn-primary ml-4">Update</button>
                    </td>
                </tr>
                ))
            }
            </tbody>
        </table>
        </div>
        
    </div>
    );
}

export default Kategori;
