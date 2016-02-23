<?php header('content-type: text/html; charset: utf-8');?>
Recibido los siguientes datos:
<br/>
Nombre:
<?php 
    if (isset($_POST["nombre"])){
        $user = $_POST["nombre"];
        echo $user;
    } else {
        $user = null;
        echo "Nombre Vacio";
    }
?>
<br/>
Edad:
<?php 
    if (isset($_POST["edad"]))
    {
        $user = $_POST["edad"];
        echo $user;
    } else {
        $user = null;
        echo "Edad Vacio";
    }
?>