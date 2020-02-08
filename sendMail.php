<?php
	$userName = htmlspecialchars($_POST['userName']);
	$userEmail = htmlspecialchars($_POST['userEmail']);
	$userPhone = htmlspecialchars($_POST['userPhone']);
	$userComment = htmlspecialchars($_POST['userComment']);

	if(empty($userName) or empty($userEmail) or empty($userPhone)) {
		echo 'Some fields are empty!';
		exit();
	} else {
		$address = "vysokovag@altarix.ru";
		// maxidebox@yandex.ru

		$subject = "Запрос с сайта Smart Commune";

		$letter = "<h3>Контактная информация</h3><p>ФИО: ".$userName."</p><p>Почта: ".$userEmail."</p><p>Телефон: ".$userPhone."</p><p>Комментарий: ".userComment."</p>";

		//Заголовки
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers.= 'Content-type: text/html; charset=utf-8' . "\r\n";
		$headers.= 'From: info@altarix.ru'. "\r\n";

		//отправляем письмо

		mail($address, $subject, $letter, $headers);

		//информируем об этом пользователя и перенапрвляем обратно с таймаутом 5 сек.
		echo "Your message has been sent.";
	}
?>