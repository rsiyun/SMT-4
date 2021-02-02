import {Link} from "react-router-dom"
function Nav() {
    return(
        <div className="App">
            <ul>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/sejarah">Sejarah</a></li>
                <li><a href="/tentang">Tentang</a></li>
                <li><a href="/kontak">Kontak</a></li> */}
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/sejarah">
                <li>Sejarah</li>
                </Link>
                <Link to="/siswa">
                <li>Siswa</li>
                </Link>
                <Link to="/menu">
                <li>Menu</li>
                </Link>
                <Link to="/tentang">
                <li>Tentang</li>
                </Link>
                <Link to="/kontak">
                <li>Kontak</li>
                </Link>
            </ul>
        </div>
    )
}
export default Nav;