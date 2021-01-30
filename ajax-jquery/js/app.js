$(document).ready(function () {
    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";
    $("#submit").click(function (e) { 
        e.preventDefault();
        id = $('#id').val();
        pelanggan = $('#nama').val();
        alamat = $('#alamat').val();
        telp = $('#telp').val();

        if (id != "") {
            updateData(id)
            
        } else {
            insertData()
        }

        $('#id').val("");
        $('#nama').val("");
        $('#alamat').val("");
        $('#telp').val("");

    });
    $("#btn-tambah").click(function (e) { 
        e.preventDefault();
        $("#title").html("<p>Tambah data</p>");
        $('#id').val("");
        $('#nama').val("");
        $('#alamat').val("");
        $('#telp').val("");

    });
    $('tbody').on("click",".btn-del", function () {
        let id = $(this).attr("data-id");
        if (confirm("Yakin Ingin Menghapus ?")) {
            deleteData(id)
        }
    });
    $('tbody').on("click",".btn-edit", function () {
        let id = $(this).attr("data-id");
        $("#title").html("<p>Ubah data</p>");
        selectUpdate(id);
    });
    function selectUpdate(id) {
        let idpelanggan = {
            idpelanggan: id
        }
        $.ajax({
            type: "POST",
            url: "php/selectUpdate.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            success: function (response) {
               let data = JSON.parse(response);
               console.log(data.idpelanggan);
               console.log(data.pelanggan);
               console.log(data.alamat);
               console.log(data.telp);

               $("#id").val(data.idpelanggan)
               $("#nama").val(data.pelanggan)
               $("#alamat").val(data.alamat)
               $("#telp").val(data.telp)
            }
            
        });
    }
    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            dataType: "json",
            success: function (response) {
                let out="";
                let no = 1;
                $.each(response, function (key, value) { 
                    out+=`
                    <tr>
                        <td>${no++}</td>
                        <td>${value.pelanggan}</td>
                        <td>${value.alamat}</td>
                        <td>${value.telp}</td>
                        <td>
                            <button type="button" class="btn btn-info btn-edit" data-id=${value.idpelanggan} data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                            <button type="button" class="btn btn-danger btn-del" data-id=${value.idpelanggan}>Delete</button>
                        </td>
                    </tr>
                    `
                });
                $('#isidata').html(out);
            }
        });
    }
    function insertData() {
        let dataPelanggan={
            pelanggan: pelanggan,
            alamat: alamat,
            telp: telp
        }
        $.ajax({
            type: "POST",
            url: "php/insert.php",
            data: JSON.stringify(dataPelanggan),
            // dataType: "json",
            success: function (response) {
                let out = `<p>${response}</p>`
                $('#msg').html(out);
                selectData();
            }
        });
        
    }
    function updateData() {
        let datapelanggan = {
            idpelanggan: id,
            pelanggan: pelanggan,
            alamat: alamat,
            telp: telp
        }
        $.ajax({
            type: "POST",
            url: "php/update.php",
            cache: false,
            data: JSON.stringify(datapelanggan),
            success: function (response) {
                let out = `<p>${response}</p>`
                $('#msg').html(out);
                selectData();
            }
        })
    }
    function deleteData(id) {
        let idpelanggan = {
            idpelanggan: id
        }
        $.ajax({
            type: "POST",
            url: "php/delete.php",
            data: JSON.stringify(idpelanggan),
            success: function (response) {
                let out = `<p>${response}</p>`
                $('#msg').html(out)
                selectData()
            }
            
        });
        
    }
    selectData()
});