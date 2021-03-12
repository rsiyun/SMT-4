import useGet from '../Hook/useGet'

const Order = () => {
    const [State] = useGet('./order')
    let no = 1
    return (
        <div>
            <div className="row">
                <div>
                    <h1>Order</h1>
                </div>
            </div>
            <div className="row">

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
                                            val.status === 0? <button className="btn btn-primary">Bayar</button> : <p>Lunas</p>
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
