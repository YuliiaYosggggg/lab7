$(document).ready(function () {
    $('#loadJoke').on('click', function () {
        $.ajax({
            url: 'jokes.txt',
            method: 'GET',
            success: function (data) {
                // Розділяємо жарти на масив за рядками
                const jokes = data.split('\n').filter(joke => joke.trim() !== '');
                // Вибираємо випадковий жарт
                const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                // Виводимо жарт
                $('#joke').text(randomJoke);
            },
            error: function () {
                $('#joke').text('Не вдалося завантажити жарти. Спробуйте пізніше.');
            }
        });
    });
});
