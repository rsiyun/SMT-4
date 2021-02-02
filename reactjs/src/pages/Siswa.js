import Listsiswa from "./Listsiswa";
function Siswa() {
    const nama = ['siyun','ken','gayuh']
    return(
        <div className="App">
            <Listsiswa judul={nama}/>
        </div>
    )
}
export default Siswa;