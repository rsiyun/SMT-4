import { useState,useEffect } from 'react';
import {link} from '../Axios/link'

const useGet = (url) => {
    const [State, setState] = useState([])
    useEffect(() => {
        let ambil = true;
        async function fetchData() {
            const result = await link.get(url)
            if (ambil) {
                setState(result.data)
            }
        }
        fetchData()
        return () => {
            ambil = false;
        };
    }, [State]);

    return [State];
}

export default useGet;
