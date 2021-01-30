<?php
require_once "koneksi.php";
$data = stripslashes(file_get_contents("php://input"));
$datapelanggan = json_decode($data, true);
$id = $datapelanggan['idpelanggan'];
$pelanggan = $datapelanggan['pelanggan'];
$alamat = $datapelanggan['alamat'];
$telp = $datapelanggan['telp'];
if (!empty($id)) {
    $sql = "UPDATE tblpelanggan SET
    pelanggan = '$pelanggan',
    alamat = '$alamat',
    telp = '$telp'
    WHERE idpelanggan = $id ";
    // $result = mysqli_query($conn, $sql);
    if ($result = mysqli_query($conn, $sql)) {
        echo 'Update berhasil';
    } else {
        echo "Update gagal";
    }
} else {
    echo 'Update gagal';
}
