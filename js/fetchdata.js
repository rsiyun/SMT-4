document.querySelector("#klik").addEventListener("click", tampil)
function tampil() {
    let url = "https://jsonplaceholder.typicode.com/todos"
    // console.log("sucsess");
    fetch(url)
    .then(res => res.json())
    // .then(function (data) {
    //     console.log(data);
    // })
    .then(data=>{
        let out = `<ul>`
        data.forEach(element => {
            out+=`<li>${element.title}</li>`
        });
        out+=`</ul>`
        document.querySelector("#isi").innerHTML=out;
    })
}