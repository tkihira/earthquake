<?php
    $datetime = $_GET['datetime'];
    header("Access-Control-Allow-Origin: *");
    echo file_get_contents("http://www.kmoni.bosai.go.jp/webservice/hypo/eew/".$datetime.".json?jsoncallback=callback");
