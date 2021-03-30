import React,{ useState } from 'react';
import useGet from '../Hook/useGet';
import {useForm} from 'react-hook-form';
const Detail = () => {
    const {register,handleSubmit,setValue,errors} = useForm();
    let today = new Date().toISOString().slice(0,10);
    const [awal,setAwal]=useState('2021-03-12');
    const [akhir,setAkhir]=useState(today);
    const [State] = useGet(`/detail/${awal}/${akhir}`);
    let no = 1;
    function cari(data) {
        setAwal(data.tawal)
        setAkhir(data.takhir)
        console.log(awal+akhir);
    }
    return (
        <div>
            <div className="row">
                <div>
                    <h2>Detail Penjualan</h2>
                </div>
            </div>
            <div className="row">
                <form onSubmit={handleSubmit(cari)}>
                    {/* <div className="mb-3">
                        <label htmlFor="tawal" className="form-label">Tanggal Awal</label>
                        <input type="date" className="form-control" name="tawal" placeholder="Tanggal awal" ref={register()} />
                    </div> */}
                    <div className="row mb-3">
                        <div className="col-auto">
                            <label htmlFor="tawal" className="form-label">Tanggal Awal</label>
                            <input type="Date" data-provide="datepicker" name="tawal" className="form-control" id="tawal" ref={register} />
                        </div>
                        <div className="col-auto ml-3">
                            <label htmlFor="takhir" className="form-label">Tanggal Akhir</label>
                            <input type="Date" data-provide="datepicker" name="takhir" className="form-control" id="takhir" ref={register} />
                        </div>
                        </div>
                    <div className="row mb-3">
                        <div className="mb-3 ml-3">
                            <input type="submit" className="btn btn-primary" name="tombol"  />
                        </div>
                    </div>
                    </form>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Faktur</th>
                        <th>Tgl Order</th>
                        <th>Menu</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        State.map((val,index)=>(
                            <tr key={index}>
                                <td>{no++}</td>
                                <td>{val.idorder}</td>
                                <td>{val.tglorder}</td>
                                <td>{val.menu}</td>
                                <td>{val.hargajual}</td>
                                <td>{val.jumlah}</td>
                                <td>{val.jumlah * val.hargajual}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Detail;
