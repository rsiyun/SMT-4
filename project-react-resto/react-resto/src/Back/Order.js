import useGet from '../Hook/useGet'
import React,{ useState } from 'react';
import {link} from '../Axios/link'
import {useForm} from 'react-hook-form';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const Order = () => {
    let today = new Date().toISOString().slice(0,10);
    const [mopen , setMopen] = useState(false);
    const {register,handleSubmit,setValue,errors} = useForm();
    const [awal,setAwal]=useState('2021-03-12');
    const [akhir,setAkhir]=useState(today);
    const [State] = useGet(`/order/${awal}/${akhir}`)
    const [pelanggan,setPelanggan] = useState('')
    const [total,setTotal] = useState(0)
    const [idorder,setIdorder] = useState()
    let no = 1
    function cari(data) {
        setAwal(data.tawal)
        setAkhir(data.takhir)
        console.log(awal+akhir);
    }
    function filterData(id) {
        const data = State.filter(val=>(val.idorder === id))
        console.log(data)
        setPelanggan(data[0].pelanggan);
        setTotal(data[0].total);
        setIdorder(data[0].idorder)
        setMopen(true)

    }
    async function simpan(data) {
        let hasil = {
            bayar:data.bayar,
            kembali:data.bayar - data.total,
            status:1
        }
        const res = await link.put(`/order/${idorder}`,hasil)
        setMopen(false)
    }
    function Stateform() {
        setValue("total",total)
    }
    return (
        <div>
            <Modal isOpen={mopen} onRequestClose={()=>setMopen(false)}
            onAfterOpen={Stateform}
            style={{
                overlay:{
                background:'transparent !important',
                },
                content:{
                    top:'50%',
                    left:'50%',
                    right:'auto',
                    bottom:'auto',
                    marginRight:'-50%',
                    transform:'translate(-50%,-50%)',
                    width:'40%'
                }
            }}>
                <div className="row">
                    <h2>Pembayaran Order {pelanggan}</h2>
                </div>
                <div className="row">
                <div className="col">
                <form onSubmit={handleSubmit(simpan)}>
                    <div className="mb-3">
                        <label htmlFor="total" className="form-label">Total</label>
                        <input type="number" className="form-control" name="total" placeholder="total" ref={register({required:true})} />
                    </div>
                    <div className="mb-3">
                            <label htmlFor="bayar" className="form-label">{errors.bayar && "Pembayaran Kurang!"?errors.bayar &&`Pembayaran Kurang!`:`bayar`}</label>
                        <input type="number" className="form-control" name="bayar" placeholder="Bayar" ref={register({required:true,min:total})} />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-danger mr-3" onClick={()=>setMopen(false)}>Batal</button>
                        <input type="submit" className="btn btn-primary" name="submit" value="Bayar"  />
                    </div>
                </form>
            </div>
                </div>
            </Modal>
            <div className="row">
                <div>
                    <h1>Order</h1>
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
            <div className="row">
                <div>
                    <table className="table table-bordered">
                        <thead >
                            <tr>
                                <th>No</th>
                                <th>Pelangan</th>
                                <th>Tanggal Order</th>
                                <th>Total</th>
                                <th>bayar</th>
                                <th>kembali</th>
                                <th>status</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {
                                State.map((val,index)=>(
                                    <tr key={index}>
                                        <td>{no++}</td>
                                        <td>{val.pelanggan}</td>
                                        <td>{val.tglorder}</td>
                                        <td>{val.total}</td>
                                        <td>{val.bayar}</td>
                                        <td>{val.kembali}</td>
                                        <td>{
                                            val.status === 0?<button className="btn btn-primary" onClick={()=>filterData(val.idorder)}>Bayar</button> : <p>Lunas</p>
                                        }</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    );
}

export default Order;
