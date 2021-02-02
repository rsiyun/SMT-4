function Tabel(props) {
    const menus = props.menu
    const title = props.title
    let i=1
    return(
        <div className="App">
            <h1>{title}</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Menu</th>
      <th scope="col">Harga</th>
      <th scope="col">Gambar</th>
    </tr>
  </thead>
        <tbody>
                {menus.map((data)=>( 
                    <tr key={data.idmenu}>
                        <td>{i++}</td>
                        <td>{data.menu}</td>
                        <td>{data.harga}</td>
                        <td>{data.gambar}</td>
                    </tr>
                ))}
                    
                  </tbody>
            </table>
        </div>
    )
}
export default Tabel;