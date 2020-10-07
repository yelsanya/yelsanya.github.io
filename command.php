<?php
$myfile = fopen("index.php", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);?>
