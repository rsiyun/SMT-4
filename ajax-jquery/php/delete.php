<?php
require_once "koneksi.php";

$data = stripslashes(file_get_contents("php://input"));
$idpelanggan = json_decode($data, true);
$id = $idpelanggan['idpelanggan'];
if (!empty($id)) {
    $sql = "DELETE FROM tblpelanggan WHERE idpelanggan = $id";

    if ($result = mysqli_query($conn, $sql)) {
        echo "Data berhasil dihapus";
    }
} else {
    echo "Data gagal dihapus";
}
