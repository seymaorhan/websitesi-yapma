<!DOCTYPE html>
<html>
<body>



<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];

    if ($email == "seyma.orhan@ogr.sakarya.edu.tr" && $pwd == "b221210055") {
        echo "Başarıyla giriş yapıldı!";
    } 
    else {
        echo "Kullanıcı adı veya şifre hatalı!";
    }
    echo "Hoşgeldin ".$email;
}
?>



</body>
</html>