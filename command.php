<?php
$myfile = fopen("/challenge/web-serveur/ch13/index.php", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);
?>
