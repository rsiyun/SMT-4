import useGet from '../Hook/useGet'
import useDelete from '../Hook/useDelete'
const Pelanggan = () => {
    let no = 1
    const [State] = useGet('./pelanggan')
    const [hapus,pesan] = useDelete(`./pelanggan`)
    return (
        <div>
            <div className="row">
                <h2>Data Pelanggan</h2>
            </div>
            <div className="row">
            <p>{pesan}</p>
        </div>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                            <tr>
                                <th>No</th>
                                <th>Pelanggan</th>
                                <th>Alamat</th>
                                <th>telp</th>
                                <th>Hapus</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            State.map((val,index)=>(
                            <tr key={index}>
                                <td>{no++}</td>
                                <td>{val.pelanggan}</td>
                                <td>{val.alamat}</td>
                                <td>{val.telp}</td>
                                <td>
                                    <button onClick={()=>hapus(val.idpelanggan)} className="btn btn-danger">Hapus</button>
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

export default Pelanggan;
