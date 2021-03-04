import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

const Side = () => {
    const {url,path} = useRouteMatch();
    return (
        <div>
          <div className="card" style={{width: '18rem'}}>
            <div className="card-header">
                Menu Restoran
            </div>
            <ul className="list-group list-group-flush">
                <Link to={`${url}/kategori`}>
                <li className="list-group-item">Kategori</li>
                </Link>
                <Link>
                <li className="list-group-item">Menu</li>
                </Link>
                <Link>
                <li className="list-group-item">Pelanggan</li>
                </Link>
                <Link>
                <li className="list-group-item">Order</li>
                </Link>
                <Link>
                <li className="list-group-item">Order Detail</li>
                </Link>
                <Link>
                <li className="list-group-item">Admin</li>
                </Link>
            </ul>
          </div>
        </div>
    );
}

export default Side;
