<?php 
include('conexion.php');

$ncontrol = $_POST['ncontrol'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$edad = $_POST['edad'];

$sql = "select ncontrol, nombre, apellido, edad, from alumnos";
$resultado = mysqli_query($conexion,$sql);
$arregloDatos = array();
if (msyqli_num_rows($resultado) > 0) {
	while ($registro=mysqli_fetch_array($resultado)) {
    	array_push($arregloDatos, $registro )
	}
}

print json_encode($arregloDatos);
?>