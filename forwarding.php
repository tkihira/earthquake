<?php
    $datetime = $_GET['datetime'];
    echo file_get_contents("http://www.kmoni.bosai.go.jp/webservice/hypo/eew/".$datetime.".json?jsoncallback=callback");
