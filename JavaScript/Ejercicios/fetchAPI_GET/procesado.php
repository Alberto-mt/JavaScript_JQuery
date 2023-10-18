<?php
if (isset($_GET['mitexto'])) {
    $str = $_GET['mitexto'];             
    echo "El texto '<i>".$str."</i>' contains ". strlen($str). ' caracteres y '. str_word_count($str, 0). ' palabras.';
}
?> 