import React,{useState,useEffect} from 'react';
let count = 0;
const Menu = () => {
    const [tes, setTest] = useState(0);
    function coba() {
        console.log('Coba');
        setTest(count++);
    }
    useEffect(() => {
        console.log(tes)
    }, [tes]);
    return (
        <div>
            <h1>Menu Menu</h1>
            <button onClick={coba}>click</button>
        </div>
    );
}

export default Menu;
