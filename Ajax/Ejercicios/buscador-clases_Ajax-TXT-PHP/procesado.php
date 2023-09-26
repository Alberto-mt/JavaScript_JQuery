<?php
$inicio_clase = $_GET["inicio"];
$fin_clase = $_GET["fin"];
$file = file("clases.txt");
$cuenta_clases = 0;
$clases = array();
for($i = 0; $i < count($file); $i++) {
    $tokens = explode(" ", $file[$i], 6);
    if($tokens[1] == $inicio_clase && $tokens[2] == $fin_clase) {
        if($tokens[3] < $tokens[4]) {
            $cuenta_clases++;
            $clase = array("codigo" => $tokens[0],"huecos" => ($tokens[4]-$tokens[3]),"nombre" => $tokens[5]);
            $clases[] = $clase;
            }
        }
    }
            $datos_salida = array("conteo" => $cuenta_clases, "asignaturas" =>$clases);
            header("Content-type: application/json");
            print(json_encode($datos_salida));
?>