import {useState} from 'react'
import Table from './Tabel'
function Menu() {
    const title = "Daftar menu"
    const [menu,setMenu] = useState(
    [
        {
            idmenu:1,
            idkategori:1,
            menu:"nasi bakar",
            gambar:"nasibakar.jpg",
            harga:3000
        },
        {
            idmenu:2,
            idkategori:1,
            menu:"Melon",
            gambar:"Melon.jpg",
            harga:12000
        },
        {
            idmenu:3,
            idkategori:3,
            menu:"pisang goreng",
            gambar:"pisanggoreng.jpg",
            harga:1000
        },
        {
            idmenu:4,
            idkategori:3,
            menu:"risoles",
            gambar:"risoles.jpg",
            harga:1000
        },
        {
            idmenu:5,
            idkategori:2,
            menu:"Semangka",
            gambar:"semangk.jpg",
            harga:12000
        }
    ]
)
    return(
        <div className="App">
            <Table menu={menu} title={title}/>
            <Table menu={menu.filter((data)=>(data.idkategori===1))} title="Buah"/>
        </div>
    )
}
export default Menu;