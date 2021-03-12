import useGet from '../Hook/useGet'
import { useState,useEffect } from 'react';
import {link} from '../Axios/link'
import useDelete from '../Hook/useDelete'
import {useForm} from 'react-hook-form';
const Menu = () => {
    let no = 1
    const {register,handleSubmit,reset,errors,setValue} = useForm();
    const [State] = useGet('./menu')
    const [hapus,pesan,setPesan] = useDelete(`./menu`)
    const [kategori, setKategori] = useState([])
    const [idkategori,setIdkategori] = useState([]);
    const [gambar, setGambar] = useState([])
    const [Pilihan,setPilihan] = useState(true);
    const [idmenu,setIdmenu] = useState(true);
    useEffect(() => {
        let ambil = true;
        async function fetchData() {
            const result = await link.get(`./kategori`)
            if (ambil) {
                setKategori(result.data)
            }
        }
        fetchData()
        return () => {
            ambil = false;
        };
    }, [kategori]);
    function simpan(data) { 
        console.log(data)
        const formData = new FormData();
        formData.append('idkategori',data.idkategori)
        formData.append('menu',data.menu)
        formData.append('gambar',data.gambar[0])
        formData.append('harga',data.harga)
        if (Pilihan) {
            link.post("/menu",formData).then((res) => setPesan(res.data.pesan))
        }else{
            link.post(`/menu/${idmenu}`,formData).then((res)=>setPesan(res.data.pesan))
        }
     }
     async function show(id) {
        const res  = await link.get(`/menu/${id}`)
        setIdmenu(id)
        setIdkategori(res.data[0].idkategori)
        setValue('menu',res.data[0].menu)
        setValue('harga',res.data[0].harga)
        setGambar(<img src={res.data[0].gambar} alt="" width="250" height="250" />)
        setPilihan(false)
     }
    return (
        <div>
            <div className="row">
                <h2>Data menu</h2>
            </div>
            <div className="row">
                <p>{pesan}</p>
            </div>
            <div className="row">
                <div className="col-4">
                    <form onSubmit={handleSubmit(simpan)}>
                        <div className="mb-3">
                            <label htmlFor="kategori" className="form-label">Kategori</label>
                            <select name="idkategori" ref={register} className="form-control">
                                {
                                    kategori.map((val,index)=> val.idkategori == idkategori 
                                    ? <option value={val.idkategori} selected key={index} >{val.kategori}</option> :
                                    <option value={val.idkategori} key={index} >{val.kategori}</option>
                                    // (
                                    //     <option value={val.idkategori} key={index} >{val.kategori}</option>
                                    // )
                                    )
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                                {errors.kategori && "Kategori harus diisi!"}
                            <label htmlFor="exampleFormControlInput1" className="form-label">Menu</label>
                            <input type="text" className="form-control" name="menu" placeholder="menu" ref={register({required:true})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Harga</label>
                            <input type="text" className="form-control" name="harga" placeholder="harga" ref={register} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Gambar</label>
                            <input type="file" className="form-control" name="gambar" placeholder="gambar" multiple ref={register} />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="btn btn-primary" name="tombol"  />
                        </div>
                    </form>
                </div>
                <div className="col-4">
                    {gambar}
                </div>
            </div>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                            <tr>
                                <th>No</th>
                                <th>Kategori</th>
                                <th>Menu</th>
                                <th>Gambar</th>
                                <th>Harga</th>
                                <th>Hapus</th>
                                <th>update</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            
                            State.map((val,index)=>(
                            <tr key={index}>
                                <td>{no++}</td>
                                <td>{val.kategori}</td>
                                <td>{val.menu}</td>
                                <td><img src={val.gambar} alt="" height="100"/></td>
                                <td>{val.harga}</td>
                                <td>
                                    <button onClick={()=>hapus(val.idmenu)} className="btn btn-danger">Hapus</button>
                                </td>
                                <td>
                                <button onClick={()=>show(val.idmenu)} className="btn btn-primary">Update</button>
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

export default Menu;
