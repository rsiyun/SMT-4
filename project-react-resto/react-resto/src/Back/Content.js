import React from 'react';
import { useParams } from 'react-router-dom';
import Kategori from './Kategori';
import Menu from './Menu';
import Pelanggan from './Pelanggan';
import Order from './Order';
const Content = () => {
    const {isi} = useParams();
    let tampil;
    if (isi==='kategori') {
        tampil=<Kategori/>
    }
    if (isi==='menu') {
        tampil=<Menu/>
    }
    if (isi==='pelanggan') {
        tampil = <Pelanggan/>
    }
    if (isi==='order') {
        tampil = <Order/>
    }
    // if (isi==='order') {
    //     console.log('Order')
    // }
    // if (isi==='detail') {
    //     console.log('Order Detail')
    // }
    // if (isi==='admin-page') {
    //     console.log('admin-page')
    // }
    return (
        <div>
            {tampil}
        </div>
    );
}

export default Content;
