<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="js/jquery.js"></script>
    <script src="js/app.js" defer></script>

    <title>Ajax-Jquery Bootstrap dan PHP!</title>
</head>

<body>
    <div class="container">
        <div class="row mt-4">
            <h1>Belajar Ajax-Jquery Bootstrap dan PHP</h1>
        </div>
        <div class="row">
            <div class="col-4">
                <button type="button" id="btn-tambah" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Tambah data
                </button>
            </div>
        </div>
        <div class="row mt-4">

            <!-- <div class="col-sm">
                <div class="row">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>
                </div>
                <div id="msg">
                </div>
                <div class="row">

                </div>
            </div> -->
            <div class="col-sm">
                <div class="row">
                    <h2>Data Pelanggan</h2>
                </div>
                <div class="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">Telphone</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody id="isidata">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Tambah data</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" hidden id="id">
                                <label for="nama" class="form-label">Nama</label>
                                <input type="text" class="form-control" id="nama" required>
                                <div id="namaHelp" class="form-text">Harus diisi.</div>
                            </div>
                            <div class="mb-3">
                                <label for="alamat" class="form-label">Alamat</label>
                                <input type="text" class="form-control" id="alamat" required>
                            </div>
                            <div class="mb-3">
                                <label for="telp" class="form-label">Telephon</label>
                                <input type="text" class="form-control" id="telp" required>
                            </div>
                            <button type="submit" id="submit" data-bs-dismiss="modal" class="btn btn-primary">Simpan</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
    -->
</body>

</html>