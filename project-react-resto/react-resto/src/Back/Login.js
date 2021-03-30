import React from 'react';
import {useForm} from 'react-hook-form';
import {link} from '../Axios/link';
import {useHistory} from 'react-router-dom';
const Login = () => {
    const {register,handleSubmit,reset} = useForm();
    const history = useHistory();
    async function Login(data){
        const res = await link.post('/login',data);
        let token = await res.data.token;
        let email = res.data.data.email;
        let level = res.data.data.level;
        sessionStorage.setItem('email',email);
        sessionStorage.setItem('level',level);
        sessionStorage.setItem('token',token);
        reset();
        if (gettoken() != 'undefined') {
            history.push('/admin')
            window.location.reload();
        }
    }
    const gettoken = ()=>(sessionStorage.getItem('token'));
    return (
        <div>
            <div className="row mt-4">
                <div className="mx-auto col-4">
                    <form onSubmit={handleSubmit(Login)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" placeholder="Email address" ref={register({required:true})}/>
                            <div id="emailHelp" className="form-text">Login.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Your Password" ref={register({required:true})}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
