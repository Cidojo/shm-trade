$(document).ready(function() {
    $("#order-form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "php/send.php", //путь до php фаила отправителя
            data: form_data,
            async: true,
            cache: false,
            headers: { "cache-control": "no-cache" },
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Спасибо за обращение! Ваше сообщение успешно отпрвлено!");
            }});
    });
});