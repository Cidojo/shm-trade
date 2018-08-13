<?php
$order_form__name = $_POST['order-form__name'];
$order_form__email = $_POST['order-form__email'];
$order_form__text = $_POST['order-form__text'];

$order_form__name = htmlspecialchars($order_form__name);
$order_form__email = htmlspecialchars($order_form__email);
$order_form__text = htmlspecialchars($order_form__text);

$order_form__name = urldecode($order_form__name);
$order_form__email = urldecode($order_form__email);
$order_form__text = urldecode($order_form__text);

$order_form__name = trim($order_form__name);
$order_form__email = trim($order_form__email);
$order_form__text = trim($order_form__text);

if((isset($_POST['order-form__name'])&&$_POST['order-form__name']!="")&&(isset($_POST['order-form__email'])&&$_POST['order-form__email']!="")&&(isset($_POST['order-form__text'])&&$_POST['order-form__text']!="")) {

  $message = 'От: '.$_POST['order-form__email'].'
Имя: '.$_POST['order-form__name'].'
Сообщение: '.$_POST['order-form__text'].'
';
 $header_ = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/plain; charset=UTF-8' . "\r\n";
  mail('info@shm-trade.ru', 'Заявка с сайта', $message, $header_ . "From: <order@shm-trade.ru>");
}
?>