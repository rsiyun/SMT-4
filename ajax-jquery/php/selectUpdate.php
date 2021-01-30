<?php
require_once "koneksi.php";

$data = stripslashes(file_get_contents("php://input"));
$idpelanggan = json_decode($data, true);
$id = $idpelanggan['idpelanggan'];
$sql = "SELECT * FROM tblpelanggan WHERE idpelanggan = $id";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
echo json_encode($row);
