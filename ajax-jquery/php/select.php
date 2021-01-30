<?php
require_once "koneksi.php";
$sql = "SELECT * FROM tblpelanggan";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $data = [];
    // for ($i = 0; $i < $row = mysqli_fetch_assoc($result); $i++) {
    //     $data = $row;
    //     print_r($data);
    // }
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}
echo json_encode($data);
