document.querySelector(".send").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Находим выбранный шрифт
    const selectedFont = document.querySelector(".font-select input[type=radio]:checked");

    if (selectedFont) {
      const selectedFontValue = selectedFont.value;

      // Отправляем выбранный шрифт на сервер с помощью AJAX
      fetch("/send_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ selectedFont: selectedFontValue })
      })
      .then(response => response.json())
      .then(data => {
        // Обработка ответа с сервера, если нужно
        console.log(data);
      })
      .catch(error => {
        console.error("Ошибка:", error);
      });

      // Отправляем форму
      document.getElementById("myForm").submit();
    }
  });