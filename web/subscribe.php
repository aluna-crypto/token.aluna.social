<?php

if(isset($_GET['email'])) {

	$body = array(
		'email' => $_GET['email']
	);
	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => "https://api.sendgrid.com/v3/contactdb/recipients",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => "",
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 30,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS => '[' . json_encode($body) . ']',

	  CURLOPT_HTTPHEADER => array(
	    "authorization: Bearer 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",
	    "content-type: application/json"
	  ),
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	$result = $response;
	echo json_encode($result);

}


?>