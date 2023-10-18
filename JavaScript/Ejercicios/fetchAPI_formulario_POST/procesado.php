<?php

if (isset($_POST['nombre']) && isset($_POST['mensaje'])) {
  $nombre = strip_tags($_POST['nombre']);
  $mensaje = strip_tags($_POST['mensaje']);


  if (strlen($nombre)>0 && strlen($mensaje)>0) {
    echo 'Bienvenido <b>'. $nombre. '</b><br />Mensaje que has enviado: <i>'. $mensaje. '</i>';
  }
  else {
    echo 'Rellena todos los campos';
  }
}
?> 