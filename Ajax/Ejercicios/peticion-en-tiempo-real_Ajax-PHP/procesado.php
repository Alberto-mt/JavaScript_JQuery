<?php

if (isset($_GET['temporizador']) && isset($_POST['nombre']) && strlen(trim($_POST['nombre']))>0) {

  $nombre = $_POST['nombre'];
  $temporizador = $_GET['temporizador'];

  echo 'Hola <b>'.$nombre.'</b>.<br />Mandaste los datos al servidor tras estar <i>'. $temporizador. '</i> segundos en esta pagina web.';
}
else {
  echo 'Introduce tu nombre.';
}
?>