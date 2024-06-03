<?php
    // Calendarific (calendario festività)
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST['country']) && isset($_POST['year'])) {
            $country = $_POST['country'];
            $year = $_POST['year'];

            $url = "https://calendarific.com/api/v2/holidays?api_key=hwEecd9IsyOfMmsPXw7W52CpNyvOTdkp&country=$country&year=$year";

            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            $response = curl_exec($ch);

            if(curl_errno($ch)){
                echo 'Errore durante la richiesta API: ' . curl_error($ch);
                die();
            }

            curl_close($ch);

            header('Content-Type: application/json');
            echo $response;
        } else {
            echo json_encode(array('error' => 'Missing country or year'));
        }
    } else {
        echo json_encode(array('error' => 'Invalid request method'));
    }
?>