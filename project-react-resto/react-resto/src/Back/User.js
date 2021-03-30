import React,{useState} from 'react';
import useGet from '../Hook/useGet'
import {useForm} from 'react-hook-form';
import {link} from '../Axios/link'
import Modal from 'react-modal';
const User = () => {
    const [State] = useGet(`/admin-page/`)
    const [mopen , setMopen] = useState(false);
    const {register,handleSubmit,setValue,errors} = useForm();
    let no = 1;
    function tambah() {
        setMopen(true)
    }
    async function status(id) {
        const data = State.filter((val)=>val.id === id);
        let stat = 0;
        if (data[0].status ===1) {
            stat=0
        }else{
            stat=1
        }
        let kirim = {
            status:stat
        }
        const res = await link.put('/admin-page/'+id, kirim)
    }
   async function simpan(data){
        let user = {
            email:data.email,
            password:data.password,
            level:data.level,
            relasi:'back'
        }
        const res = await link.post("/register",user);
        setMopen(false);
    }
    return (
        
        <div>
            <Modal isOpen={mopen} onRequestClose={()=>setMopen(false)}
            // onAfterOpen={Stateform}
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
                <div className="row ml-2">
                    <h2>Tambah Pelanggan</h2>
                </div>
                <div className="row">
                <div className="col-4">
                <form onSubmit={handleSubmit(simpan)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Email" 
                        ref={register}
                        />
                        {/* {errors.email && "Email harus di isi !"} */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" 
                        ref={register}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="posisi" className="form-label">Posisi</label>
                        <select name="level" ref={register} className="form-control">
                            <option value="admin">Admin</option>
                            <option value="kasir">Kasir</option>
                            <option value="koki">Koki</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-danger mr-3" onClick={()=>setMopen(false)}>Batal</button>
                        <input type="submit" className="btn btn-primary" name="submit" value="Tambah"  />
                    </div>
                </form>
            </div>
                </div>
            </Modal>
            <div className="row">
                <div>
                    <h1>Menu User</h1>
                </div>
            </div>
            <div className="row mb-4">
                <div>
                    <input onClick={()=>(tambah())} className="btn btn-primary" type="submit" value="Tambah"/>
                </div>
            </div>
            <div className="row">
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>User</th>
                                <th>Level</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                State.map((val,index)=>(
                                    <tr key={index}>
                                        <td>{no++}</td>
                                        <td>{val.email}</td>
                                        <td>{val.level}</td>
                                        <td>{
                                            val.status===1?<input className="btn btn-success" type="submit" value="Aktif" onClick={()=>status(val.id)}/>
                                            :<input className="btn btn-danger" type="submit" value="Banned" onClick={()=>status(val.id)}/>

                                        
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

export default User;
