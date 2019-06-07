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

	$initial_response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	$size = json_decode($initial_response);
	$size = $size->persisted_recipients;
	$size = sizeof($size);

	$initial_result = json_encode($initial_response);

	$erroroutput = array(
		'errors' => $initial_result,
		'success' => 'false',
		'code' => 'first',
		'size' => $size
	);

	if($size < 1) {
		echo json_encode($erroroutput);
	} else {
		

		$curl = curl_init();

		$token = json_decode(json_decode($initial_result));
		$url = $token->persisted_recipients[0];

		curl_setopt_array($curl, array(
		  CURLOPT_URL => "https://api.sendgrid.com/v3/contactdb/lists/7952345/recipients/" . $url,
		  CURLOPT_RETURNTRANSFER => true,
		  CURLOPT_ENCODING => "",
		  CURLOPT_MAXREDIRS => 10,
		  CURLOPT_TIMEOUT => 30,
		  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		  CURLOPT_CUSTOMREQUEST => "POST",
		  // CURLOPT_POSTFIELDS => '[' . json_encode($body) . ']',

		  CURLOPT_HTTPHEADER => array(
		    "authorization: Bearer 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",
		    "content-type: application/json"
		  ),
		));

		$second_response = curl_exec($curl);
		$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
		$err = curl_error($curl);

		curl_close($curl);

		$second_result = json_decode($second_response);

		if($httpcode == '201') {
			$success = array(
				'errors' => array(),
				'success' => 'true',
				'status' => $httpcode,
			);
			echo json_encode($success);
		} else {
			$erroroutput = array(
				'errors' => $second_result,
				'success' => 'false',
				'url' => $url,
				'status' => $httpcode,
				'code' => 'second'
			);

			echo json_encode($erroroutput);
		}


	}

}


?>